// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import CourseSlider from "widgets/courses/CourseSlider";
import HeroHeader from "widgets/hero-sections/HeroHeader";
import FeaturesList from "widgets/home/FeaturesList";

const DefaultHome = async () => {
  const courses = await getFetch(`${API_ENDPOINT}/courses`);

  const instructors = await Promise.all(
    courses?.success === false
      ? []
      : courses?.courses?.map(async (course) => {
          const instructorData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/instructors`
          );
          return instructorData;
        })
  );

  return (
    <main>
      <HeroHeader
        title="Welcome to Geeks UI Learning Application"
        description="Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur."
        buttonText1="Browse Courses"
        buttonLink1="/courses"
        buttonText2="Are You Instructor?"
        buttonLink2="/authentication/sign-in/"
      />
      <FeaturesList />
      <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Recommended to you</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <div suppressHydrationWarning>
              <CourseSlider
                courses={courses}
                instructors={instructors}
                recommended={true}
              />
            </div>
          </div>
        </Container>
      </section>
      {/* <section className="pb-lg-3 pt-lg-3">
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
      </section> */}
    </main>
  );
};

export default DefaultHome;
