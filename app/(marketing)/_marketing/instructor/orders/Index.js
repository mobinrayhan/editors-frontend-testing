"use client";

// import node module libraries
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Edit, MoreVertical, Trash } from "react-feather";

// import custom components
import TanstackTable from "components/TanstackTable";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/instructor/ProfileLayout";

// Import required utility file
import { numberWithCommas } from "helper/utils";

// Import required data file
import { OrdersData } from "data/instructor/OrdersData";

const Orders = () => {
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
      { accessorKey: "course", header: "Courses" },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ getValue }) => {
          return "$" + numberWithCommas(getValue());
        },
      },
      {
        accessorKey: "invoice",
        header: "Invoice",
        cell: ({ getValue }) => {
          return <Fragment>#{getValue()}</Fragment>;
        },
      },
      { accessorKey: "date", header: "Date" },
      { accessorKey: "method", header: "Method" },
      {
        accessorKey: "actionmenu",
        header: "",
        cell: () => {
          return <ActionMenu />;
        },
      },
    ],
    []
  );

  const data = useMemo(() => OrdersData, []);

  return (
    <ProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Orders</h3>
            <p className="mb-0">
              Order Dashboard is a quick overview of all current orders.
            </p>
          </div>
        </Card.Header>
        <Card.Body className="p-0 pb-5">
          <TanstackTable
            data={data}
            columns={columns}
            filter={true}
            filterPlaceholder="Search Orders"
            pagination={true}
          />
        </Card.Body>
      </Card>
    </ProfileLayout>
  );
};

export default Orders;
