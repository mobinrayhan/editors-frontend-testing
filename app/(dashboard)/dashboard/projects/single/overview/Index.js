'use client'

// import node module libraries
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

// import sub components
import CommonHeaderTabs from '../components/CommonHeaderTabs';
import ProjectSummary from './components/ProjectSummary';
import BudgetSection from './components/BudgetSection';
import UpcomingDeadlines from './components/UpcomingDeadlines';
import LaunchDate from './components/LaunchDate';
import OverallProgressChart from './components/OverallProgressChart';
import RecentActivity from './components/RecentActivity';

const ProjectOverview = () => {
	return (
		<Fragment>
			{/* page header tabs */}
			<CommonHeaderTabs />

			<Row>
				<Col md={12} xl={8} xs={12}>
					<Row>
						<Col xs={12} className="mb-4">
							{/* project summary section */}
							<ProjectSummary />
						</Col>
						<Col md={12} className="mb-4">
							{/* project budget section */}
							<BudgetSection />
						</Col>
						<Col md={12} className="mb-4">
							{/* upcoming deadlines table section */}
							<UpcomingDeadlines />
						</Col>
					</Row>
				</Col>
				<Col md={12} xl={4} xs={12}>
					{/* launch date section */}
					<LaunchDate />

					{/* overall progress chart  */}
					<OverallProgressChart />

					{/* recent activities section  */}
					<RecentActivity />
				</Col>
			</Row>
		</Fragment>
	);
};

export default ProjectOverview;
