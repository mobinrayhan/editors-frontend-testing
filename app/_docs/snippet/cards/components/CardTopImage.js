// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { SkillCourseCard } from 'widgets';

export const CardTopImage = () => {
    const data = [
        {
            id: 1,
            category: 'Writing',
            image: '/images/education/edu-img-1.jpg',
            duration: 8,
            durationUnit: 'Hours',
            title: 'Content Writing',
            rating: 4.9,
            votes: 31,
        },
        {
            id: 2,
            category: 'Design',
            image: '/images/education/edu-img-2.jpg',
            duration: 12,
            durationUnit: 'Hours',
            title: 'UI / UX Design',
            rating: 4.9,
            votes: 23
        }];
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col xl={3} md={6} xs={12} key={index}>
                                <SkillCourseCard item={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export const CardTopImageCode = `
import { Col, Container, Row } from 'react-bootstrap';
import { SkillCourseCard } from 'widgets';

export const CardTopImageExample = () => {
    const data = [
        {
            id: 1,
            category: 'Writing',
            image: '/images/education/edu-img-1.jpg',
            duration: 8,
            durationUnit: 'Hours',
            title: 'Content Writing',
            rating: 4.9,
            votes: 31,
        },
        {
            id: 2,
            category: 'Design',
            image: '/images/education/edu-img-2.jpg',
            duration: 12,
            durationUnit: 'Hours',
            title: 'UI / UX Design',
            rating: 4.9,
            votes: 23
        }];
    return (
        <section className="py-6 bg-light">
            <Container>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col xl={3} md={6} xs={12} key={index}>
                                <SkillCourseCard item={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
`.trim();
