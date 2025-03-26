// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Button, Image } from 'react-bootstrap';

const CTAStartLearning = ({ title, subtitle, btntext, btnlink }) => {
    return (
        <section className="py-lg-8">
            <Container>
                <Row>
                    <Col xl={{ offset: 1, span: 10 }} md={12} xs={12}>
                        <div className="bg-primary py-6 px-6 px-xl-0 rounded-4 ">
                            <Row className="align-items-center">
                                <Col xl={{ offset: 1, span: 5 }} md={6} xs={12}>
                                    <div>
                                        <h2 className="h1 text-white mb-3">{title}</h2>
                                        <p className="text-white fs-4">{subtitle}</p>
                                        <Button variant='dark' as={Link} href={btnlink}>{btntext}</Button>
                                    </div>
                                </Col>
                                <Col xl={6} md={6} xs={12}>
                                    <div className="text-center">
                                        <Image src='/images/education/course.png' alt="learning" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CTAStartLearning