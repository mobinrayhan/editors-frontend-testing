// import node module libraries
import React, { Fragment, useMemo } from 'react';
import Link from 'next/link';
import { Col, Row, Dropdown, Card, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import { v4 as uuid } from 'uuid';

// import bootstrap icons
import {
	FileImage,
	FileWord,
	FileEarmarkSpreadsheet,
	FilePpt,
	FileText,
	FileEarmarkSlides,
	Exclamation
} from 'react-bootstrap-icons';

// import custom components
import TanstackTable from 'components/TanstackTable';
import { Avatar } from 'components/bootstrap/Avatar';

// import data files
import { filesdata } from 'data/dashboard/projects/FilesData';

// import utility file
import { getFileExtension } from 'helper/utils';

const FilesTable = () => {
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
				<Dropdown.Menu align={'end'}>
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">Action</Dropdown.Item>
					<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
					<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	const getFileTypeIcon = (value) => {
		let color = null;
		let extension = getFileExtension(value);
		extension === 'xlsx'
			? (color = 'primary')
			: extension === 'jpeg'
				? (color = 'info')
				: extension === 'doc'
					? (color = 'success')
					: extension === 'ppt'
						? (color = 'danger')
						: extension === 'txt'
							? (color = 'warning')
							: extension === 'mov'
								? (color = 'danger')
								: (color = 'danger');

		return (
			<div className={`icon-shape icon-lg rounded-3 bg-light-${color}`}>
				<Link href="#">
					{extension === 'xlsx' ? (
						<FileEarmarkSpreadsheet size={24} className="text-primary" />
					) : extension === 'jpeg' ? (
						<FileImage size={24} className="text-info" />
					) : extension === 'doc' ? (
						<FileWord size={24} className="text-success" />
					) : extension === 'ppt' ? (
						<FilePpt size={24} className="text-danger" />
					) : extension === 'txt' ? (
						<FileText size={24} className="text-warning" />
					) : extension === 'mov' ? (
						<FileEarmarkSlides size={24} className="text-danger" />
					) : (
						<Exclamation size={24} className="text-danger" />
					)}
				</Link>
			</div>
		);
	};

	const columns = useMemo(
		() => [
			{
				accessorKey: 'filename',
				header: 'Name',
				cell: ({ getValue }) => {
					return (
						<div className="d-flex align-items-center">
							{getFileTypeIcon(getValue())}
							<div className="ms-3">
								<h5 className="mb-0">
									<Link href="#" className="text-inherit">
										{getValue()}
									</Link>
								</h5>
							</div>
						</div>
					);
				}
			},

			{ accessorKey: 'filesize', header: 'File Size' },
			{ accessorKey: 'date_modified', header: 'Modified' },
			{
				accessorKey: 'avatar',
				header: 'Uploaded By',
				cell: ({ getValue, row }) => {
					return getValue() === null ? (
						<Avatar
							size="sm"
							type="initial"
							name={row.original.uploadedby}
							className={`rounded-circle bg-primary`}
						/>
					) : (
						<Image
							src={getValue()}
							alt=""
							className="rounded-circle avatar avatar-sm"
						/>
					);
				}
			},
			{
				accessorKey: 'options',
				header: 'Options',
				cell: () => {
					return (
						<Fragment>
							<OverlayTrigger
								key={uuid()}
								placement="top"
								overlay={<Tooltip id={`tooltip-top`}>Download</Tooltip>}
							>
								<Link href="#" className="text-muted text-primary-hover">
									<i className="fe fe-download fs-5"></i>
								</Link>
							</OverlayTrigger>
							<OverlayTrigger
								key={uuid()}
								placement="top"
								overlay={<Tooltip id={`tooltip-top`}>Link</Tooltip>}
							>
								<Link href="#" className="text-muted text-primary-hover ms-3">
									<i className="fe fe-link fs-5"></i>
								</Link>
							</OverlayTrigger>
						</Fragment>
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
		],
		[]
	);

	const data = useMemo(() => filesdata, []);

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<Card>
						<Card.Header>
							<h4 className="mb-0">Files</h4>
						</Card.Header>
						<Card.Body className="p-0">
							<TanstackTable
								data={data}
								columns={columns}
								filter={true}
								filterPlaceholder="Search Filename"
								pagination={true} />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default FilesTable;
