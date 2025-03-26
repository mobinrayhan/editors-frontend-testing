// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { GetEnrolledCourseCard } from "widgets";

export const CardThumbnailV2 = () => {
    const data = [
        {
            id: 1,
            image: '/images/course/course-gatsby.jpg',
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            level: 'Intermediate',
            price: 850,
            rating: 2.5,
            ratingby: 16500,
            link: '#'
        },
        {
            id: 2,
            image: '/images/course/course-react.jpg',
            title: 'How to easily create a website with React',
            instructor_name: 'April Noms',
            level: 'Advance',
            price: 750,
            rating: 4.5,
            ratingby: 1500,
            link: '#'
        },
        {
            id: 3,
            image: '/images/course/course-html.jpg',
            title: 'HTML Full Course - Build a Website Tutorial',
            instructor_name: 'Miston Wilson',
            level: 'Beginner',
            price: 700,
            rating: 3.0,
            ratingby: 1600,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row className="row-cols-1 row-cols-md-3 g-4">
                    {data.map((item, index) => (
                        <Col xs key={index}>
                            <GetEnrolledCourseCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export const CardThumbnailV2Code = `
import { Col, Container, Row } from "react-bootstrap";
import { GetEnrolledCourseCard } from "widgets";

export const CardThumbnailV2Example = () => {
    const data = [
        {
            id: 1,
            image: '/images/course/course-gatsby.jpg',
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            level: 'Intermediate',
            price: 850,
            rating: 2.5,
            ratingby: 16500,
            link: '#'
        },
        {
            id: 2,
            image: '/images/course/course-react.jpg',
            title: 'How to easily create a website with React',
            instructor_name: 'April Noms',
            level: 'Advance',
            price: 750,
            rating: 4.5,
            ratingby: 1500,
            link: '#'
        },
        {
            id: 3,
            image: '/images/course/course-html.jpg',
            title: 'HTML Full Course - Build a Website Tutorial',
            instructor_name: 'Miston Wilson',
            level: 'Beginner',
            price: 700,
            rating: 3.0,
            ratingby: 1600,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row className="row-cols-1 row-cols-md-3 g-4">
                    {data.map((item, index) => (
                        <Col xs key={index}>
                            <GetEnrolledCourseCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
`.trim();
