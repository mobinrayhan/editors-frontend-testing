"use client";

// import node module libraries
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// import tippy tooltip
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

const GKTippy = ({
  children,
  content = "Tool Tip Text",
  placement = "top",
}) => {
  const defaultSkin = useSelector((state) => state.app.skin);
  return (
    <Tippy
      content={
        <small
          className={`fw-bold ${defaultSkin === "light" ? "text-dark" : ""}`}
        >
          {content}
        </small>
      }
      theme={defaultSkin === "light" ? "dark" : "light"}
      placement={placement}
      animation={"scale"}
    >
      {children}
    </Tippy>
  );
};

// ** PropTypes
GKTippy.propTypes = {
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ]),
};

export default GKTippy;
