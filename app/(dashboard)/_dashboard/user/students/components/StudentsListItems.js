// import node module libraries
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { Dropdown, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Edit, Mail, MoreVertical, Trash } from "react-feather";

// import custom components
import TanstackTable from "components/TanstackTable";

// import utility file
import { numberWithCommas } from "helper/utils";

// import data files
import { StudentsList } from "data/users/StudentsData";

const StudentsListItems = () => {
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
            <Trash size="15px" className="dropdown-item-icon" /> Remove
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ getValue, row }) => {
          return (
            <div className="d-flex align-items-center">
              <Image
                src={row.original.image}
                alt=""
                className="rounded-circle avatar-md me-2"
              />
              <h5 className="mb-0">{getValue()}</h5>
            </div>
          );
        },
      },
      {
        accessorKey: "enrolled",
        header: "Enrolled",
        cell: ({ getValue }) => {
          return getValue() + " Courses";
        },
      },
      { accessorKey: "joined", header: "Joined At" },
      {
        accessorKey: "payment",
        header: "TotaL Payment",
        cell: ({ getValue }) => {
          return "$" + numberWithCommas(getValue());
        },
      },
      { accessorKey: "locations", header: "Locations" },
      {
        accessorKey: "message",
        header: "",
        cell: () => {
          return (
            <div className="align-middle border-top-0">
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Message</Tooltip>}
              >
                <Link href="#">
                  <Mail size="15px" className="dropdown-item-icon" />
                </Link>
              </OverlayTrigger>
            </div>
          );
        },
      },
      {
        accessorKey: "delete",
        header: "",
        cell: () => {
          return (
            <div className="align-middle border-top-0">
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
              >
                <Link href="#">
                  <Trash size="15px" className="dropdown-item-icon" />
                </Link>
              </OverlayTrigger>
            </div>
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

  const data = useMemo(() => StudentsList, []);

  return (
    <Fragment>
      <TanstackTable
        data={data}
        columns={columns}
        filter={true}
        filterPlaceholder="Search Students"
        pagination={true}
      />
    </Fragment>
  );
};

export default StudentsListItems;
