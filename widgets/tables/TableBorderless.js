// import node module libraries
import Link from "next/link";
import React from "react";
import { Badge, Card, Dropdown, Image, Table } from "react-bootstrap";
import { MoreVertical } from "react-feather";

// import required sub component
import { Avatar, AvatarGroup } from "components/bootstrap/Avatar";

const TableBorderless = ({ TableData }) => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="text-muted text-primary-hover"
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
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  return (
    <Card>
      <Card.Header>
        <h4 className="mb-1">Table Borderless</h4>
        <p className="mb-0">
          Add <code className="highlighter-rouge">.table-borderless</code> for a
          table without borders.
        </p>
      </Card.Header>
      <Table
        responsive
        className="table-borderless text-nowrap mb- table-centered"
      >
        <thead>
          <tr>
            <th>Project name</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <div>
                        <Image src={item.logo} alt="" />
                      </div>
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className="mb-1">
                        <Link href="#" className="text-inherit">
                          {item.project_name}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </td>
                <td>{item.due_date}</td>
                <td>
                  <Badge bg={item.badge}>{item.priority}</Badge>
                </td>
                <td>
                  <AvatarGroup className="me-2">
                    {item.members.slice(0, 3).map((member, index) => {
                      return (
                        <Avatar
                          key={index}
                          size="sm"
                          src={member.avatar}
                          type="image"
                          className="rounded-circle"
                        />
                      );
                    })}
                    <Avatar
                      size="sm"
                      type="initial"
                      name={item.members.length - 3 + "+"}
                      variant="primary"
                      className="rounded-circle"
                      showExact
                    />
                  </AvatarGroup>
                </td>
                <td>
                  <ActionMenu />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
};

export default TableBorderless;
