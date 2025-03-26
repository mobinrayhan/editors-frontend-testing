// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { TestimonialCardWithLogo } from 'widgets';

// import data files
import CustomersTestimonialsData from 'data/landing-sass/CustomersTestimonialsData';

export const Testimonial5 = () => {
    return (
        <section className="pt-lg-14 pb-lg-18 pb-8 bg-white">
            <Container>
                <Row>
                    {CustomersTestimonialsData.map((item, index) => {
                        return (
                            <Col lg={{ offset: 1, span: 5 }} md={6} xs={12} key={index} className='mb-4'>
                                <TestimonialCardWithLogo item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export const Testimonial5Code = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { TestimonialCardWithLogo } from 'widgets';

// import data files
import CustomersTestimonialsData from 'data/landing-sass/CustomersTestimonialsData';

export const Testimonial5Example = () => {
    return (
        <section className="pt-lg-14 pb-lg-18 pb-8 bg-white">
            <Container>
                <Row>
                    {CustomersTestimonialsData.map((item, index) => {
                        return (
                            <Col lg={{ offset: 1, span: 5 }} md={6} xs={12} key={index} className='mb-4'>
                                <TestimonialCardWithLogo item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}`.trim();