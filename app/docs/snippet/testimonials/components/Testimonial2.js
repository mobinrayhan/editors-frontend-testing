// import node module libraries
import { Col, Row, Container, Button, Image } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter } from 'widgets';

export const Testimonial2 = () => {
    const title = 'What our customer stories';
    const subtitle = 'Customer stories';
    const description = 'A customer story is an engaging article integrating testimonial quotes from a happy client or customer praising the work completed together.';
    return (
        <section className="py-lg-16 bg-white pt-8 pb-10">
            <Container>
                <Row>
                    <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
                        <SectionHeadingCenter
                            title={title}
                            description={description}
                            subtitle={subtitle}
                        />
                        <Row className="align-items-center">
                            <Col lg={7} md={12} xs={12}>
                                <div className="mb-8 mb-lg-0 me-lg-4">
                                    <p className="display-6 mb-4 lh-2">&quot;Geeksjobs Welcome has helped us achieve continuity to ensure that all of our employees are on the same page.&quot;</p>
                                    <p className="mb-0 ">David Stokes</p>
                                    <span className="">Program Manager at Company</span>
                                </div>
                            </Col>
                            <Col lg={5} md={12} xs={12}>
                                <Image src='/images/background/case-study-img-1.jpg' alt="" className="img-fluid rounded-3 w-100" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs>
                                <Button as="a" variant="outline-primary" className="mt-lg-2 mt-4" href="#">View All Stories</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export const Testimonial2Code = `
// import node module libraries
import { Col, Row, Container, Button, Image } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter } from 'widgets';

export const Testimonial2Example = () => {
    const title = 'What our customer stories';
    const subtitle = 'Customer stories';
    const description = 'A customer story is an engaging article integrating testimonial quotes from a happy client or customer praising the work completed together.';
    return (
        <section className="py-lg-16 bg-white pt-8 pb-10">
            <Container>
                <Row>
                    <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
                        <SectionHeadingCenter
                            title={title}
                            description={description}
                            subtitle={subtitle}
                        />
                        <Row className="align-items-center">
                            <Col lg={7} md={12} xs={12}>
                                <div className="mb-8 mb-lg-0 me-lg-4">
                                    <p className="display-6 mb-4 lh-2">&quot;Geeksjobs Welcome has helped us achieve continuity to ensure that all of our employees are on the same page.&quot;</p>
                                    <p className="mb-0 ">David Stokes</p>
                                    <span className="">Program Manager at Company</span>
                                </div>
                            </Col>
                            <Col lg={5} md={12} xs={12}>
                                <Image src='/images/background/case-study-img-1.jpg' alt="" className="img-fluid rounded-3 w-100" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs>
                                <Button as="a" variant="outline-primary" className="mt-lg-2 mt-4" href="#">View All Stories</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}`.trim();