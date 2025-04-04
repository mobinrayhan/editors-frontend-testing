// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { CourseDescriptionCard, SectionHeadingCenter } from "widgets";

// import requried data files
import { CourseDescriptionList } from "data/courses/LeadCourseData";

export const Card2Column = () => {
    const title = 'What will you learn?';
    const subtitle = 'Course Description';
    const description = `Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.`;

    return (
        <section className="py-8 bg-light">
            <Container>
                <SectionHeadingCenter
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <Row>
                    {CourseDescriptionList.map((item) => (
                        <Col lg={6} sm={12} key={item.id}>
                            <CourseDescriptionCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export const Card2ColumnCode = `
import { Col, Container, Row } from "react-bootstrap";
import { CourseDescriptionCard, SectionHeadingCenter } from "widgets";
import { CourseDescriptionList } from "data/courses/LeadCourseData";

export const Card2ColumnExample = () => {
    const title = 'What will you learn?';
    const subtitle = 'Course Description';
    const description = 'Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.';

    return (
        <section className="py-8 bg-light">
            <Container>
                <SectionHeadingCenter
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <Row>
                    {CourseDescriptionList.map((item) => (
                        <Col lg={6} sm={12} key={item.id}>
                            <CourseDescriptionCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
`.trim();
