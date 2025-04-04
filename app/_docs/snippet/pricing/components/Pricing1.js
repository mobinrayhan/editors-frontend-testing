// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Form, Container } from 'react-bootstrap';

// import hooks
import useToggle from 'hooks/useToggle';

// import widget/custom components
import { SimplePricingCard } from 'widgets';

// import data files
import { free, pro } from 'data/landing-sass/SimplePricingPlansData';

export const Pricing1 = () => {
    const [Pricing, togglePricing] = useToggle(true);
    return (
        <Container>
            <Row>
                <Col xl={{ offset: 2, span: 8 }} lg={{ offset: 1, span: 10 }} md={12} xs={12} >
                    <div className="mb-8 text-center">
                        <h2 className="display-4 mb-3 fw-bold">
                            Simple plans for everyone
                        </h2>
                        <p className="lead mb-4">
                            Everything you need to design like a professional. Boost you and  your team s creativity and supercharge your productivity with  Geeks UI Pro.
                        </p>
                        <div id="pricing-switch-second" className="d-flex justify-content-center align-items-center" >
                            <span className="fs-4 fw-semi-bold me-2">Pay Monthly</span>
                            <Form>
                                <Form.Check
                                    name="radios" type="checkbox"
                                    className="form-switch form-switch-price" id="pricingSwitch"
                                    checked={Pricing} onChange={togglePricing} />
                            </Form>
                            <span className="fs-4 fw-semi-bold ms-2"> Pay Yearly</span>
                        </div>
                    </div>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <SimplePricingCard content={free} pricingMode={Pricing} />
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <SimplePricingCard content={pro} pricingMode={Pricing} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export const Pricing1Code = `
// import node module libraries
import { Col, Row, Form, Container } from 'react-bootstrap';

// import widget/custom components
import { SimplePricingCard } from 'widgets';

// import hooks
import useToggle from 'hooks/useToggle';

// import data files
import { free, pro } from 'data/landing-sass/SimplePricingPlansData';

export const Pricing1Example = () => {
    const [Pricing, togglePricing] = useToggle(true);
    return (
        <Container>
            <Row>
                <Col xl={{ offset: 2, span: 8 }} lg={{ offset: 1, span: 10 }} md={12} xs={12} >
                    <div className="mb-8 text-center">
                        <h2 className="display-4 mb-3 fw-bold">
                            Simple plans for everyone
                        </h2>
                        <p className="lead mb-4">
                            Everything you need to design like a professional. Boost you and  your team s creativity and supercharge your productivity with  Geeks UI Pro.
                        </p>
                        <div id="pricing-switch-second" className="d-flex justify-content-center align-items-center" >
                            <span className="fs-4 fw-semi-bold me-2">Pay Monthly</span>
                            <Form>
                                <Form.Check
                                    name="radios" type="checkbox"
                                    className="form-switch form-switch-price" id="pricingSwitch"
                                    checked={Pricing} onChange={togglePricing} />
                            </Form>
                            <span className="fs-4 fw-semi-bold ms-2"> Pay Yearly</span>
                        </div>
                    </div>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <SimplePricingCard content={free} pricingMode={Pricing} />
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <SimplePricingCard content={pro} pricingMode={Pricing} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}`.trim();