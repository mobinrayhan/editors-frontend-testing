// import node module libraries
import Link from "next/link";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

// import MDI icons
import { mdiCheckCircle } from "@mdi/js";
import Icon from "@mdi/react";

// import widget/custom components
import { LogosTopHeadingInverseDark } from "widgets";

// import data files
import LogoList1 from "data/clientlogos/LogoList2";

const HeroGradient = ({
  title = "Modern web apps shipped faster",
  bulletArray = [
    "Simple to use, beautiful UI design",
    "Complete complex project with ease",
    "An intuitive admin app for developers",
  ],
  buttonText = "Get started for Free",
  buttonLink = "#",
  hrefText = "Questions? Talk to an expert",
  hrefLink = "#",
  logos = LogoList1,
}) => {
  const isLaptop = useMediaQuery({ maxWidth: 1024 });

  return (
    <section
      className="py-8 position-relative bg-cover"
      style={{ backgroundImage: `url('/images/background/gradient-bg.png')` }}
    >
      {/* Image */}
      <Container>
        <Row className="align-items-center mb-6">
          <Col lg={7} xs={12} className="order-md-2">
            <div className="mb-2 mb-md-0 ">
              <Image
                src="/images/background/graphics.svg"
                alt=""
                className={`img-fluid ${isLaptop ? "" : "mw-lg-130"}`}
              />
            </div>
          </Col>
          <Col lg={5} xs={12} className="order-md-1">
            {/* Heading */}
            <h1 className="display-2 mb-5 fw-bold">{title}</h1>

            {/* list */}
            <ListGroup
              bsPrefix="list-unstyled"
              className="fs-3 text-dark mb-6 fw-medium"
            >
              {bulletArray.map((item, index) => {
                return (
                  <ListGroup.Item
                    key={index}
                    bsPrefix="mb-1"
                    className="d-flex"
                  >
                    <Icon
                      path={mdiCheckCircle}
                      size={0.9}
                      className="text-success mt-1 me-2"
                    />
                    {item}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>

            {/* Buttons */}
            <div className="mb-8 mb-lg-0">
              <Link
                href={buttonLink}
                scroll={false}
                className="btn btn-primary me-3 mb-2 mb-lg-0"
              >
                {buttonText}
              </Link>
              <Link
                href={hrefLink}
                scroll={false}
                className="text-nowrap btn-link"
              >
                {hrefText}
              </Link>
            </div>
          </Col>
        </Row>

        {/* Trusted By logo */}
        <LogosTopHeadingInverseDark
          title="TRUSTED BY MILLIONS OF DEVELOPERS & THOUSANDS OF ENTERPRISE TEAMS"
          logos={logos}
          limit={5}
          inverse={false}
        />
      </Container>
    </section>
  );
};
export default HeroGradient;
