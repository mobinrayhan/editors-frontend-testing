'use client'

// import node module libraries
import React, { Fragment, useMemo } from 'react';
import Link from 'next/link';
import {
	Col,
	Row,
	Dropdown,
	Card,
	Image,
	Breadcrumb
} from 'react-bootstrap';
import { Trash, Layers, MoreVertical } from 'react-feather';

// import widget/custom components
import TanstackTable from 'components/TanstackTable';

// import utility file
import { numberWithCommas } from 'helper/utils';

// import data files
import { allcourses } from 'data/courses/CategorySingleData';

const CategorySingle = () => {
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
						<Layers size="15px" className="dropdown-item-icon" /> Change
						Category
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<Trash size="15px" className="dropdown-item-icon" /> Delete Course
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const columns = useMemo(
		() => [
			{
				accessorKey: 'title',
				header: 'Courses',
				cell: ({ getValue, row }) => {
					return (
						(<Link href="#" className="text-inherit">
							<div className="d-lg-flex align-items-center">
								<div>
									<Image
										src={row.original.image}
										alt=""
										className="img-4by3-lg rounded"
									/>
								</div>
								<div className="ms-lg-3 mt-2 mt-lg-0">
									<h4 className="mb-1 text-primary-hover">{getValue()}...</h4>
									<span className="text-inherit">
										{row.original.date_added}
									</span>
								</div>
							</div>
						</Link>)
					);
				}
			},
			{ accessorKey: 'date_added', header: '', show: false },
			{
				accessorKey: 'instructor_name',
				header: 'Instructor',
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
				}
			},
			{
				accessorKey: 'enrolled',
				header: 'Enrolled',
				cell: ({ getValue }) => {
					return numberWithCommas(getValue());
				}
			},
			{
				accessorKey: 'actionmenu',
				header: '',
				cell: () => {
					return <ActionMenu />;
				}
			}
		],
		[]
	);

	const data = useMemo(() => allcourses, []);

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">
								{' '}
								Web Development <span className="fs-5">(210 Courses)</span>{' '}
							</h1>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#">Category</Breadcrumb.Item>
								<Breadcrumb.Item active>Web Development</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<Link
								href="#"
								className="btn btn-outline-secondary"
								data-bs-toggle="modal"
								data-bs-target="#newCatgory">
								Back to All Category
							</Link>
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
export default CategorySingle;
