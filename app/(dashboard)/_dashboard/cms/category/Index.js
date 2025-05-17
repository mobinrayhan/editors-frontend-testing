"use client";

// import node module libraries
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { Badge, Breadcrumb, Card, Col, Dropdown, Row } from "react-bootstrap";
import { Inbox, MoreVertical, Send, Trash } from "react-feather";

// import widget/custom components
import { Checkbox } from "widgets";

// import custom components
import TanstackTable from "components/TanstackTable";

// import data files
import { courses } from "data/courses/CoursesCategoryData";

const Category = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn-icon btn btn-ghost btn-sm rounded-circle"
    >
      {children}
    </Link>
  ));

  CustomToggle.displayName = "CustomToggle";

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-secondary" />
        </Dropdown.Toggle>
        <Dropdown.Menu align={"end"}>
          <Dropdown.Header>ACTION</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            <Send size="15px" className="dropdown-item-icon" /> Publish
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Inbox size="15px" className="dropdown-item-icon" /> Moved Draft
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <Trash size="15px" className="dropdown-item-icon" /> Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <Checkbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ getValue }) => {
          return (
            <Link href="#" className="text-inherit position-relative">
              <h5 className="mb-0 text-primary-hover">{getValue()}</h5>
            </Link>
          );
        },
      },
      { accessorKey: "slug", header: "Slug" },
      { accessorKey: "posts", header: "Posts" },
      { accessorKey: "date_created", header: "Date Created" },
      { accessorKey: "date_updated", header: "Date Updated" },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          return (
            <Badge
              bg={
                getValue() === 1 ? "success" : getValue() === 0 ? "warning" : ""
              }
            >
              {getValue() === 1 ? "Live" : getValue() === 0 ? "Draft" : ""}
            </Badge>
          );
        },
      },
      {
        accessorKey: "action",
        header: "",
        cell: () => {
          return <ActionMenu />;
        },
      },
    ],
    []
  );

  const data = useMemo(() => courses, []);

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">Category</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">CMS</Breadcrumb.Item>
                <Breadcrumb.Item active>Category</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <Link
                href="/dashboard/cms/all-posts"
                className="btn btn-outline-secondary"
              >
                Back to All Post
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Body className="p-0">
              <TanstackTable
                data={data}
                columns={columns}
                filter={true}
                filterPlaceholder="Search Category"
                pagination={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Category;
