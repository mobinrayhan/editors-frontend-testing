// import node module libraries
import { Fragment, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { CircleHalf, MoonStarsFill, SunFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

// import chat actions from Redux chatSlice
import { changeSkin, setSkinModeConfig } from "store/appSlice";

// import required hook
import useLocalStorage from "hooks/useLocalStorage";

// import hooks
import useMounted from "hooks/useMounted";

const DarkLightMode = ({ className }) => {
  const hasMounted = useMounted();
  const isDarkMode =
    hasMounted && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });

  // Redux state and dispatch
  const defaultSkin = useSelector((state) => state.app.skin);
  const dispatch = useDispatch();
  const { storageValue, setStorageValue, getStorageValue } = useLocalStorage(
    "skin",
    defaultSkin
  );

  const [skinMode, setSkinMode] = useState(
    getStorageValue("skinMode", storageValue)
  );
  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute(
        "data-theme",
        getStorageValue(
          "skin",
          skinMode === "auto" ? (isDarkMode ? "dark" : "light") : skinMode
        )
      );
    setStorageValue(
      skinMode === "auto" ? (isDarkMode ? "dark" : "light") : storageValue
    );
    dispatch(
      changeSkin(
        skinMode === "auto" ? (isDarkMode ? "dark" : "light") : skinMode
      )
    );
    dispatch(setSkinModeConfig(skinMode));
    localStorage.setItem("skinMode", skinMode);
  }, [storageValue, skinMode]);

  const changeSkinMode = (eventKey) => {
    setSkinMode(eventKey);
    setStorageValue(
      eventKey === "auto" ? (isDarkMode ? "dark" : "light") : eventKey
    );
  };
  return (
    <Fragment>
      {hasMounted && (
        <Dropdown className={"ms-2 " + className} onSelect={changeSkinMode}>
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="btn btn-white btn-icon rounded-circle d-flex align-items-center"
            id="dropdownUser"
          >
            {skinMode === "light" ? (
              <SunFill />
            ) : skinMode === "dark" ? (
              <MoonStarsFill />
            ) : (
              <CircleHalf />
            )}
            <span className="visually-hidden bs-theme-text">Toggle theme</span>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown dropdown-menu-end mt-1 py-0"
            align="end"
            aria-labelledby="dropdownUser"
            show={hasMounted && isDesktop ? true : false}
          >
            <Dropdown.Item eventKey="light" className="mt-3">
              <SunFill />
              <span className="ms-2">Light</span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="dark">
              <MoonStarsFill />
              <span className="ms-2">Dark</span>
            </Dropdown.Item>
            <Dropdown.Item eventKey="auto" className="mb-3">
              <CircleHalf />
              <span className="ms-2">Auto</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Fragment>
  );
};

export default DarkLightMode;
