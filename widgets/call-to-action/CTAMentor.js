// import node module libraries
import Link from 'next/link'
import { Col, Container, Image, Row } from 'react-bootstrap'

const CTAMentor = () => {
    return (
        <section className="py-lg-8 py-6 bg-white">
            <Container className="py-lg-8">
                <Row className="align-items-center">
                    <Col xl={{ span: 4, offset: 1 }} lg={6} className="d-none d-lg-block">
                        <div className="position-relative">
                            <Image src="/images/mentor/become-mentor.jpg" alt="mentor img" className="img-fluid w-100 rounded-4" />
                            <Image src="/images/mentor/schedule.svg" alt="schedule" className="position-absolute top-50 start-100 translate-middle mt-n8 d-xl-block d-none" />
                            <Image src="/images/mentor/verify.svg" alt="verify" className="position-absolute top-50 start-0 translate-middle mt-n2 d-xl-block d-none" />
                            <Image src="/images/mentor/card.svg" alt="card" className="position-absolute top-50 start-0 translate-middle mt-8 d-xl-block d-none" />
                        </div>
                    </Col>
                    <Col xl={{ span: 6, offset: 1 }} lg={{ span: 5, offset: 1 }} >
                        <div className="d-flex flex-column gap-6">
                            <div className="d-flex flex-column gap-2">
                                <h2 className="mb-0 h1">Sign Up To Share Your Knowledge</h2>
                                <p className="mb-0 fs-5">Follow these three simple steps to get started with Long Term Mentorship</p>
                            </div>
                            <div className="d-flex flex-column gap-8">
                                <div className="d-flex flex-column gap-5">
                                    <Row className="gap-xxl-3 gap-0">
                                        <Col xxl={1} md={1} lg={2} xs={2}>
                                            <div className="icon-shape icon-lg bg-danger-subtle rounded-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bullseye text-danger" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                                                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                </svg>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={10} xxl={6} xs={10} >
                                            <h4 className="mb-0">You&apos;ve invested a lot of time to learn your skill, craft, or expertise</h4>
                                        </Col>
                                    </Row>
                                    <Row className="gap-xxl-3">
                                        <Col xxl={1} md={1} lg={2} xs={2}>
                                            <div className="icon-shape icon-lg bg-warning-subtle rounded-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cash-stack text-warning" viewBox="0 0 16 16">
                                                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                                                </svg>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={10} xxl={6} xs={10} >
                                            <h4 className="mb-0">Get paid for talking about the things you already know and love</h4>
                                        </Col>
                                    </Row>
                                    <Row className="gap-xxl-3">
                                        <Col xxl={1} md={1} lg={2} xs={2}>
                                            <div className="icon-shape icon-lg bg-success-subtle rounded-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calendar-check text-success" viewBox="0 0 16 16">
                                                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                </svg>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={10} xxl={6} xs={10} >
                                            <h4 className="mb-0">Set your own availability and meet on your time</h4>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Link href="#!" className="btn btn-primary">Become a mentor</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTAMentor