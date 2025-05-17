// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ModalVideo from "react-modal-video";

const LearnLatestSkills = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");

  return (
    <section className="py-lg-10 py-6 bg-gray-100">
      <Container>
        <Row>
          <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
            <Row className="align-items-center">
              <Col lg={5} md={12} xs={12}>
                <div className="mb-5 mb-lg-0">
                  <h2 className="display-4 fw-bold mb-3">
                    Learn latest Skills; Advance{" "}
                    <u className="text-warning">
                      <span className="text-primary">your career</span>
                    </u>
                  </h2>
                  <p className="mb-5 lead">
                    Donec sit quam lacinia et sed et. Lectus in pellent esque
                    sed a eget mauris. Tincidunt tincidunt sit quisque orci
                    turpis nulla velit.
                  </p>
                  <Link href="#!" className="btn btn-outline-secondary">
                    Get Started
                  </Link>
                </div>
              </Col>
              <Col lg={{ span: 6, offset: 1 }} md={12} xs={12}>
                <div
                  className="d-flex justify-content-center position-relative rounded py-17 border-gray-100 border border-4 rounded-3 bg-cover"
                  style={{
                    backgroundImage: `url(${"/images/education/edu-video-img.jpg"})`,
                  }}
                >
                  <Link
                    className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
                    href="#"
                    scroll={false}
                    onClick={() => setOpen(true)}
                  >
                    <i className="fe fe-play"></i>
                  </Link>
                </div>

                {/* video popup */}
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={YouTubeURL}
                  onClose={() => setOpen(false)}
                />
                {/* end of video popup */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LearnLatestSkills;
