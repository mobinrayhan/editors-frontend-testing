// import node module libraries
import { Card } from 'react-bootstrap';

// import widget/custom components
import { ApexCharts } from 'widgets';

// import data files
import { TrafficChartOptions, TrafficChartSeries } from 'data/charts/ChartData';

export const DonutChart = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={TrafficChartOptions}
                        series={TrafficChartSeries}
                        type="donut"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}

export const DonutChartCode = `
import { Card } from 'react-bootstrap';
import { ApexCharts } from 'widgets';
import { TrafficChartOptions, TrafficChartSeries } from 'data/charts/ChartData';

export const DonutChartExample = () => {
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <ApexCharts
                        options={TrafficChartOptions}
                        series={TrafficChartSeries}
                        type="donut"
                    />
                </Card.Body>
            </Card>
        </section>
    )
}
`.trim();