// import node module libraries
import { Row, Col, Container } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter, TestimonialsSlider } from 'widgets';

export const Testimonial8 = () => {
    const title = 'Don’t just take our word for it.';
    const subtitle = 'Testimonials';
    const description = '12+ million people are already learning on Geeks';

    return (
        <section className="py-3 bg-light">
            <Container className="py-8">
                <SectionHeadingCenter
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <Row className="mb-8">
                    <Col md={12}>
                        <TestimonialsSlider />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export const Testimonial8Code = `
// import node module libraries
import { Row, Col, Container } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter, TestimonialsSlider } from 'widgets';

export const Testimonial8Example = () => {
    const title = 'Don’t just take our word for it.';
    const subtitle = 'Testimonials';
    const description = '12+ million people are already learning on Geeks';

    return (
        <section className="py-3 bg-light">
            <Container className="py-8">
                <SectionHeadingCenter
                    title={title}
                    subtitle={subtitle}
                    description={description}
                />
                <Row className="mb-8">
                    <Col md={12}>
                        <TestimonialsSlider />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}`.trim();
