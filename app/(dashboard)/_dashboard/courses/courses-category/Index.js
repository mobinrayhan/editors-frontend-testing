'use client'

// import node module libraries
import React, { Fragment, useMemo, useState } from 'react';

import Link from 'next/link';
import {
	Col,
	Row,
	Dropdown,
	Card,
	Breadcrumb,
	Button,
	Modal,
	Badge
} from 'react-bootstrap';
import { Trash, Send, Inbox, MoreVertical } from 'react-feather';

// import widget/custom components
import TanstackTable from 'components/TanstackTable';
import { Checkbox } from 'widgets';

// import sub components
import AddNewCategoryPopup from './components/AddNewCategoryPopup';

// import data files
import { courses } from 'data/courses/CoursesCategoryData';

const CoursesCategory = () => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		(<Link
			href=""
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			className="btn-icon btn btn-ghost btn-sm rounded-circle">
			{children}
		</Link>)
	));

	CustomToggle.displayName = 'CustomToggle';

	const ActionMenu = () => {
		return (
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle}>
					<MoreVertical size="15px" className="text-secondary" />
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
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
				id: 'select',
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

			{ accessorKey: 'id', header: 'ID', show: false },
			{ accessorKey: 'category', header: 'Category' },
			{ accessorKey: 'slug', header: 'Slug' },
			{ accessorKey: 'posts', header: 'Posts' },
			{ accessorKey: 'date_created', header: 'Date Created' },
			{ accessorKey: 'date_updated', header: 'Date Updated' },
			{
				accessorKey: 'status',
				header: 'Status',
				cell: ({ getValue }) => {
					return (<Badge bg={getValue() === 1 ? 'success' : getValue() === 0 ? 'warning' : ''}>{getValue() === 1 ? 'Live' : getValue() === 0 ? 'Draft' : ''}</Badge>);
				}
			},
			{
				accessorKey: 'action',
				header: '',
				cell: () => {
					return <ActionMenu />;
				}
			}
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
							<h1 className="mb-1 h2 fw-bold">Courses Category</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Courses</Breadcrumb.Item>
								<Breadcrumb.Item active>Courses Category</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Button variant="primary" onClick={handleShow}>
								Add New Category
							</Button>
							<Modal show={show} onHide={handleClose} size="lg">
								<Modal.Header closeButton>
									<Modal.Title>Create New Category</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<AddNewCategoryPopup />
								</Modal.Body>
								<Modal.Footer className="d-flex justify-content-start border-0 pt-0">
									{/*  Action Buttons  */}
									<Button variant="primary" onClick={handleClose}>
										Add New Category
									</Button>
									<Button variant="outline-secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
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
								filterPlaceholder="Search Course"
								pagination={true} />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default CoursesCategory;
