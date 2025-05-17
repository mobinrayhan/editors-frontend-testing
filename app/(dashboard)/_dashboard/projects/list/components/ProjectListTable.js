// import node module libraries
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { Fragment, useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";

// import widget/custom components
import { FormSelect, GlobalFilter, Pagination } from "widgets";

// import custom components
import { Avatar, AvatarGroup } from "components/bootstrap/Avatar";

// import data files
import ProjectsListData from "data/dashboard/projects/ProjectsListData";
import ProjectTeamMembersData from "data/dashboard/projects/ProjectTeamMembersData";

// import utility file
import { getStatusColor, numberWithCommas } from "helper/utils";

const ProjectListTable = ({ onNewProject }) => {
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  const filterOptions = [
    { value: "In Progress", label: "In Progress" },
    { value: "Pending", label: "Pending" },
    { value: "Modified", label: "Modified" },
    { value: "Finished", label: "Finished" },
    { value: "Cancel", label: "Cancel" },
  ];

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
          <i className="fe fe-more-vertical text-muted"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Header>Settings</Dropdown.Header>
          <Dropdown.Item eventKey="1">
            <i className="fe fe-edit dropdown-item-icon"></i>Edit Details
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            <i className="fe fe-link dropdown-item-icon"></i>Copy project link
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-save dropdown-item-icon"></i>Save as Default
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-copy dropdown-item-icon"></i>Duplicate
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-layout dropdown-item-icon"></i>Convert to
            Template
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">
            <i className="fe fe-upload dropdown-item-icon"></i>Import
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-printer dropdown-item-icon"></i>Export / Print
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-users dropdown-item-icon"></i>Move to another
            team
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">
            <i className="fe fe-archive dropdown-item-icon"></i>Archive
          </Dropdown.Item>
          <Dropdown.Item eventKey="3">
            <i className="fe fe-trash dropdown-item-icon"></i>Delete Project
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Project Name",
        cell: ({ getValue, row }) => {
          return (
            <div className="d-flex align-items-center">
              <div className="icon-shape icon-lg rounded-3 border p-4">
                <i className={`fe fe-${row.original.icon} fs-3 text-muted`}></i>
              </div>
              <div className="ms-3">
                <h4 className="mb-0">
                  <Link href="#" className="text-inherit">
                    {getValue()}
                  </Link>
                </h4>
              </div>
            </div>
          );
        },
      },
      { accessorKey: "duedate", header: "Dates" },
      {
        accessorKey: "budget",
        header: "Budget",
        cell: ({ getValue }) => {
          return "$" + numberWithCommas(getValue());
        },
      },
      {
        accessorKey: "progress",
        header: "Task Progress",
        cell: ({ getValue, row }) => {
          return (
            <div className="d-flex align-items-center">
              <div className="me-2">
                {" "}
                <span>{getValue()}%</span>
              </div>
              <ProgressBar
                variant={getStatusColor(row.original.status)}
                now={getValue()}
                className="flex-auto"
                style={{ height: "6px" }}
              />
            </div>
          );
        },
      },

      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          return (
            <span
              className={`badge bg-light-${getStatusColor(
                getValue()
              )} text-dark-${getStatusColor(getValue())}`}
            >
              {getValue()}
            </span>
          );
        },
      },
      {
        accessorKey: "team",
        header: "Team",
        cell: ({ getValue }) => {
          let value = getValue();
          return (
            <AvatarGroup>
              {ProjectTeamMembersData.filter(function (dataSource) {
                return (
                  dataSource.id === value[0] ||
                  dataSource.id === value[1] ||
                  dataSource.id === value[2]
                );
              }).map((member, index) => {
                return (
                  <Avatar
                    size="md"
                    src={member.image}
                    type={`${member.image == null ? "initial" : "image"}`}
                    name={member.name}
                    className="rounded-circle"
                    imgtooltip
                    key={index}
                  />
                );
              })}
              <Avatar
                size="md"
                type="initial"
                name={value.length - 3 + "+"}
                variant="light"
                className="rounded-circle text-dark"
                showExact
              />
            </AvatarGroup>
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

  const data = useMemo(() => ProjectsListData, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setFiltering,
    debugTable: false,
  });
  return (
    <Fragment>
      <Row className="justify-content-md-between mb-4 mb-xl-0 ">
        <Col xl={2} lg={4} md={6} xs={12}>
          {/* search records */}
          <div className="mb-2 mb-lg-4">
            <GlobalFilter
              filtering={filtering}
              setFiltering={setFiltering}
              placeholder="Search by project name"
            />
          </div>
        </Col>
        <Col xxl={2} lg={2} md={6} xs={12}>
          {/* records filtering options */}
          <Form.Control
            as={FormSelect}
            placeholder="Filter"
            options={filterOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Body className="p-0">
              <div className="border-0 overflow-y-hidden">
                <Table hover responsive className="text-nowrap table-centered">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td className="align-middle " colSpan="7">
                        <div className="d-flex align-items-center">
                          <Button
                            variant="link"
                            className="text-muted border border-2 rounded-3 card-dashed-hover p-0"
                            onClick={onNewProject}
                          >
                            <div className="icon-shape icon-lg ">+</div>
                          </Button>
                          <div className="ms-3">
                            <h4 className="mb-0">
                              <Link
                                href="#"
                                onClick={onNewProject}
                                className="text-inherit"
                              >
                                New Project
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="mt-4">
            <Pagination table={table} />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProjectListTable;
