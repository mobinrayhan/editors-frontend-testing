// import node module libraries
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { Dropdown, Image } from "react-bootstrap";
import {
  Copy,
  Edit,
  MoreVertical,
  Move,
  ToggleLeft,
  ToggleRight,
  Trash,
} from "react-feather";

// import widget/custom components
import { Checkbox } from "widgets";

// Import required custom components
import DotBadge from "components/bootstrap/DotBadge";
import TanstackTable from "components/TanstackTable";

const ProductsTable = ({ table_data, status }) => {
  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
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
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Products",
        cell: ({ getValue, row }) => {
          return (
            <Link href="#" className="text-inherit">
              <div className="d-flex align-items-center">
                <div>
                  <Image
                    src={row.original.images[0].image}
                    alt=""
                    className="img-4by3-md rounded"
                  />
                </div>
                <div className="ms-3">
                  <h5 className="mb-0 text-primary-hover">{getValue()}</h5>
                </div>
              </div>
            </Link>
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
                    : value === "active"
                    ? "success"
                    : value === "archived"
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
        accessorKey: "inventory",
        header: "Inventory",
        cell: ({ getValue }) => {
          return <span>{getValue()}</span>;
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
      {
        accessorKey: "salePrice",
        header: "Price",
        cell: ({ getValue }) => {
          return <span className="mb-0">${getValue().toFixed(2)}</span>;
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

  const data = useMemo(() => {
    if (status === "all") return table_data;
    return table_data.filter((product) => product.status === status);
  }, [status, table_data]);

  return (
    <TanstackTable
      data={data}
      columns={columns}
      filter={true}
      filterPlaceholder="Filter Products"
      pagination={true}
    />
  );
};

export default ProductsTable;
