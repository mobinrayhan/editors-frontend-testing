'use client';

// import node module libraries
import Link from 'next/link';
import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets'

// import requried layouts 
import DocsInnerLayout from 'layouts/docs/DocsInnerLayout'

// import required sub components and codes
import { DataWithBarChart, DataWithBarChartCode } from './components/DataWithBarChart';
import { DataWithLineChart, DataWithLineChartCode } from './components/DataWithLineChart';
import { BarChart, BarChartCode } from './components/BarChart';
import { DonutChart, DonutChartCode } from './components/DonutChart';
import { LineChart, LineChartCode } from './components/LineChart';

const ChartsSnippets = () => {
    const SnippetSection = ({ item }) => {
        return (
            <Fragment>
                <div id={item.hrefID}></div>
                <hr className="mb-5 mt-7" />
                <Row >
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mb-4" >
                            <h2 className="fw-semibold">{item.title}</h2>
                            <p className='mb-0'>{item.description}</p>
                        </div>
                        <GKTabs
                            tabs={[
                                { id: 1, tabKey: 'design', tabTitle: 'Design', tabData: item.tabContent },
                                { id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={item.codeContent} /> }
                            ]}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
    const SnippetSectionData = [
        {
            hrefID: 'data-with-bar-chart',
            title: 'Data with Bar Chart',
            description: 'Unlike the Column chart, a ReactJS Bar Chart is oriented in a horizontal manner using rectangular bars.',
            tabContent: <DataWithBarChart />,
            codeContent: DataWithBarChartCode
        },
        {
            hrefID: 'data-with-line-chart',
            title: 'Data With Line Chart',
            description: 'View samples of line charts below along with the source code, so you can integrate right away.',
            tabContent: <DataWithLineChart />,
            codeContent: DataWithLineChartCode
        },
        {
            hrefID: 'donut-chart',
            title: 'Donut Chart',
            description: 'ReactJS Pie Charts and ReactJS Donut Charts are optimally used in the display of just a few sets of data.',
            tabContent: <DonutChart />,
            codeContent: DonutChartCode
        },
        {
            hrefID: 'bar-chart',
            title: 'Bar Chart',
            description: 'Unlike the Column chart, a JavaScript Bar Chart is oriented in a horizontal manner using rectangular bars.',
            tabContent: <BarChart />,
            codeContent: BarChartCode
        },
        {
            hrefID: 'line-chart',
            title: 'Line Chart',
            description: 'View samples of line charts below along with the source code, so you can integrate right away.',
            tabContent: <LineChart />,
            codeContent: LineChartCode
        }

    ]

    return (
        <DocsInnerLayout fullWidth >
            <div className="docs-content">

                <PageHeadingDescription
                    title="Charts"
                    description="Modern & Interactive Open Source Charts"
                />
                <Link href="https://apexcharts.com/react-chart-demos/" target="_blank">
                    https://apexcharts.com/  <i className="fe fe-external-link"></i>
                </Link>

                {SnippetSectionData.map((item, index) => {
                    return <SnippetSection item={item} key={index} />
                })}

            </div>
        </DocsInnerLayout>
    )
}

export default ChartsSnippets