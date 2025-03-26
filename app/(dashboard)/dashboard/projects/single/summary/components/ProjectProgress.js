// import node module libraries
import { Fragment } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const ProjectProgress = () => {
	return (
		<Card className="mb-3">
			<Card.Body>
				<h4 className="mb-3">Progress</h4>
				<ProgressBar className="progress-tooltip" style={{ height: '6px' }}>
					<Fragment>
						<ProgressBar
							now={50}
							style={{ width: '50%', height: '6px' }}
							label="50%"
							visuallyHidden
						/>
						<div className="progress-bar">
							<span>50%</span>
						</div>
					</Fragment>
				</ProgressBar>
			</Card.Body>
		</Card>
	);
};

export default ProjectProgress;
