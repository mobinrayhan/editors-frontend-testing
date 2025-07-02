// import node module libraries
import { Col, Container, Row } from "react-bootstrap";

import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import CourseSlider from "widgets/courses/CourseSlider";
import FirstFreeClass from "widgets/courses/FirstFreeClass";
import HeroHeader from "widgets/hero-sections/HeroHeader";
import StudentsReview from "widgets/home/StudentsReview";
import WhyChooseUs from "widgets/home/WhyChooseUs";

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
        title="Unlock Your Creative Potential with Editors Academy"
        description="Join a dynamic learning hub where industry experts guide you through hands-on courses in editing, filmmaking, and digital content creation — built for modern learners, entrepreneurs, and creatives."
        buttonText1="Browse Courses"
        buttonLink1="/courses"
        buttonText2="Are You Instructor?"
        buttonLink2="/authentication/sign-in/"
      />
      {/* <FeaturesList /> */}
      <section className="pt-10 pb-10 bg-light">
        <Container>
          <Row className="mb-4">
            <Col>
              <h1 className="mb-0 mx-2 text-center">আমাদের কোর্স সমূহ</h1>
              <p className="text-center ">
                আপনার দক্ষতার স্তর অনুযায়ী আমাদের সম্পূর্ণ ভিডিও এডিটিং
                কোর্সগুলো থেকে পছন্দ করুন।
              </p>
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
      <WhyChooseUs />
      <StudentsReview />
      <FirstFreeClass />
    </main>
  );
};

export default DefaultHome;
