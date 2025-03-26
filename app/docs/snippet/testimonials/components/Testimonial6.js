// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import widget/custom components
import { TestimonialsSlider2, SectionHeadingLeft2 } from 'widgets';

export const Testimonial6 = () => {
    return (
        <section className="py-6 bg-white">
            <Container>
                <Row>
                    <Col xl={{ offset: 2, span: 8 }} sm={12}>
                        <Row className="mb-8">
                            <Col lg={9} md={12} sm={12} className="mb-8">
                                <SectionHeadingLeft2
                                    title="The developers loves. Says"
                                    description="Optimized for a great developer experience."
                                />
                            </Col>
                            <Col md={12} sm={12}>
                                <TestimonialsSlider2 />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export const Testimonial6Code = `
// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import widget/custom components
import { TestimonialsSlider2, SectionHeadingLeft2 } from 'widgets';

export const Testimonial6 = () => {
    return (
        <section className="py-6 bg-white">
            <Container>
                <Row>
                    <Col xl={{ offset: 2, span: 8 }} sm={12}>
                        <Row className="mb-8">
                            <Col lg={9} md={12} sm={12} className="mb-8">
                                <SectionHeadingLeft2
                                    title="The developers loves. Says"
                                    description="Optimized for a great developer experience."
                                />
                            </Col>
                            <Col md={12} sm={12}>
                                <TestimonialsSlider2 />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}`.trim();
