// import node module libraries
import React, { Fragment } from 'react';
import Link from 'next/link';
import { MoreVertical } from 'react-feather';
import { Badge, Card, Dropdown, Image, Table } from 'react-bootstrap'

// import required sub component
import { AvatarGroup, Avatar } from 'components/bootstrap/Avatar';

const TableNesting = ({ TableData }) => {
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
    CustomToggle.displayName = 'CustomToggle';
    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-secondary" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
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
                <h4 className="mb-1">Nesting</h4>
                <p className="mb-0">Border styles, active styles, and table variants are not inherited by nested tables..
                </p>
            </Card.Header>
            <Table responsive className="text-nowrap mb-0 table-centered">
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
                    {TableData.map((item) => {
                        return (
                            <Fragment key={item.id}>
                                <tr >
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <div>
                                                    <Image src={item.logo} alt="" />
                                                </div>
                                            </div>
                                            <div className="ms-3 lh-1">
                                                <h5 className="mb-1">
                                                    <Link href="#" className="text-inherit">{item.project_name}</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.due_date}</td>
                                    <td><Badge bg={item.badge}>{item.priority}</Badge></td>
                                    <td>
                                        <AvatarGroup className="me-2">
                                            {item.members.slice(0, 3).map((member) => {
                                                return <Avatar key={member.id} size="sm" src={member.avatar} type="image" className="rounded-circle" />
                                            })}
                                            <Avatar
                                                size="sm"
                                                type="initial"
                                                name={item.members.length - 3 + '+'}
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
                                {item.children ?
                                    <tr>
                                        <td colSpan="5">
                                            <table className="table text-nowrap">
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
                                                    {item.children.map((childItem) => {
                                                        return (
                                                            <tr key={childItem.id}>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div>
                                                                            <div>
                                                                                <Image src={childItem.logo} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="ms-3 lh-1">
                                                                            <h5 className="mb-1">
                                                                                <Link href="#" className="text-inherit">{childItem.project_name}</Link>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>{childItem.due_date}</td>
                                                                <td><Badge bg={childItem.badge}>{childItem.priority}</Badge></td>
                                                                <td>
                                                                    <AvatarGroup className="me-2">
                                                                        {childItem.members.slice(0, 3).map((member) => {
                                                                            return <Avatar key={member.id} size="sm" src={member.avatar} type="image" className="rounded-circle" />
                                                                        })}
                                                                        <Avatar
                                                                            size="sm"
                                                                            type="initial"
                                                                            name={childItem.members.length - 3 + '+'}
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
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    : ''}
                            </Fragment>)
                    })}
                </tbody>
            </Table>
        </Card>
    )
}

export default TableNesting