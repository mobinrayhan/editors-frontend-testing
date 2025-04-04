// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { StudentEnrolledCard } from 'widgets';

export const UserProfile4 = () => {
    const data = [
        {
            id: 1,
            name: 'Wade Warren',
            image: '/images/avatar/avatar-3.jpg',
            locations: 'United States',
            joined: '7 July, 2020',
            progress: 10,
        }
    ]
    return (
        <section className="py-6 bg-light rounded-3">
            <Container>
                <Row>
                    <Col xxl={3} xl={4} md={6} xs={12}>
                        <StudentEnrolledCard student={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const UserProfile4Code = `
// import node module libraries
import { Col, Container, Row } from 'react-bootstrap';

// import widget/custom components
import { StudentEnrolledCard } from 'widgets';

export const UserProfile4Example = () => {
    const data = [
        {
            id: 1,
            name: 'Wade Warren',
            image: '/images/avatar/avatar-3.jpg',
            locations: 'United States',
            joined: '7 July, 2020',
            progress: 10,
        }
    ]
    return (
        <section className="py-6 bg-light rounded-3">
            <Container>
                <Row>
                    <Col xxl={3} xl={4} md={6} xs={12}>
                        <StudentEnrolledCard student={data[0]} />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}`.trim();