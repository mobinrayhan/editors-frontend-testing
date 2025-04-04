// import node module libraries
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';

// import widget/custom components
import { MenteeTestimonialCard, TestimonialModalPopup } from 'widgets';

// import data files
import TestimonialsData from 'data/marketing/mentor/TestimonialsData';

export const Testimonial9 = () => {
    const [modalShow, setModalShow] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(null);
    return (
        <section className="bg-dark-primary py-lg-8 py-6">
            <Container className="py-lg-6">
                <Row>
                    <Col xxl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} xs={12} >
                        <div className="text-center mb-6 d-flex flex-column gap-2">
                            <h2 className="mb-0 text-white h1">Love & Praise By The Mentees</h2>
                            <p className="mb-0 text-white">
                                We’ve already delivered 1-on-1 mentorship to thousands of students, professionals, managers and executives. Even better, they’ve left an rating of 4.9 out of 5 for our mentors.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="gy-4">
                    {/* Iterate over chunks of two testimonials at a time */}
                    {Array.from({ length: Math.ceil(TestimonialsData.length / 2) }, (_, i) =>
                        TestimonialsData.slice(i * 2, i * 2 + 2)
                    ).map((chunk, chunkIndex) => {
                        return (
                            <Col key={chunkIndex} lg={4} xs={12} className="d-flex flex-column gap-4" >
                                {chunk.map((testimonial, index) => (
                                    <Link href="#" key={index} scroll={false} onClick={() => { setActiveTestimonial(testimonial.id), setModalShow(true) }}>
                                        <MenteeTestimonialCard testimonial={testimonial} />
                                    </Link>
                                ))}
                            </Col>
                        );
                    })}
                </Row>
                <TestimonialModalPopup show={modalShow} onHide={() => setModalShow(false)} activetestimonial={activeTestimonial} />
            </Container>
        </section>
    )
}

export const Testimonial9Code = `
// import node module libraries
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';

// import widget/custom components
import { MenteeTestimonialCard, TestimonialModalPopup } from 'widgets';

// import data files
import TestimonialsData from 'data/marketing/mentor/TestimonialsData';

export const Testimonial9 = () => {
    const [modalShow, setModalShow] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(null);
    return (
        <section className="bg-dark-primary py-lg-8 py-6">
            <Container className="py-lg-6">
                <Row>
                    <Col xxl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} xs={12} >
                        <div className="text-center mb-6 d-flex flex-column gap-2">
                            <h2 className="mb-0 text-white h1">Love & Praise By The Mentees</h2>
                            <p className="mb-0 text-white">
                                We’ve already delivered 1-on-1 mentorship to thousands of students, professionals, managers and executives. Even better, they’ve left an rating of 4.9 out of 5 for our mentors.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="gy-4">
                    {/* Iterate over chunks of two testimonials at a time */}
                    {Array.from({ length: Math.ceil(TestimonialsData.length / 2) }, (_, i) =>
                        TestimonialsData.slice(i * 2, i * 2 + 2)
                    ).map((chunk, chunkIndex) => {
                        return (
                            <Col key={chunkIndex} lg={4} xs={12} className="d-flex flex-column gap-4" >
                                {chunk.map((testimonial, index) => (
                                    <Link href="#" key={index} scroll={false} onClick={() => { setActiveTestimonial(testimonial.id), setModalShow(true) }}>
                                        <MenteeTestimonialCard testimonial={testimonial} />
                                    </Link>
                                ))}
                            </Col>
                        );
                    })}
                </Row>
                <TestimonialModalPopup show={modalShow} onHide={() => setModalShow(false)} activetestimonial={activeTestimonial} />
            </Container>
        </section>
    )
}`.trim();