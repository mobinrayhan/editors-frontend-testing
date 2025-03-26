'use client'

// import node module libraries
import { Fragment } from 'react';

// import sub components
import TeamGrid from './components/TeamGrid';
import CommonHeaderTabs from '../components/CommonHeaderTabs';

const ProjectTeam = () => {
	return (
		<Fragment>

			{/* page header tabs */}
			<CommonHeaderTabs />

			{/* team grid */}
			<TeamGrid />

		</Fragment>
	);
};

export default ProjectTeam;
