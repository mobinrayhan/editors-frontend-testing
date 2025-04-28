// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

import HeroHeader from "widgets/hero-sections/HeroHeader";
import FeaturesList from "widgets/home/FeaturesList";
import CourseSlider from "widgets/courses/CourseSlider";
import ErrorPage from "components/ErrorPage";

const DefaultHome = async () => {
  const response = await fetch("https://api.editors.academy/courses", {
    method: "GET",
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const courses = await response.json();

  const instructors = await Promise.all(
    courses?.success === false
      ? []
      : courses?.courses?.map(async (course) => {
          const resInstructor = await fetch(
            `https://api.editors.academy/courses/${course.id}/instructor`,
            {
              method: "GET",
              headers: {
                "x-api-key": process.env.API_KEY,
              },
            }
          );
          if (!resInstructor.ok) {
            throw new Error(
              `Failed to fetch instructor for course ID: ${course.id}`
            );
          }
          const instructorData = await resInstructor.json();

          return instructorData;
        })
  );
  console.log(courses);
  // console.log("check--?", Array.isArray(instructors[0]));

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
            <CourseSlider
              courses={courses}
              instructors={instructors}
              recommended={true}
            />
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
