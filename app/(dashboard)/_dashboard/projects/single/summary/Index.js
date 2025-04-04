'use client'

// import node module libraries
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import Assignee from './components/Assignee';
import ProjectSchedule from './components/ProjectSchedule';
import ProjectProgress from './components/ProjectProgress';
import CommonHeaderTabs from '../components/CommonHeaderTabs';
import ProjectDescription from './components/ProjectDescription';

const ProjectSummary = () => {
	return (
		<Fragment>

			{/* page header tabs */}
			<CommonHeaderTabs />

			<Row>
				<Col xl={6} xs={12} className="mb-4 mb-xl-0">

					{/* project description */}
					<ProjectDescription />

				</Col>
				<Col xl={6} xs={12}>

					{/* assignee and team  */}
					<Assignee />

					{/* project cost and schedule */}
					<ProjectSchedule />

					{/* project progress  */}
					<ProjectProgress />

				</Col>
			</Row>

		</Fragment>
	);
};

export default ProjectSummary;
