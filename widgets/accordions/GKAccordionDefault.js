// import node module libraries
import Link from "next/link";
import { Fragment, useContext } from "react";
import { Accordion, AccordionContext, ListGroup } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import { mdiAssistant, mdiPagePreviousOutline, mdiPlay } from "@mdi/js";
import Icon from "@mdi/react";
import ErrorPage from "components/ErrorPage";

const GKAccordionDefault = ({ accordionItems, itemClass, sections, slug }) => {
  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <Fragment>
        <Link
          href="#"
          scroll={false}
          onClick={decoratedOnClick}
          aria-expanded={isCurrentEventKey}
          className="d-flex align-items-center text-inherit text-decoration-none h4 mb-0"
          data-bs-toggle="collapse"
          aria-controls="courseTwo"
        >
          <div className="me-auto">{children.title}</div>
          <span className="chevron-arrow ms-4">
            <i className="fe fe-chevron-down fs-4"></i>
          </span>
        </Link>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Accordion defaultActiveKey={accordionItems[0].id}>
        {sections?.length <= 0 ? (
          <ErrorPage />
        ) : (
          <ListGroup as="ul" variant="flush">
            {sections?.map((item, index) => {
              if (false) {
              } else {
                return (
                  <ListGroup.Item
                    key={index}
                    as="li"
                    className={`${itemClass ? itemClass : ""}`}
                  >
                    <ContextAwareToggle eventKey={item.id}>
                      {item}
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey={item.id} className="test">
                      <ListGroup className="py-4" as="ul">
                        {/* video */}
                        {item?.videos?.map((subitem, subindex) => (
                          <ListGroup.Item
                            key={subindex}
                            as="li"
                            disabled={!subitem?.isPreview}
                            className="px-0 py-1 border-0"
                          >
                            {subitem?.isPreview ? (
                              <Link
                                href={`/student/dashboard/${slug}/section-${item?.id}-video-${subitem?.id}`}
                                className={`d-flex justify-content-between align-items-center text-inherit text-decoration-none`}
                              >
                                <VideoDetail subitem={subitem} />
                              </Link>
                            ) : (
                              <Link
                                href={"/"}
                                className={`d-flex justify-content-between align-items-center text-inherit text-decoration-none`}
                                style={{
                                  pointerEvents: "none",
                                }}
                              >
                                <VideoDetail subitem={subitem} />
                              </Link>
                            )}
                          </ListGroup.Item>
                        ))}
                        {/* resources */}
                        {item?.resources?.map((subitem, subindex) => {
                          console.log("====================================");
                          console.log(subitem);
                          console.log("====================================");
                          return (
                            <ListGroup.Item
                              key={subindex}
                              as="li"
                              disabled={!subitem?.isPreview}
                              className="px-0 py-1 border-0"
                            >
                              <Link
                                target="_blank"
                                href={
                                  subitem?.isPreview
                                    ? subitem?.resourceLink
                                    : ""
                                }
                                style={{
                                  pointerEvents: subitem?.isPreview
                                    ? "all"
                                    : "none",
                                }}
                                className={`d-flex justify-content-between align-items-center text-inherit text-decoration-none`}
                              >
                                <div className="d-flex text-truncate ">
                                  <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                    {!subitem?.isPreview ? (
                                      <i className="fe fe-lock fs-4"></i>
                                    ) : (
                                      <Icon
                                        path={mdiPagePreviousOutline}
                                        size={0.6}
                                      />
                                    )}{" "}
                                  </span>
                                  <span className="fs-5">
                                    {subitem?.title}

                                    <br />
                                    <span
                                      style={{
                                        overflow: "hidden",
                                        color: "inherit",
                                        textOverflow: "ellipsis",
                                      }}
                                    >
                                      {subitem.description}
                                    </span>
                                  </span>
                                </div>
                              </Link>
                            </ListGroup.Item>
                          );
                        })}
                        {/* assignments */}
                        {item?.assignment?.map((subitem, subindex) => (
                          <ListGroup.Item
                            key={subindex}
                            as="li"
                            disabled={!subitem?.isPreview}
                            className="px-0 py-1 border-0"
                          >
                            <Link
                              target="_blank"
                              href={
                                !subitem?.isPreview
                                  ? ""
                                  : subitem?.assignmentLink
                              }
                              style={{
                                pointerEvents: !subitem?.isPreview
                                  ? "none"
                                  : "all",
                              }}
                              className={`d-flex justify-content-between align-items-center text-inherit text-decoration-none`}
                            >
                              <div className="d-flex text-truncate ">
                                <span className="icon-shape bg-light icon-sm rounded-circle me-2">
                                  {!subitem?.isPreview ? (
                                    <i className="fe fe-lock fs-4"></i>
                                  ) : (
                                    <Icon path={mdiAssistant} size={0.6} />
                                  )}{" "}
                                </span>
                                <span className="fs-5">
                                  {subitem.title}
                                  <br />
                                  <span
                                    style={{
                                      overflow: "hidden",
                                      color: "inherit",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    {subitem?.description}
                                  </span>
                                </span>
                              </div>
                              {/* <div className="text-truncate">
                              <span>
                                {millisToHoursMinutes(
                                  subitem.duration + 12314444
                                )}
                              </span>
                            </div> */}
                            </Link>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Accordion.Collapse>
                  </ListGroup.Item>
                );
              }
            })}
          </ListGroup>
        )}
      </Accordion>
    </Fragment>
  );
};

export default GKAccordionDefault;

function VideoDetail({ subitem }) {
  return (
    <>
      <div className="d-flex align-items-center text-truncate ">
        <span className="icon-shape bg-light icon-sm rounded-circle me-2">
          {!subitem.isPreview ? (
            <i className="fe fe-lock fs-4"></i>
          ) : (
            <Icon path={mdiPlay} size={0.8} />
          )}{" "}
        </span>
        <span className="fs-5">
          {subitem.title}
          <br />
          <span
            style={{
              overflow: "hidden",
              color: "#00000080",
              textOverflow: "ellipsis",
            }}
          >
            {subitem?.description}
          </span>
        </span>
      </div>
      <div className="text-truncate " style={{ minWidth: "25px" }}>
        <span>{subitem?.duration}</span>
      </div>
    </>
  );
}
