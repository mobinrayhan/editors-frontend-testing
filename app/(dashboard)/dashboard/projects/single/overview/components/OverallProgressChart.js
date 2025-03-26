// import node module libraries
import { Card } from 'react-bootstrap';

// import widget/custom components
import { ApexCharts }  from 'widgets';

// import data files
import {
	OverallProgressChartSeries,
	OverallProgressChartOptions
} from 'data/charts/ChartData';

const OverallProgressChart = () => {
	return (
		<Card className="mb-4">
			<Card.Body>
				<h4 className="mb-3">Overall Progress</h4>
				<ApexCharts
					options={OverallProgressChartOptions}
					series={OverallProgressChartSeries}
					type="radialBar"
					height={350}
				/>
			</Card.Body>
		</Card>
	);
};
export default OverallProgressChart;
