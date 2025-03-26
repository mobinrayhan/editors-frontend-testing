// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { ProfileCard } from "widgets";

export const ProfileCardSnippet = () => {
    const data = [
        {
            id: 1,
            author_name: 'Jenny Wilson',
            author_image: '/images/avatar/avatar-1.jpg',
            designation: 'Front-end Developer, Designer',
            rating: 4.5,
            students: 110124,
            courses: 42,
            about_author: 'I start my development and digital career studying digital design. After taking a couple of programming classes I realize that code is what I wanted to be doing.'
        },
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={12}>
                        <ProfileCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const ProfileCardCode = `
import { Col, Container, Row } from "react-bootstrap";
import { ProfileCard } from "widgets";

export const ProfileCardExample = () => {
    const data = [
        {
            id: 1,
            author_name: 'Jenny Wilson',
            author_image: '/images/avatar/avatar-1.jpg',
            designation: 'Front-end Developer, Designer',
            rating: 4.5,
            students: 110124,
            courses: 42,
            about_author: 'I start my development and digital career studying digital design. After taking a couple of programming classes I realize that code is what I wanted to be doing.'
        },
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={6} xl={6} lg={12}>
                        <ProfileCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
