// import node module libraries
import Link from 'next/link';
import { useState } from 'react';
import { Card, Row, Col, Image, Alert, Form, } from 'react-bootstrap';

// import widget/custom components
import { ApexCharts } from 'widgets';

// import data files
import { PayoutChartSeries, PayoutChartOptions } from 'data/charts/ChartData';

export const DataWithBarChart = () => {
    const AlertDismissible = () => {
        const [show, setShow] = useState(true);
        if (show) {
            return (
                <Alert variant="warning" className='bg-light-warning text-dark-warning border-0' onClose={() => setShow(false)} dismissible>
                    <Alert.Heading className="mb-0">
                        <strong>payout@geeks.com</strong>
                    </Alert.Heading>
                    Your selected payout method was confirmed on Next Payout on 15 July,
                    2020
                </Alert>
            );
        }
        return '';
    };
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <AlertDismissible />
                    <Row className="mt-6">
                        <Col xl={4} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
                            <div className="text-center">
                                <ApexCharts options={PayoutChartOptions} series={PayoutChartSeries} height={165} type="bar" />
                                <h4 className="mb-1">Your Earning this month</h4>
                                <h5 className="mb-0 display-4 fw-bold">$3,210</h5>
                                <p className="px-4">Update your payout method in settings</p>
                                <Link href="#" className="btn btn-primary">  Withdraw Earning </Link>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="border p-4 rounded-3 mb-3">
                                <Form.Check>
                                    <Form.Check.Input type="radio" name="customRadio" id="default-radio1" />
                                    <Form.Check.Label>
                                        <Image src="/images/brand/paypal-small.svg" alt="" />
                                    </Form.Check.Label>
                                </Form.Check>
                                <p>Your paypal account has been authorized for payouts.</p>
                                <Link href="#" className="btn btn-outline-primary">
                                    Remove Account
                                </Link>
                            </div>
                            <div className="border p-4 rounded-3 mb-3">
                                <Form.Check>
                                    <Form.Check.Input type="radio" name="customRadio" id="default-radio2" />
                                    <Form.Check.Label>
                                        <Image src="/images/brand/payoneer.svg" alt="" />
                                    </Form.Check.Label>
                                </Form.Check>
                            </div>
                            <div className="border p-4 rounded-3">
                                <Form.Check>
                                    <Form.Check.Input type="radio" name="customRadio" id="default-radio3" />
                                    <Form.Check.Label>Bank Transfer</Form.Check.Label>
                                </Form.Check>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    )
}

export const DataWithBarChartCode = `
import Link from 'next/link';
import { useState } from 'react';
import { Card, Row, Col, Image, Alert, Form, } from 'react-bootstrap';
import { ApexCharts } from 'widgets';
import { PayoutChartSeries, PayoutChartOptions } from 'data/charts/ChartData';

export const DataWithBarChartExample = () => {
    const AlertDismissible = () => {
        const [show, setShow] = useState(true);
        if (show) {
            return (
                <Alert variant="warning" className='bg-light-warning text-dark-warning border-0' onClose={() => setShow(false)} dismissible>
                    <Alert.Heading className="mb-0">
                        <strong>payout@geeks.com</strong>
                    </Alert.Heading>
                    Your selected payout method was confirmed on Next Payout on 15 July,
                    2020
                </Alert>
            );
        }
        return '';
    };
    return (
        <section className='p-4 bg-light'>
            <Card className="border-0">
                <Card.Body>
                    <AlertDismissible />
                    <Row className="mt-6">
                        <Col xl={4} lg={4} md={12} sm={12} className="mb-3 mb-lg-0">
                            <div className="text-center">
                                <ApexCharts options={PayoutChartOptions} series={PayoutChartSeries} height={165} type="bar" />
                                <h4 className="mb-1">Your Earning this month</h4>
                                <h5 className="mb-0 display-4 fw-bold">$3,210</h5>
                                <p className="px-4">Update your payout method in settings</p>
                                <Link href="#" className="btn btn-primary">  Withdraw Earning </Link>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="border p-4 rounded-3 mb-3">
                                <Form.Check>
                                    <Form.Check.Input type="radio" name="customRadio" id="default-radio1" />
                                    <Form.Check.Label>
                                        <Image src="/images/brand/paypal-small.svg" alt="" />
                                    </Form.Check.Label>
                                </Form.Check>
                                <p>Your paypal account has been authorized for payouts.</p>
                                <Link href="#" className="btn btn-outline-primary">
                                    Remove Account
                                </Link>
                            </div>
                            <div className="border p-4 rounded-3 mb-3">
                                <Form.Check>
                                    <Form.Check.Input type="radio" name="customRadio" id="default-radio2" />
                                    <Form.Check.Label>
                                        <Image src="/images/brand/payoneer.svg" alt="" />
                                    </Form.Check.Label>
                                </Form.Check>
                            </div>
                            <div className="border p-4 rounded-3">
                                <Form.Check>
                                    <Form.Check.Input type="radio" name="customRadio" id="default-radio3" />
                                    <Form.Check.Label>Bank Transfer</Form.Check.Label>
                                </Form.Check>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    )
}
`.trim();