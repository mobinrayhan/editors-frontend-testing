// import node module libraries
import Link from 'next/link'
import { Col, Container, Image, Row } from 'react-bootstrap'

const EasySteps = () => {
    return (
        <section className="py-lg-8 py-6 bg-white">
            <Container className="py-lg-6">
                <Row className="mb-8">
                    <Col xs={12}>
                        <div className="text-center d-flex flex-column gap-2">
                            <h2 className="mb-0 h1">Lets Get Started in 3 Easy Steps</h2>
                            <p className="mb-0">Follow these three simple steps to get started with Long Term Mentorship</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row className="mb-8 align-items-center gy-4">
                            <Col xxl={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }} md={6} className="mb-xxl-6">
                                <div className="d-flex flex-column gap-4">
                                    <div className="border border-2 border-primary rounded-circle icon-shape icon-xl fs-3 text-primary">1</div>
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className="mb-0 h2">Find Your Ideal Mentor</h3>
                                        <p className="mb-0 fs-3">Browse from 600+ vested mentors and choose your ideal mentor according to your preferences</p>
                                    </div>
                                    <div>
                                        <Link href="#!" className="btn btn-outline-secondary">Shortlist Mentor</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={5} xl={6} md={6} className="mb-xxl-6">
                                <div>
                                    <Image src="/images/mentor/mento-step-one.jpg" alt="stpes 1" className="img-fluid rounded-4 w-100" />
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-8 align-items-center gy-4">
                            <Col xxl={{ span: 5, offset: 1 }} xl={{ span: 5, offset: 1 }} md={6} className="order-md-1 order-2 mb-xxl-6">
                                <div>
                                    <Image src="/images/mentor/mento-step-two.jpg" alt="stpes 2" className="img-fluid rounded-4 w-100" />
                                </div>
                            </Col>
                            <Col xxl={{ span: 4, offset: 1 }} xl={{ span: 5, offset: 1 }} md={6} className="order-xl-2 order-1 mb-xxl-6">
                                <div className="d-flex flex-column gap-4">
                                    <div className="border border-2 border-primary rounded-circle icon-shape icon-xl fs-3 text-primary">2</div>
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className="mb-0 h2">Book a FREE Trial Session</h3>
                                        <p className="mb-0 fs-3">Connect with mentor and see how mentor will help you achieve your goal faster, avoid asking referrals etc.</p>
                                    </div>
                                    <div>
                                        <Link href="#!" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signupModal">Book a Free Trial</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center gy-4">
                            <Col xxl={{ span: 4, offset: 2 }} xl={{ span: 5, offset: 1 }} md={6} className="mb-xxl-6">
                                <div className="d-flex flex-column gap-4">
                                    <div className="border border-2 border-primary rounded-circle icon-shape icon-xl fs-3 text-primary">3</div>
                                    <div className="d-flex flex-column gap-2">
                                        <h3 className="mb-0 h2">Learn, chat, and have fun</h3>
                                        <p className="mb-0 fs-3">Bravo!! Get started with your personalised mentorship in the right direction with a mentor of your choice.</p>
                                    </div>
                                    <div>
                                        <Link href="#!" className="btn btn-outline-secondary">Meet the Mentor</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={5} xl={6} md={6} className="mb-xxl-6">
                                <div>
                                    <Image src="/images/mentor/mento-step-three.jpg" alt="stpes 3" className="img-fluid rounded-4 w-100" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EasySteps