// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { CourseCard } from "widgets";

export const CardCourseThumbnail = () => {
    const data = [
        {
            id: 1,
            image: '/images/course/course-gatsby.jpg',
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            instructor_image: '/images/avatar/avatar-7.jpg',
            level: 'Intermediate',
            duration: '1h 46m',
            rating: 2.0,
            ratingby: 16500,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CourseCard item={data[0]} viewby="grid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const CardCourseThumbnailCode = `
import { Col, Container, Row } from "react-bootstrap";
import { CourseCard } from "widgets";

export const CardCourseThumbnailExample = () => {
    const data = [
        {
            id: 1,
            image: '/images/course/course-gatsby.jpg',
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            instructor_image: '/images/avatar/avatar-7.jpg',
            level: 'Intermediate',
            duration: '1h 46m',
            rating: 2.0,
            ratingby: 16500,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <CourseCard item={data[0]} viewby="grid" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
