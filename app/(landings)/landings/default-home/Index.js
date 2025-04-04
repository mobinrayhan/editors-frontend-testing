"use client";

// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import widget/custom components
import { CourseSlider, FeaturesList, HeroHeader } from "widgets";

const DefaultHome = () => {
  return (
    <main>
      {/*  Page Content  */}
      <HeroHeader
        title="Welcome to Geeks UI Learning Application"
        description="Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur."
        buttonText1="Browse Courses"
        buttonLink1="/courses"
        buttonText2="Are You Instructor?"
        buttonLink2="/authentication/sign-in/"
      />

      {/*  Features list  */}
      <FeaturesList />

      <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Recommended to you</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider recommended={true} />
          </div>
        </Container>
      </section>

      <section className="pb-lg-3 pt-lg-3">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Most Popular</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider popular={true} />
          </div>
        </Container>
      </section>

      <section className="pb-lg-8 pt-lg-3 py-6">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Trending</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider trending={true} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default DefaultHome;
