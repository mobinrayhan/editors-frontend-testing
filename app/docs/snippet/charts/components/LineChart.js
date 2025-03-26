// import node module libraries
import { Card } from 'react-bootstrap';

// import widget/custom components
import { ApexCharts } from 'widgets';

// import data files
import { EarningsChartOptions, EarningsChartSeries } from 'data/charts/ChartData';

export const LineChart = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={EarningsChartOptions}
                        series={EarningsChartSeries}
                        type="line"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}

export const LineChartCode = `
import { Card } from 'react-bootstrap';
import { ApexCharts } from 'widgets';
import { EarningsChartOptions, EarningsChartSeries } from 'data/charts/ChartData';

export const LineChartExample = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts  
                        options={EarningsChartOptions}
                        series={EarningsChartSeries}
                        type="line"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}
`.trim();