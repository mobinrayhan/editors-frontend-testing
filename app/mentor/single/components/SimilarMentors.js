// import node module libraries
import { Col, Container, Row } from 'react-bootstrap'

// import widget/custom components
import { MentorCard } from 'widgets'

// import data files
import MentorListData from 'data/marketing/mentor/MentorListData'

const SimilarMentors = () => {
    return (
        <section className="pb-xl-8 pb-6">
            <Container>
                <Row >
                    <Col xs={12} ><h2 className="mb-4">Similar mentors</h2> </Col>
                </Row>
                <Row className="gy-4">
                    {MentorListData.slice(0, 4).map((mentor, index) => {
                        return (
                            <Col key={index} xl={3} md={6} xs={12} className="d-md-block d-xl-none d-xxl-block">
                                <MentorCard mentor={mentor} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>

    )
}

export default SimilarMentors