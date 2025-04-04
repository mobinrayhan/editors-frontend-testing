// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { CoursePathCard } from "widgets";

export const CardCourse = () => {
    const data = [
        {
            id: 1,
            category: 'Development',
            logo: '/images/path/path-bootstrap.svg',
            title: 'Bootstrap',
            courses: 42,
            hours: 110124,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CoursePathCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const CardCourseCode = `
import { Col, Container, Row } from "react-bootstrap";
import { CoursePathCard } from "widgets";

export const CardCourseExample = () => {
    const data = [
        {
            id: 1,
            category: 'Development',
            logo: '/images/path/path-bootstrap.svg',
            title: 'Bootstrap',
            courses: 42,
            hours: 110124,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CoursePathCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
