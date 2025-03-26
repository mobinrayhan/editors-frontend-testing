// import node module libraries
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { SectionHeadingCenter, StatTopSVGIcon } from 'widgets';

// import required data files
import JobCategoriesData from 'data/marketing/jobs/JobCategoriesData';

export const CardIconWithHover = () => {
    const title = 'Discover jobs across popular roles';
    const subtitle = 'Browse Category';
    const description = 'Select a role and we\'ll show you relevant jobs for it!';
    return (
        <section className="py-8 bg-light">
            <Container>
                <SectionHeadingCenter
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <Row className="gy-4">
                    {JobCategoriesData.map((item, index) => {
                        return (
                            <Col lg={3} md={4} xs={12} key={index}>
                                <StatTopSVGIcon item={item} />
                            </Col>
                        )
                    })}
                    <Col xs={12} className="mt-8 text-center">
                        <Link className="btn btn-outline-primary" href="#">View All Category</Link>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export const CardIconWithHoverCode = `
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { SectionHeadingCenter, StatTopSVGIcon } from 'widgets';
import JobCategoriesData from 'data/marketing/jobs/JobCategoriesData';

export const CardIconWithHoverExample = () => {
    const title = 'Discover jobs across popular roles';
    const subtitle = 'Browse Category';
    const description = 'Select a role and we\'ll show you relevant jobs for it!';
    return (
        <section className="py-8 bg-light">
            <Container>
                <SectionHeadingCenter
                    title={title}
                    description={description}
                    subtitle={subtitle}
                />
                <Row className="gy-4">
                    {JobCategoriesData.map((item, index) => {
                        return (
                            <Col lg={3} md={4} xs={12} key={index}>
                                <StatTopSVGIcon item={item} />
                            </Col>
                        )
                    })}
                    <Col xs={12} className="mt-8 text-center">
                        <Link className="btn btn-outline-primary" href="#">View All Category</Link>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
`.trim();
