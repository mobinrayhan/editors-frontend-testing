// import node module libraries
import React from 'react';
import Link from 'next/link';
import { Card, Dropdown, Table, Image } from 'react-bootstrap';

// import widget/custom components
import { ProgressChart } from 'widgets';

// import data files
import UpcomingTaskListData from 'data/dashboard/projects/UpcomingTaskListData';

const UpcomingTaskList = () => {
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
					<i className="fe fe-more-vertical text-muted"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>Settings</Dropdown.Header>
					<Dropdown.Item eventKey="1">Action</Dropdown.Item>
					<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
					<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Card className="h-100">
			<Card.Header className="card-header ">
				<h4 className="mb-0">Upcoming task by Assignee</h4>
			</Card.Header>
			<Table hover responsive className="text-nowrap mb-0 table-centered">
				<thead className="table-light">
					<tr>
						<th>Tasks</th>
						<th>End Date</th>
						<th>Status</th>
						<th>Progress</th>
						<th>Assignee</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{UpcomingTaskListData.map((item, index) => {
						return (
							<tr key={index}>
								<td className="align-middle">{item.task}</td>
								<td className="align-middle">{item.enddate}</td>
								<td className="align-middle">
									<span className={`badge bg-light-${item.statuscolor} text-${item.statuscolor}`}>
										{item.status}
									</span>
								</td>
								<td className="align-middle">
									<ProgressChart value={item.progress} />
								</td>
								<td className="align-middle">
									<Image
										src={item.assignee}
										alt=""
										className="avatar avatar-xs rounded-circle"
									/>
								</td>
								<td className="align-middle">
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
export default UpcomingTaskList;
