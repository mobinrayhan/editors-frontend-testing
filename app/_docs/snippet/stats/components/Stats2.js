// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

export const Stats2 = () => {
    const title = 'Our core values';
    const description = 'Geeks is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.';
    const counters = [
        { id: 1, title: 'Learners', value: '20M' },
        { id: 2, title: 'Instructors', value: '57K' },
        { id: 3, title: 'Courses', value: '21K' },
        { id: 4, title: 'Course enrollments', value: '380M' }
    ];
    return (
        <section className='py-8 rounded-3'>
            <Container>
                <Row>
                    <Col md={6} sm={12} className="offset-right-md-6 mb-6">
                        <h2 className="display-4 mb-3 fw-bold">{title}</h2>
                        <p className="lead">{description}</p>
                    </Col>
                </Row>
                <Row>
                    {counters.map((item, index) => {
                        return (
                            <Col lg={3} md={6} sm={6} xs={6} key={index}>
                                <div className="border-top pt-4 mt-6 mb-5">
                                    <h1 className="display-3 fw-bold mb-0">{item.value}</h1>
                                    <p className="text-uppercase text-muted">{item.title}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export const Stats2Code = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

export const Stats2Example = () => {
    const title = 'Our core values';
    const description = 'Geeks is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.';
    const counters = [
        { id: 1, title: 'Learners', value: '20M' },
        { id: 2, title: 'Instructors', value: '57K' },
        { id: 3, title: 'Courses', value: '21K' },
        { id: 4, title: 'Course enrollments', value: '380M' }
    ];
    return (
        <section className='py-8'>
            <Container>
                <Row>
                    <Col md={6} sm={12} className="offset-right-md-6 mb-6">
                        <h2 className="display-4 mb-3 fw-bold">{title}</h2>
                        <p className="lead">{description}</p>
                    </Col>
                </Row>
                <Row>
                    {counters.map((item, index) => {
                        return (
                            <Col lg={3} md={6} sm={6} xs={6} key={index}>
                                <div className="border-top pt-4 mt-6 mb-5">
                                    <h1 className="display-3 fw-bold mb-0">{item.value}</h1>
                                    <p className="text-uppercase text-muted">{item.title}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}`.trim();