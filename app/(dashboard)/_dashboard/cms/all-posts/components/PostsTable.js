// import node module libraries
import Link from "next/link";
import React, { Fragment, useMemo } from "react";
import { Dropdown, Image } from "react-bootstrap";
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

// import widget/custom components
import { Checkbox } from "widgets";

// import custom components
import DotBadge from "components/bootstrap/DotBadge";
import TanstackTable from "components/TanstackTable";

const PostsTable = ({ table_data }) => {
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

  const data = useMemo(() => table_data, [table_data]);
  return (
    <TanstackTable
      data={data}
      columns={columns}
      filter={true}
      filterPlaceholder="Search Course"
      pagination={true}
    />
  );
};

export default PostsTable;
