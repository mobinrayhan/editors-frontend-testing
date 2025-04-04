// import node module libraries
import { Card } from 'react-bootstrap';

// import widget/custom components
import { ApexCharts }  from 'widgets';

// import data files
import {
	BudgetExpenseChartSeries,
	BudgetExpenseChartOptions
} from 'data/charts/ChartData';

const ExpensesChartCard = () => {
	return (
		<Card className="h-100">
			<Card.Body>
				<h4 className="mb-3">Expenses</h4>
				<ApexCharts
					options={BudgetExpenseChartOptions}
					series={BudgetExpenseChartSeries}
					type="radar"
				/>
			</Card.Body>
		</Card>
	);
};

export default ExpensesChartCard;
