// import node module libraries
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Dropdown, Badge } from 'react-bootstrap';
import { MoreVertical, Edit, Trash } from 'react-feather';
import Moment from 'react-moment';

// import custom components
import TanstackTable from 'components/TanstackTable';

// import required data files
import OrdersData from 'data/dashboard/ecommerce/OrdersData';

const OrdersTable = ({ filterBy = '' }) => {
	const [orders] = useState(filterBy === '' ? OrdersData : OrdersData.filter((order) => order.order_status === filterBy))
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			href="#"
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
						<Edit size="14px" className="me-1" /> Edit
					</Dropdown.Item>
					<Dropdown.Item eventKey="1">
						<Trash size="14px" className="me-1" /> Delete
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};


	const paymentStatus = (status) => {
		const badgeClass = status === 'Pending' ? 'warning' :
			(status === 'Refunded' ? 'secondary' :
				(status === 'Paid' ? 'success' : 'danger'))
		return <Badge className={`text-${badgeClass} bg-light-${badgeClass}`}>{status}</Badge>
	}

	const orderStatus = (status) => {
		const badgeClass = status === 'Shipped' ? 'info' :
			(status === 'Processing' ? 'warning' :
				(status === 'Return' ? 'secondary' : 'danger'))
		return <Badge className={`text-${badgeClass} bg-light-${badgeClass}`}>{status}</Badge>
	}

	const columns = useMemo(
		() => [
			{
				accessorKey: 'id',
				header: 'Order',
				cell: ({ getValue }) => {
					return (
						<Link className="fw-semibold" href="#">
							#GK{getValue().toString().padStart(4, '0')}
						</Link>
					);
				}
			},
			{ accessorKey: 'customer', header: 'Customer' },
			{
				accessorKey: 'date',
				header: 'Date',
				cell: ({ getValue }) => {
					return (<span>
						<Moment format="D MMM, YYYY h:m A">
							{getValue()}
						</Moment>
					</span>);
				}
			},
			{
				accessorKey: 'items',
				header: 'Items',
				cell: ({ getValue }) => {
					return (<span>{getValue()} Items</span>);
				}
			},
			{
				accessorKey: 'payment', header: 'Payment',
				cell: ({ getValue }) => {
					return (paymentStatus(getValue()));
				}
			},
			{
				accessorKey: 'total', header: 'Total',
				cell: ({ getValue }) => {
					return (<span>${getValue().toFixed(2)}</span>);
				}
			},
			{
				accessorKey: 'order_status', header: 'Order Status',
				cell: ({ getValue }) => {
					return (orderStatus(getValue()));
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

	const data = useMemo(() => orders, []);

	return (
		<TanstackTable
			data={data}
			columns={columns}
			filter={true}
			filterPlaceholder="Search for order ID, customer name, order status ..."
			pagination={true} />
	);
};

export default OrdersTable;
