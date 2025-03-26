'use client'

// import node module libraries
import React, { Fragment } from 'react';

// import sub components
import FilesTable from './components/FilesTable';
import CommonHeaderTabs from '../components/CommonHeaderTabs';

const ProjectFiles = () => {
	return (
		<Fragment>

			{/* page header tabs */}
			<CommonHeaderTabs />

			{/* files listing table */}
			<FilesTable />

		</Fragment>
	);
};

export default ProjectFiles;
