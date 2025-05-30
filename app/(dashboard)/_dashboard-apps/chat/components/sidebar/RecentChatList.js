// import node module libraries
import Link from "next/link";
import React from "react";
import { Dropdown, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// import chat actions from Redux chatSlice
import { changeThread } from "store/chatSlice";

// import bootstrap icons
import { EyeSlash, PersonPlus, PersonX, PinAngle } from "react-bootstrap-icons";

// import custom components
import { Avatar } from "components/bootstrap/Avatar";

// import hook file
import useChatOperations from "hooks/useChatOperations";

const RecentChatList = (props) => {
  const { setHideChatBox } = props;

  // Redux state and dispatch
  const threads = useSelector((state) => state.chat.threads);
  const activeThread = useSelector((state) => state.chat.activeThread);
  const dispatch = useDispatch();

  const {
    getUserDetails,
    getGroupDetails,
    getLastMessage,
    getLastMessageTime,
  } = useChatOperations();

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      className="btn btn-white btn-icon btn-sm rounded-circle primary-hover"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));
  CustomToggle.displayName = "CustomToggle";

  const ActionMenu = () => {
    return (
      <Dropdown drop="start">
        <Dropdown.Toggle as={CustomToggle}>
          <i className="fe fe-more-horizontal fs-3"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="start">
          <Dropdown.Item eventKey="1" className="px-2">
            <PinAngle size={12} className="dropdown-item-icon" /> Pin
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className="px-2">
            <PersonX size={12} className="dropdown-item-icon" /> Mute
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className="px-2">
            <EyeSlash size={12} className="dropdown-item-icon" /> Hide
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" className="px-2">
            <PersonPlus size={12} className="dropdown-item-icon" /> Add to
            Favorite
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const handleOpenChatThread = (item) => {
    setHideChatBox(true);
    dispatch(changeThread(item));
  };

  return (
    <SimpleBar style={{ maxHeight: "650px" }}>
      <ListGroup bsPrefix="list-unstyled" as="ul" className="contacts-list">
        {threads.map((item, index) => {
          let details =
            item.type === "user"
              ? getUserDetails(item)
              : item.type === "group"
              ? getGroupDetails(item)
              : null;
          if (details !== null) {
            return (
              <ListGroup.Item
                as="li"
                bsPrefix=" "
                key={index}
                role="button"
                className={`py-3 px-4 chat-item contacts-item ${
                  activeThread.id === item.id ? "bg-light" : ""
                }`}
              >
                {item.type === "user" ? (
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => handleOpenChatThread(item)}
                  >
                    <Link href="#" className="text-link contacts-link">
                      <div className="d-flex">
                        <Avatar
                          size="md"
                          className="rounded-circle"
                          type={details.image ? "image" : "initial"}
                          src={details.image}
                          status={details.status.toLowerCase()}
                          alt={details.name}
                          name={details.name}
                        />
                        <div className=" ms-2">
                          <h5 className="mb-0 fw-bold"> {details.name}</h5>
                          <p
                            className="mb-0 text-muted text-truncate"
                            style={{ maxWidth: "145px" }}
                          >
                            {getLastMessage(item)}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <small className="text-muted">
                        {getLastMessageTime(item)}
                      </small>
                      {item.read ? null : (
                        <div className="text-end">
                          <span className="icon-shape icon-xs text-white bg-danger rounded-circle fw-bold fs-6">
                            1
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => handleOpenChatThread(item)}
                  >
                    <Link href="#" className="text-link contacts-link">
                      <div className="d-flex">
                        <Avatar
                          size="md"
                          className="rounded-circle"
                          type={details.users[0].image ? "image" : "initial"}
                          src={details.users[0].image}
                          status={details.users[0].status.toLowerCase()}
                          alt={details.users[0].name}
                          name={details.users[0].name}
                        />
                        <div className="position-absolute mt-3 ms-n2">
                          <Avatar
                            size="sm"
                            className="rounded-circle"
                            type={details.users[1].image ? "image" : "initial"}
                            src={details.users[1].image}
                            alt={details.users[1].name}
                            status={details.users[1].status.toLowerCase()}
                            name={details.users[1].name}
                          />
                        </div>
                        <div className=" ms-2">
                          <h5 className="mb-0 fw-bold"> {details.name}</h5>
                          <p
                            className="mb-0 text-muted text-truncate"
                            style={{ maxWidth: "145px" }}
                          >
                            {getLastMessage(item)}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <small className="text-muted">
                        {getLastMessageTime(item)}
                      </small>
                      {item.read ? null : (
                        <div className="text-end">
                          <span className="icon-shape icon-xs text-white bg-danger rounded-circle fw-bold fs-6">
                            1
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="chat-actions">
                  <ActionMenu />
                </div>
              </ListGroup.Item>
            );
          }
          return false;
        })}
      </ListGroup>
    </SimpleBar>
  );
};
export default RecentChatList;
