// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { InstructorProfileSummaryCard } from 'widgets';

export const UserProfile7 = () => {
    const data = {
        id: 1,
        name: 'Jenny Wilson',
        image: '/images/avatar/avatar-1.jpg',
        designation: 'Front-end Developer, Designer',
        rating: 4.5,
        reviews: 12230,
        students: 11604,
        courses: 32,
        verified: true,
        link: '/marketing/instructor/profile',
        about: 'I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.'
    };
    return (
        <section className="py-6 bg-light rounded-3">
            <Container>
                <Row>
                    <Col xxl={5} xl={5} md={6} xs={12}>
                        <InstructorProfileSummaryCard data={data} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const UserProfile7Code = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { InstructorProfileSummaryCard } from 'widgets';

export const UserProfile7Example = () => {
    const data = {
        id: 1,
        name: 'Jenny Wilson',
        image: '/images/avatar/avatar-1.jpg',
        designation: 'Front-end Developer, Designer',
        rating: 4.5,
        reviews: 12230,
        students: 11604,
        courses: 32,
        verified: true,
        link: '/marketing/instructor/profile',
        about: 'I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.'
    };
    return (
        <section className="py-6 bg-light rounded-3">
            <Container>
                <Row>
                    <Col xxl={5} xl={5} md={6} xs={12}>
                        <InstructorProfileSummaryCard data={data} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}`.trim();