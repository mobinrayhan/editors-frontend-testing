// import node module libraries
import Link from "next/link";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

const HeroTypedMentors = ({
  title = "Hero Title",
  typedBefore = "1-on-1",
  typedArray = ["Javascript", "Startup", "React", "Marketing", "Branding"],
  typedAfter = "Mentorship...",
  tags = [
    "Frontend...",
    "Devops",
    "UI/UX designer",
    "Data Science",
    "Full Stack",
    "Backend",
    "Data Analyst",
  ],
  marqueeData = [],
}) => {
  return (
    <section
      className="py-md-8 py-6 bg-white"
      style={{
        backgroundImage: "url(/images/mentor/mentor-glow.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Container className="py-lg-6 ">
        <Row className="align-items-center gy-4 justify-content-center">
          <Col xxl={5} xl={6} md={10}>
            <div className="d-flex flex-column gap-5 text-center">
              <div className="d-flex flex-column gap-2">
                <span className="text-dark fs-5">{title}</span>
                <h1 className="mb-0 display-2 fw-bold">
                  <span>{typedBefore}</span>{" "}
                  <span className="headingTyped text-primary">
                    <Typewriter
                      words={typedArray}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                  <div>{typedAfter}</div>
                </h1>
              </div>
              <div className="d-flex flex-column gap-3">
                <Form>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      className="form-control-lg"
                      placeholder="Search by Skills"
                      aria-label="Search by Skills"
                      aria-describedby="search-control"
                    />
                    <Button variant="primary" id="search-control" size="lg">
                      Find mentors
                    </Button>
                  </InputGroup>
                </Form>

                <div className="gap-2 d-flex flex-wrap justify-content-center">
                  {tags.map((tag, index) => {
                    return (
                      <Link
                        key={index}
                        href="/marketing/mentor/list"
                        className="btn btn-tag btn-sm"
                      >
                        {tag}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <div className="position-relative d-flex overflow-x-hidden py-lg-4 pt-4">
          <div className="animate-marquee d-flex gap-3">
            {marqueeData.map((mentor, index) => {
              return (
                <Link
                  key={index}
                  href="/marketing/mentor/single"
                  className="bg-white text-center shadow-sm text-wrap rounded-4 w-100 border card-lift border mentor-card"
                >
                  <div className="p-3">
                    <Image
                      src={mentor.image}
                      alt="mentor 1"
                      className="avatar avatar-xl rounded-circle"
                    />
                    <div className="mt-3">
                      <h3 className="mb-0 h4">{mentor.mentorName}</h3>
                      <span className="text-gray-800">{mentor.mentorRole}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTypedMentors;
