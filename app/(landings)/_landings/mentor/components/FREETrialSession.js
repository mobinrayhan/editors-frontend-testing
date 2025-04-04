// import node module libraries
import Link from 'next/link'
import { Col, Container, Form, Row } from 'react-bootstrap'

// import widget/custom components
import { MentorCard } from 'widgets'

// import data files
import MentorListData from 'data/marketing/mentor/MentorListData'

const FREETrialSession = () => {
    return (
        <section className="py-6 py-lg-8 bg-light">
            <Container className="py-lg-6">
                <Row>
                    <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} >
                        <div className="text-center mb-6 d-flex flex-column gap-2">
                            <h2 className="mb-0 mx-xl-8 h1">1,600+ mentors are just a Free Trial Session away</h2>
                            <p className="mb-0">Choose your ideal mentor and get started with a FREE trial session</p>
                        </div>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col xs={12}>
                        <div className="d-flex flex-md-row gap-2 flex-column justify-content-between">
                            <Form>
                                <Form.Control
                                    type="search"
                                    placeholder="Search by company, skills or role"
                                />
                            </Form>
                            <div className="d-grid d-md-flex">
                                <Link href="/marketing/mentor/list" className="btn btn-primary">Explore all mentors</Link>
                            </div>
                        </div>
                    </Col>

                    {MentorListData.slice(0, 8).map((mentor, index) => {
                        return (
                            <Col key={index} xxl={3} xl={4} md={6} xs={12}>
                                <MentorCard mentor={mentor} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default FREETrialSession