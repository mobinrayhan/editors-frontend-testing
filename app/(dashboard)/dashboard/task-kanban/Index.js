'use client'

// import node module libraries
import { Fragment } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Col, Row, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux'

// import widget/custom components
import { FormSelect } from 'widgets';

// import sub components
import KanbanColumn from './components/KanbanColumn';

// import hook file
import useTaskKanban from 'hooks/useTaskKanban';

const Kanban = () => {

	/* Redux get data */

	const taskList = useSelector((state) => state.kanban.taskList)

	const { handleDragEnd } = useTaskKanban();

	const filterOptions = [
		{ value: 'Just my task', label: 'Just my task' },
		{ value: 'Due this week', label: 'Due this week' },
		{ value: 'Due next week', label: 'Due next week' }
	];
	const sortOptions = [
		{ value: 'None', label: 'None' },
		{ value: 'Due Date', label: 'Due Date' },
		{ value: 'Assignee', label: 'Assignee' },
		{ value: 'Likes', label: 'Likes' },
		{ value: 'Alphabetical', label: 'Alphabetical' },
		{ value: 'Priority', label: 'Priority' }
	];

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Kanban</h1>
						</div>
					</div>
				</Col>
			</Row>

			<Row className="mb-4 align-items-center">
				<Col xxl={10} xl={8} lg={6} md={12} xs={12} className="mb-3 mb-lg-0">
					<h3 className="mb-0">Geeks UI - Design &amp; Development</h3>
				</Col>
				<Col xxl={1} xl={2} lg={3} md={12} className="pe-lg-2">
					<Form.Control
						as={FormSelect}
						placeholder="Sort"
						options={sortOptions}
					/>
				</Col>
				<Col xxl={1} xl={2} lg={3} md={12} className="pe-lg-2">
					<Form.Control
						as={FormSelect}
						placeholder="Filter"
						options={filterOptions}
					/>
				</Col>
			</Row>

			<DragDropContext onDragEnd={handleDragEnd}>
				<div className="task-kanban-container pb-6">
					{taskList.map((item, index) => {
						return <KanbanColumn columnData={item} key={index} />;
					})}
				</div>
			</DragDropContext>
		</Fragment>
	);
};

export default Kanban;
