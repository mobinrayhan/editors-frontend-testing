// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

// import widget/custom components
import { GKAccordionProgress } from "widgets";

// import data files
import { CourseIndex } from 'data/courses/CourseIndexData';

export const ListGroupsCard = () => {
    return (
        <section className="py-8 bg-light">
            <Container>
                <Row>
                    <Col lg={4} sm={12} >
                        <GKAccordionProgress accordionItems={CourseIndex} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const ListGroupsCardCode = `
import { Col, Container, Row } from "react-bootstrap";
import { GKAccordionProgress } from "widgets";
import { CourseIndex } from 'data/courses/CourseIndexData';

export const ListGroupsCard = () => {
    return (
        <section className="py-8 bg-light">
            <Container>
                <Row>
                    <Col lg={4} sm={12} >
                        <GKAccordionProgress accordionItems={CourseIndex} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
`.trim();
