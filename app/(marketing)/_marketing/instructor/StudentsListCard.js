// import node module libraries
import React, { useMemo } from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

// import custom components
import TanstackTable from 'components/TanstackTable';

// import data files
import { StudentsList } from 'data/users/StudentsData';

const StudentsListCard = () => {
	const columns = useMemo(
		() => [
			{
				accessorKey: 'name',
				header: 'Name',
				cell: ({ getValue, row }) => {
					return (
						<div className="d-flex align-items-center">
							<Image
								src={row.original.image}
								alt=""
								className="rounded-circle avatar-md me-2"
							/>
							<h5 className="mb-0">{getValue()}</h5>
						</div>
					);
				}
			},
			{ accessorKey: 'joined', header: 'Enrolled' },
			{
				accessorKey: 'progress',
				header: 'Progress',
				cell: ({ getValue }) => {
					return getValue() + '%';
				}
			},
			{ accessorKey: 'questionasked', header: 'Q/A' },
			{
				accessorKey: 'locations',
				header: 'Locations',
				cell: ({ getValue }) => {
					return (
						<span className="fs-6">
							<i className="fe fe-map-pin me-1"></i>
							{getValue()}
						</span>
					);
				}
			},
			{
				accessorKey: 'message',
				header: 'Message',
				cell: () => {
					return (
						<Link href="#" className="btn btn-outline-secondary btn-sm">
							Message
						</Link>
					);
				}
			}
		],
		[]
	);

	const data = useMemo(() => StudentsList, []);

	return (
		<TanstackTable
			data={data}
			columns={columns}
			filter={true}
			filterPlaceholder="Search By Name"
			pagination={true}
			exportButton={true} />
	);
};

export default StudentsListCard;
