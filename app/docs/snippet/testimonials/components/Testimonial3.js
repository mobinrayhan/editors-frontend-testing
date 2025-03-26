// import node module libraries
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import { Row, Col, Container } from 'react-bootstrap';

// import widget/custom components
import { TestimonialCard4 } from 'widgets';

// import data files
import DeveloperGeeksData from 'data/marketing/compare-plans/DeveloperGeeksData';

export const Testimonial3 = () => {
    return (
        <section className="pb-14 pt-8 ps-0 bg-light ">
            <Container>
                <Row>
                    <Col xl={{ span: 6, offset: 3 }} md={12}>
                        <div className="text-center mb-8">
                            <h1 className="display-4 fw-bold mb-3">
                                Developer <Icon path={mdiHeart} className="text-danger mx-1" size={2} />  Geeks
                            </h1>
                            <p className="fs-4">  Our average call quality rating is 4.4 out of 5. That leads to happy tweets like these: </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {DeveloperGeeksData.map((item, index) => {
                        return (
                            <Col md={6} xs={12} key={index} className="mb-4">
                                <TestimonialCard4 item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    )
}


export const Testimonial3Code = `
// import node module libraries
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import { Row, Col, Container } from 'react-bootstrap';

// import widget/custom components
import { TestimonialCard4 } from 'widgets';

// import data files
import DeveloperGeeksData from 'data/marketing/compare-plans/DeveloperGeeksData';

export const Testimonial3Example = () => {
    return (
        <section className="pb-14 pt-8 ps-0 bg-light ">
            <Container>
                <Row>
                    <Col xl={{ span: 6, offset: 3 }} md={12}>
                        <div className="text-center mb-8">
                            <h1 className="display-4 fw-bold mb-3">
                                Developer <Icon path={mdiHeart} className="text-danger mx-1" size={2} />  Geeks
                            </h1>
                            <p className="fs-4">  Our average call quality rating is 4.4 out of 5. That leads to happy tweets like these: </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {DeveloperGeeksData.map((item, index) => {
                        return (
                            <Col md={6} xs={12} key={index} className="mb-4">
                                <TestimonialCard4 item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    )
}`.trim();