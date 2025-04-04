'use client'

// import node module libraries
import React, { useMemo, Fragment, useState } from 'react';
import Link from 'next/link';
import { Trash, Edit, MoreVertical } from 'react-feather';
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table'
import {
	Card,
	Row,
	Col,
	Dropdown,
	Image,
	Badge,
	Table,
	ListGroup,
	ProgressBar
} from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import widget/custom components
import { FormSelect, LevelIcon, GlobalFilter, Pagination } from 'widgets';

// import profile layout wrapper
import ProfileLayout from 'layouts/marketing/instructor/ProfileLayout';

// import data files
import { MyCoursesData as data_ } from 'data/courses/MyCoursesData';

// import utility file
import { numberWithCommas } from 'helper/utils';

const MyCourses = () => {
	const [filtering, setFiltering] = useState('')
	const [rowSelection, setRowSelection] = useState({})

	const sortby = [
		{ value: 'Date Created', label: 'Date Created' },
		{ value: 'Newest', label: 'Newest' },
		{ value: 'High Rated', label: 'High Rated' },
		{ value: 'Law Rated', label: 'Law Rated' },
		{ value: 'High Earned', label: 'High Earned' }
	];

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
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						{' '}
						<Edit size="15px" className="dropdown-item-icon" /> Edit
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						{' '}
						<Trash size="15px" className="dropdown-item-icon" /> Remove
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const columns = useMemo(
		() => [
			{
				accessorKey: 'image',
				header: 'Courses',
				cell: ({ getValue, row }) => {
					return (
						<div className="d-lg-flex">
							<div>
								<Link href="#">
									<Image src={getValue()} alt="" className="rounded img-4by3-lg" />
								</Link>
							</div>
							<div className="ms-lg-3 mt-2 mt-lg-0">
								<h4 className="mb-1 h5">
									<Link href="#" className="text-inherit">
										{row.original.title}
									</Link>
								</h4>
								<ListGroup as="ul" bsPrefix="list-inline" className="fs-6 mb-0">
									<ListGroup.Item as="li" bsPrefix="list-inline-item">
										<i className="far fa-clock me-1"></i>
										{row.original.duration}
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix="list-inline-item">
										<LevelIcon level={row.original.level} />
										{row.original.level}
									</ListGroup.Item>
								</ListGroup>
								{row.original.progress && (
									<ProgressBar
										variant="success"
										className="mt-2"
										now={row.original.progress}
										style={{ height: '3px' }}
									/>
								)}
							</div>
						</div>
					);
				}
			},
			{
				accessorKey: 'students',
				header: 'Students',
				cell: ({ getValue }) => {
					return numberWithCommas(getValue());
				}
			},

			{
				accessorKey: 'rating',
				header: 'Rating',
				cell: ({ getValue, row }) => {
					return (
						<Fragment>
							<span className="text-warning">
								{getValue()}
								<Icon path={mdiStar} size={0.6} />
							</span>
							({numberWithCommas(row.original.votes)})
						</Fragment>
					);
				}
			},
			{
				accessorKey: 'status',
				header: 'Status',
				cell: ({ getValue }) => {
					return (
						<Badge
							bg={`${getValue() === 'Draft'
								? 'info'
								: getValue() === 'Live'
									? 'success'
									: getValue() === 'Deleted'
										? 'danger'
										: 'warning'
								} `}
						>
							{getValue()}
						</Badge>
					);
				}
			},
			{
				accessorKey: 'action',
				header: '',
				cell: () => {
					return <ActionMenu />;
				}
			}
		], []);

	const data = useMemo(() => data_, []);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			globalFilter: filtering,
			rowSelection
		},
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onGlobalFilterChange: setFiltering,
		debugTable: false,
	})

	return (
		<ProfileLayout>

			<Card className="border-0">
				<Card.Header>
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Courses</h3>
						<p className="mb-0">
							Manage your courses and its update like live, draft and insight.
						</p>
					</div>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col lg={9} md={7} sm={12} className="mb-lg-0 mb-2">
							<GlobalFilter
								filtering={filtering}
								setFiltering={setFiltering}
								placeholder="Search Your Courses" />
						</Col>
						<Col lg={3} md={5} sm={12}>
							<FormSelect options={sortby} placeholder="Sort by" />
						</Col>
					</Row>
				</Card.Body>
				<Card.Body className="p-0 pb-5">
					<Row>
						<Col lg={12} md={12} sm={12}>
							<Table hover responsive className="text-nowrap table-centered">
								<thead>
									{table.getHeaderGroups().map(headerGroup => (
										<tr key={headerGroup.id}>
											{headerGroup.headers.map(header => (
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
									{table.getRowModel().rows.map(row => (
										<tr key={row.id}>
											{row.getVisibleCells().map(cell => (
												<td key={cell.id}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>
					{/* Pagination @ Footer */}
					<Pagination table={table} />
				</Card.Body>
			</Card>
		</ProfileLayout>
	);
};

export default MyCourses;
