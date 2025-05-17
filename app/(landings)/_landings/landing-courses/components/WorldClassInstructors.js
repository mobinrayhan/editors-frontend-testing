// import node module libraries
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import widget/custom components
import { InstructorCard, SectionHeadingCenter } from "widgets";

// import data files
import { InstructorsList } from "data/courses/LandingCoursesData";

const WorldClassInstructors = () => {
  const title = "Classes Taught by Industry Expert";
  const subtitle = "World-className Instructors";
  const description = `Geeks teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you.`;

  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1445 });

  return (
    <section className="py-8 py-lg-16 bg-light-gradient-top bg-white">
      <Container>
        <SectionHeadingCenter
          title={title}
          description={description}
          subtitle={subtitle}
        />
        <Row>
          {InstructorsList.map((item, index) => (
            <Col
              key={index}
              xl={3}
              lg={4}
              md={6}
              sm={12}
              className={`${
                isLaptop && index === 3 ? "d-lg-none d-xl-block" : ""
              }`}
            >
              <InstructorCard item={item} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12} className="mt-3 text-center">
            <Link href="#" className="btn btn-primary">
              See All Instructors
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorldClassInstructors;
