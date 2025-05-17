"use client";

// import node module libraries
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { Breadcrumb, Card, Col, Dropdown, Image, Row } from "react-bootstrap";
import {
  Copy,
  Edit,
  Image as ImageIcon,
  Link as LinkIcon,
  MoreVertical,
  Move,
  ToggleLeft,
  ToggleRight,
  Trash,
  Video,
} from "react-feather";

// import custom components
import TanstackTable from "components/TanstackTable";

// import widget/custom components
import { StatRightBGIcon } from "widgets";

// import custom components
import DotBadge from "components/bootstrap/DotBadge";

// import MDI icons
import {
  mdiAccountMultiple,
  mdiImageMultiple,
  mdiMessageReplyText,
  mdiTextBoxMultiple,
} from "@mdi/js";

// import data files
import { recentposts } from "data/courses/RecentPostsData";

const CMSDashboard = () => {
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
        <Dropdown.Menu align="end">
          <Dropdown.Header>SETTINGS</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            <Edit size="15px" className="dropdown-item-icon" /> Edit
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <Move size="15px" className="dropdown-item-icon" /> Move
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <Copy size="15px" className="dropdown-item-icon" /> Copy
          </Dropdown.Item>
          <Dropdown.Item eventKey="4">
            <ToggleLeft size="15px" className="dropdown-item-icon" /> Publish
          </Dropdown.Item>
          <Dropdown.Item eventKey="5">
            <ToggleRight size="15px" className="dropdown-item-icon" /> Unpublish
          </Dropdown.Item>
          <Dropdown.Item eventKey="6">
            <Trash size="15px" className="dropdown-item-icon" /> Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Post",
        cell: ({ getValue }) => {
          return (
            <h5 className="mb-0">
              <Link href="#" className="text-inherit">
                {getValue()}
              </Link>
            </h5>
          );
        },
      },
      {
        accessorKey: "type",
        header: "Type",
        cell: ({ getValue }) => {
          if (getValue() === "image") {
            return (
              <ImageIcon
                size="18px"
                className="dropdown-item-icon text-primary"
              />
            );
          }
          if (getValue() === "video") {
            return (
              <Video size="18px" className="dropdown-item-icon text-primary" />
            );
          }
          if (getValue() === "link") {
            return (
              <LinkIcon
                size="18px"
                className="dropdown-item-icon text-primary"
              />
            );
          }
        },
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ getValue }) => {
          return (
            <Link href="#" className="text-inherit">
              {getValue()}
            </Link>
          );
        },
      },
      { accessorKey: "date", header: "Date" },
      {
        accessorKey: "instructor_name",
        header: "Author",
        cell: ({ getValue, row }) => {
          return (
            <div className="d-flex align-items-center">
              <Image
                src={row.original.instructor_image}
                alt=""
                className="rounded-circle avatar-xs me-2"
              />
              <h5 className="mb-0">{getValue()}</h5>
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          let value = getValue().toLowerCase();
          return (
            <Fragment>
              <DotBadge
                bg={
                  value === "draft"
                    ? "warning"
                    : value === "published"
                    ? "success"
                    : value === "scheduled"
                    ? "info"
                    : value === "deleted"
                    ? "danger"
                    : ""
                }
              ></DotBadge>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Fragment>
          );
        },
      },
      {
        accessorKey: "shortcutmenu",
        header: "",
        cell: () => {
          return <ActionMenu />;
        },
      },
    ],
    []
  );

  const data = useMemo(() => recentposts, []);

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">CMS Dashboard</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">CMS</Breadcrumb.Item>
                <Breadcrumb.Item active>Overview</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <Link
                href="/dashboard/cms/add-new-post"
                className="btn btn-primary"
              >
                New Post
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightBGIcon
            title="TOTAL POSTS"
            value="2,000"
            summary="100 Last 30 Days"
            iconName={mdiTextBoxMultiple}
            iconColorVariant="primary"
            classValue="mb-4"
          />
        </Col>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightBGIcon
            title="ASSETS"
            value="367"
            summary="300+ Media Object"
            iconName={mdiImageMultiple}
            iconColorVariant="warning"
            classValue="mb-4"
          />
        </Col>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightBGIcon
            title="USERS"
            value="13,234"
            summary="1.5k in 30Days"
            iconName={mdiAccountMultiple}
            iconColorVariant="success"
            classValue="mb-4"
          />
        </Col>
        <Col xl={3} lg={6} md={12} sm={12}>
          <StatRightBGIcon
            title="COMMENTS"
            value="120"
            summary="20+ Comments"
            iconName={mdiMessageReplyText}
            iconColorVariant="info"
            classValue="mb-4"
          />
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center border-bottom-0 card-header-height">
              <h4 className="mb-0">Recent Posts</h4>
            </Card.Header>
            <Card.Body className="p-0">
              <TanstackTable
                data={data}
                columns={columns}
                filter={false}
                pagination={false}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CMSDashboard;
