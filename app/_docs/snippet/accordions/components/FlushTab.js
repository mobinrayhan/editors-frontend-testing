import { Col, Container, Row } from "react-bootstrap";
import { GKAccordionPlus, SectionHeadingCenter } from "widgets";
import { FAQList } from "data/courses/LeadCourseData";
import Link from "next/link";

export const FlushTabContent = () => {
    const title = 'Frequently Asked Questions.';
    const subtitle = 'Need to Know';
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.`;
    return (
        <div className='py-8'>
            <Container>
                <Row className='mb-8 justify-content-center'>
                    <Col xxl={9} xl={10} lg={12} md={12} xs={12} >
                        <SectionHeadingCenter
                            title={title}
                            description={description}
                            subtitle={subtitle}
                        />
                        <GKAccordionPlus accordionItems={FAQList} itemClass="px-0" />
                        <div className="mt-8 text-center">
                            <Link href="#" className="btn btn-outline-secondary">
                                More questions? Visit the Learner Help Center.
                            </Link>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export const FlushTabContentCode = `
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { GKAccordionPlus, SectionHeadingCenter } from "widgets";
import { FAQList } from "data/courses/LeadCourseData";

export const FlushTabContent = () => {
    const title = 'Frequently Asked Questions.';
    const subtitle = 'Need to Know';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.';
    return (
        <div className='py-8'>
            <Container>
                <Row className='mb-8 justify-content-center'>
                    <Col xxl={9} xl={10} lg={12} md={12} xs={12} >
                        <SectionHeadingCenter
                            title={title}
                            description={description}
                            subtitle={subtitle}
                        />
                        <GKAccordionPlus accordionItems={FAQList} itemClass="px-0" />
                        <div className="mt-8 text-center">
                            <Link href="#" className="btn btn-outline-secondary">
                                More questions? Visit the Learner Help Center.
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}`.trim();