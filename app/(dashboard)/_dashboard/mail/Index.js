"use client";

// import node module libraries
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-feather";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

// import store and actions from redux slice
import {
  setAllCheck,
  setAllUncheck,
  setFilter,
  setSearch,
} from "store/mailSlice";

// import hooks
import useMounted from "hooks/useMounted";

// import sub components
import MailRow from "./components/MailRow";
import MailSidebar from "./components/MailSidebar";

const Mail = () => {
  const ToggleActions = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href="#"
      ref={ref}
      className="btn btn-outline-secondary btn-icon"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));
  ToggleActions.displayName = "ToggleActions";

  const ToggleFilter = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));
  ToggleFilter.displayName = "ToggleFilter";

  const hasMounted = useMounted();
  /* redux hook for method and data initialization */
  const dispatch = useDispatch();
  const { mails, search, filters, activeFilter } = useSelector(
    (state) => state.mail
  );
  const [checkedEmails, setCheckedEmails] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const refCheckAllMails = useRef();

  /** filter recordset based on selected filter option */
  const filteredEmails = mails
    .filter((email) => {
      if (search) {
        return email.title.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    })
    .filter((email) => {
      if (activeFilter === "All" || activeFilter === "None") {
        return email;
      } else if (activeFilter === "Unread") {
        return !email.read;
      } else if (activeFilter === "Read") {
        return email.read;
      } else if (activeFilter === "Starred") {
        return email.star;
      } else if (activeFilter === "Unstarred") {
        return !email.star;
      }
    });

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
    if (filter === "None") {
      setCheckAll(false);
      dispatch(setAllUncheck());
    }
  };

  useEffect(() => {
    const checkedEmailsList = filteredEmails.filter(
      (email) => email.is_checked === true
    );
    const indeterminateEmailsList =
      checkedEmailsList.length > 0
        ? filteredEmails.length === checkedEmailsList.length
          ? false
          : true
        : false;
    const checkedAll =
      checkedEmailsList.length > 0
        ? filteredEmails.length === checkedEmailsList.length
          ? true
          : false
        : false;
    refCheckAllMails.current.indeterminate = indeterminateEmailsList;
    refCheckAllMails.current.checked = checkedAll;
    setCheckAll(checkedAll);
  }, [checkedEmails, filteredEmails]);

  // mails listing with pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 13;
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(filteredEmails.length / itemPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayMails = filteredEmails
    .slice(pagesVisited, pagesVisited + itemPerPage)
    .map((mail, index) => {
      return (
        <ListGroup.Item
          className={`list-group-item-action px-4 list-mail ${
            mail.read ? "bg-light" : ""
          }`}
          key={index}
        >
          <MailRow
            mail={mail}
            setCheckedEmails={setCheckedEmails}
            checkedEmails={checkedEmails}
            filteredEmails={filteredEmails}
          />
        </ListGroup.Item>
      );
    });
  const setFromPage = (recordsPerPage, pageNo) => recordsPerPage * pageNo + 1;
  const setToPage = (recordsPerPage, pageNo, recordsOnCurrentPage) => {
    return recordsOnCurrentPage < recordsPerPage
      ? recordsPerPage * (pageNo + 1) - (recordsPerPage - recordsOnCurrentPage)
      : recordsPerPage * (pageNo + 1);
  };
  // end of pagination

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4">
            <div className="mb-3 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Mail</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Apps</Breadcrumb.Item>
                <Breadcrumb.Item active>Mail</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} xs={12}>
          <Card>
            <Row className="g-0">
              <Col xxl={2} xl={3} className="border-end">
                <MailSidebar />
              </Col>
              <Col xxl={10} xl={9} xs={12}>
                <Card.Header className="p-4">
                  <div className=" d-md-flex justify-content-between align-items-center">
                    <div className="d-flex flex-wrap gap-2 mb-2 mb-md-0">
                      <div className="d-flex align-items-center border px-3 py-2 rounded-2">
                        <Form.Check
                          type="checkbox"
                          id="checkAllMails"
                          onChange={(e) => {
                            dispatch(setAllCheck());
                            setCheckedEmails(!checkedEmails);
                          }}
                          value={checkAll}
                          checked={checkAll}
                          ref={refCheckAllMails}
                        />
                        <Dropdown>
                          <Dropdown.Toggle
                            as={ToggleFilter}
                            id="dropdown-custom-components"
                          >
                            <div className="dropdown-toggle text-inherit ms-2">
                              {activeFilter === "None" ? "" : activeFilter}
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu as="ul">
                            {filters.map((item, index) => {
                              return (
                                <Dropdown.Item
                                  eventKey={index}
                                  as="li"
                                  bsPrefix=" "
                                  key={index}
                                  onClick={() => handleFilter(item)}
                                >
                                  <Link
                                    href="#"
                                    className={`dropdown-item ${
                                      activeFilter === item ? "active" : " "
                                    }`}
                                  >
                                    {item}
                                  </Link>
                                </Dropdown.Item>
                              );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <Button
                        variant="outline-secondary btn-icon"
                        onClick={() => handleFilter("None")}
                      >
                        <i className="fe fe-rotate-cw align-middle "></i>
                      </Button>
                      <Dropdown>
                        <Dropdown.Toggle
                          as={ToggleActions}
                          id="dropdown-custom-components"
                        >
                          <i className="fe fe-more-vertical align-middle"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="ul">
                          {[
                            "Action",
                            "Another action",
                            "Something else here",
                          ].map((item, index) => {
                            return (
                              <Dropdown.Item
                                eventKey="1"
                                as="li"
                                bsPrefix=" "
                                key={index}
                              >
                                <Link href="#" className="dropdown-item">
                                  {item}
                                </Link>
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="">
                      <Form.Control
                        type="search"
                        placeholder="Search Email"
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                      />
                    </div>
                  </div>
                </Card.Header>
                <div className="">
                  <ListGroup
                    variant="flush"
                    className="list-group list-group-mail"
                  >
                    {displayMails.length > 0 ? (
                      displayMails
                    ) : (
                      <ListGroup.Item className="list-group-item-action px-4 list-mail bg-light">
                        No matching mails found.
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </div>

                {filteredEmails.length > 0 ? (
                  <Card.Footer>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">
                        Showing {setFromPage(itemPerPage, pageNumber)} -
                        {setToPage(
                          itemPerPage,
                          pageNumber,
                          displayMails.length
                        )}{" "}
                        of {filteredEmails.length}
                      </p>
                      <div>
                        <ReactPaginate
                          previousLabel={<ChevronLeft size="14px" />}
                          nextLabel={<ChevronRight size="14px" />}
                          pageRangeDisplayed={0}
                          pageCount={pageCount}
                          onPageChange={changePage}
                          containerClassName={
                            "justify-content-center mb-0 pagination"
                          }
                          previousLinkClassName={"page-link mx-1 rounded"}
                          nextLinkClassName={"page-link mx-1 rounded"}
                          pageClassName={"page-item"}
                          pageLinkClassName={"page-link mx-1 rounded"}
                          disabledClassName={"paginationDisabled"}
                          activeClassName={"active"}
                        />
                      </div>
                    </div>
                  </Card.Footer>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Mail;
