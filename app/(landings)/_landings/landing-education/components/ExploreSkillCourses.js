// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget/custom components
import { SkillCourseCard } from 'widgets';

// import data files
import SkillCoursesData from 'data/marketing/landing-education/SkillCoursesData';

const ExploreSkillCourses = () => {
  return (
    <section className="py-lg-14 py-6">
      <Container>
        <Row>
          <Col xl={12} md={12} xs={12}>
            <div className="mb-6 mb-lg-8">
              <h2 className="h1 fw-bold">
                Explore <u className="text-warning"><span className="text-primary">skill courses</span></u>
              </h2>
              <p className="mb-0 lead">Online video courses with new additions published every month.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {SkillCoursesData.map((item, index) => {
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

export default ExploreSkillCourses