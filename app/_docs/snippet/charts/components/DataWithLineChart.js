// import node module libraries
import { Card, Row, Col, Badge, } from 'react-bootstrap';

// import widget/custom components
import { ApexCharts, StatTopIcon } from 'widgets';

// import data files
import { TotalEarningChartOptions, TotalEarningChartSeries, EarningsChartOptions, EarningsChartSeries } from 'data/charts/ChartData';

export const DataWithLineChart = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xl={3} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
                            <div>
                                <StatTopIcon title="Your total earnings" value="$3,210" iconName="shopping-cart" colorVariant="success" progress={0} flat />
                                <Row>
                                    <Col className="col ps-0">
                                        <ApexCharts options={TotalEarningChartOptions} series={TotalEarningChartSeries} width={130} />
                                    </Col>
                                    <Col className="col-auto">
                                        <Badge bg="success">
                                            <i className="fe fe-trending-up fs-6 me-2"></i>32%
                                        </Badge>
                                    </Col>
                                </Row>
                                <p className="mb-0 lh-1.5">  Update your payout method in settings.  </p>
                            </div>
                        </Col>
                        <Col xl={9} lg={8} md={12} sm={12}>
                            <ApexCharts options={EarningsChartOptions} series={EarningsChartSeries} height={350} type="line" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    )
}

export const DataWithLineChartCode = `
import { Card, Row, Col, Badge, } from 'react-bootstrap';
import { ApexCharts, StatTopIcon } from 'widgets';
import { TotalEarningChartOptions, TotalEarningChartSeries, EarningsChartOptions, EarningsChartSeries } from 'data/charts/ChartData';

export const DataWithLineChartExample = () => {
    return (
        <section className='p-4 bg-light'>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xl={3} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
                            <div>
                                <StatTopIcon title="Your total earnings" value="$3,210" iconName="shopping-cart" colorVariant="success" progress={0} flat />
                                <Row>
                                    <Col className="col ps-0">
                                        <ApexCharts options={TotalEarningChartOptions} series={TotalEarningChartSeries} width={130} />
                                    </Col>
                                    <Col className="col-auto">
                                        <Badge bg="success">
                                            <i className="fe fe-trending-up fs-6 me-2"></i>32%
                                        </Badge>
                                    </Col>
                                </Row>
                                <p className="mb-0 lh-1.5">  Update your payout method in settings.  </p>
                            </div>
                        </Col>
                        <Col xl={9} lg={8} md={12} sm={12}>
                            <ApexCharts options={EarningsChartOptions} series={EarningsChartSeries} height={350} type="line" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    )
}

`.trim();