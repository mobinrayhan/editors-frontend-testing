// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { BlogCard } from "widgets";

export const CardThumbnail = () => {
    const data = [
        {
            id: 1,
            blogpostimage: '/images/blog/blogpost-2.jpg',
            category: 'Courses',
            title: 'Getting started the Web App JavaScript in 2020',
            slug: 'getting-started-the-web-app-javascript-in-2020',
            details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
            authorname: 'Dustin Warren',
            authorimage: '/images/avatar/avatar-6.jpg',
            postedon: 'September 13, 2020',
            readinglength: 6
        }
    ];
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <BlogCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const CardThumbnailCode = `
import { Col, Container, Row } from "react-bootstrap";
import { BlogCard } from "widgets";

export const CardThumbnailExample = () => {
    const data = [
        {
            id: 1,
            blogpostimage: '/images/blog/blogpost-2.jpg',
            category: 'Courses',
            title: 'Getting started the Web App JavaScript in 2020',
            slug: 'getting-started-the-web-app-javascript-in-2020',
            details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
            authorname: 'Dustin Warren',
            authorimage: '/images/avatar/avatar-6.jpg',
            postedon: 'September 13, 2020',
            readinglength: 6
        }
    ];
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    <Col xxl={4} xl={6} lg={12}>
                        <BlogCard item={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
