
// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';

// import hooks
import useToggle from 'hooks/useToggle';

// import widget/custom components
import { PricingCard } from 'widgets';

// import data files
import { starter, individual, team } from 'data/marketing/pricing/PricingPlansData';

export const Pricing2 = () => {
    const [Pricing, togglePricing] = useToggle(true);
    return (
        <Fragment>
            <section className="py-lg-13 py-8 bg-primary">
                <Container>
                    <Row className="align-items-center">
                        <Col xl={{ span: 8, offset: 2 }} lg={12} md={12} sm={12}>
                            <div className="text-center mb-6 px-md-8">
                                <h1 className="text-white display-3 fw-bold">
                                    Simple pricing that scales with your business
                                </h1>
                                <p className="text-white lead mb-4">
                                    Reference giving information on its origins, as well as a random Lipsum generator.
                                </p>
                                <div id="pricing-switch" className="d-flex justify-content-center align-items-center" >
                                    <span className="text-white me-2">Monthly</span>
                                    <Form>
                                        <Form.Check
                                            name="radios" type="checkbox" id="pricingSwitch"
                                            className="form-switch form-switch-price"
                                            checked={Pricing} onChange={togglePricing} />
                                    </Form>
                                    <span className="text-white ms-2">Yearly</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mt-n8 pb-8">
                <Container>
                    <Row>
                        <Col lg={4} md={12} sm={12}>
                            <PricingCard content={starter} pricingMode={Pricing} />
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <PricingCard content={individual} pricingMode={Pricing} />
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <PricingCard content={team} pricingMode={Pricing} />
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    );
}

export const Pricing2Code = `
// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container, Form } from 'react-bootstrap';

// import hooks
import useToggle from 'hooks/useToggle';

// import widget/custom components
import { PricingCard } from 'widgets';

// import data files
import { starter, individual, team } from 'data/marketing/pricing/PricingPlansData';

export const Pricing2Example = () => {
    const [Pricing, togglePricing] = useToggle(true);
    return (
        <Fragment>
            <section className="py-lg-13 py-8 bg-primary">
                <Container>
                    <Row className="align-items-center">
                        <Col xl={{ span: 8, offset: 2 }} lg={12} md={12} sm={12}>
                            <div className="text-center mb-6 px-md-8">
                                <h1 className="text-white display-3 fw-bold">
                                    Simple pricing that scales with your business
                                </h1>
                                <p className="text-white lead mb-4">
                                    Reference giving information on its origins, as well as a random Lipsum generator.
                                </p>
                                <div id="pricing-switch" className="d-flex justify-content-center align-items-center" >
                                    <span className="text-white me-2">Monthly</span>
                                    <Form>
                                        <Form.Check
                                            name="radios" type="checkbox" id="pricingSwitch"
                                            className="form-switch form-switch-price"
                                            checked={Pricing} onChange={togglePricing} />
                                    </Form>
                                    <span className="text-white ms-2">Yearly</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mt-n8 pb-8">
                <Container>
                    <Row>
                        <Col lg={4} md={12} sm={12}>
                            <PricingCard content={starter} pricingMode={Pricing} />
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <PricingCard content={individual} pricingMode={Pricing} />
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <PricingCard content={team} pricingMode={Pricing} />
                        </Col>
                    </Row>
                </Container>
            </section>

        </Fragment>
    );
}`.trim();