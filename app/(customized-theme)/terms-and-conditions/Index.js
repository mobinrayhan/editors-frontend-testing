"use client";

// import node module libraries
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function TermsAndConditions() {
  return (
    <main>
      {/* pageheader */}
      <section className="py-10 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12} sm={12}>
              {/* text center */}
              <div className="text-center">
                {/* logo */}
                <Image
                  className="mb-4"
                  alt="logo"
                  src="/images/brand/logo/logo-icon.svg"
                  width={50}
                  height={50}
                />
                <h1 className="display-3 fw-bold">Terms & Conditions</h1>
                <p className="lead px-8">
                  Read our terms below to learn more about your rights and
                  responsibilities as a Product Name user.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* content */}
      <section className="pb-10 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12} sm={12}>
              {/* date */}
              <div className="py-3 mb-5 border-bottom">
                <h3>
                  Effective date:{" "}
                  <span className="text-primary">5th of March, 2025</span>
                </h3>
              </div>
              {/* heading */}
              {/* <h1 className="fw-bold mb-3">
                This is a H1, Perfect&apos;s for titles.
              </h1> */}

              <p className="fs-4 mb-4">
                Welcome to Editors academy! These Terms and Conditions ("Terms")
                govern your use of our website and services, including the
                purchase and participation in our online courses. By accessing
                or using our website, you agree to be bound by these Terms. If
                you do not agree, please do not use our services.
              </p>

              <p className="mb-1 fs-4">
                <span className="text-dark fw-semi-bold">Email: </span>
                contact@editors.academy
              </p>

              <p className="mb-1 fs-4">
                <span className="text-dark fw-semi-bold">Address: </span>52,
                Komal Villas, Mansarovar Vadodara - 374321
              </p>

              <div className="d-flex mt-5">
                <div className="">
                  <h3 className="fw-bold">A</h3>
                </div>
                <div className="ms-3">
                  <h3 className="fw-bold">
                    {/* This is a H3&apos;s perfect for the titles. */}
                    Use of the Website
                  </h3>
                  <p className="fs-4">
                    You must be at least 12 years old or have parental consent
                    to use this website. You agree to use the site only for
                    lawful purposes and not to engage in any activity that may
                    harm the website or other users.{" "}
                  </p>
                </div>
              </div>
              {/* para */}
              <div className="d-flex mt-3">
                <div className="">
                  <h3 className="fw-bold">B</h3>
                </div>
                <div className="ms-3">
                  <h3 className="fw-bold">
                    {/* This is a H3&apos;s perfect for the titles. */}
                    Account Registration
                  </h3>
                  <p className="fs-4">
                    To access certain features, you may be required to create an
                    account. You are responsible for maintaining the
                    confidentiality of your account and password and for all
                    activities that occur under your account.
                  </p>
                </div>
              </div>
              {/* para */}
              <div className="mt-5">
                <h2 className="fw-bold">
                  {/* This is a H2&apos;s perfect for the titles. */}
                  Course Enrollment and Access
                </h2>
                <p className="fs-4">
                  Upon purchase, you will be granted access to the course
                  content for the duration specified on the course page. Course
                  materials are for personal, non-commercial use only. Sharing
                  or reselling your access or course content is strictly
                  prohibited.{" "}
                </p>
                {/* list */}
                <ul className="fs-4">
                  <li>More than 60+ components</li>
                  <li>Five ready tests</li>
                  <li>Coming soon page</li>
                  <li>Check list with left icon</li>
                  <li>And much more ...</li>
                </ul>
              </div>
              {/* para */}
              <div className="mt-5">
                <h2 className="fw-bold">
                  This is a H2&apos;s perfect for the titles.
                </h2>
                <p className="fs-4">
                  Geeks ui takes the privacy of its users very seriously. For
                  the current our Privacy Policy, please click{" "}
                  <Link href="#">here</Link>.
                </p>
                <p className="mb-6 fs-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  cursus, mi quis viverra ornare, eros pain, sometimes none at
                  all, freedom of the living creature was as the profit and
                  financial security. Jasmine neck adapter and just running it
                  lorem makeup hairstyle. Now sad smile of the television set.
                </p>
                <h2 className="fw-bold">Changes about terms</h2>
                <p className="fs-4">
                  If we change our terms of use we will post those changes on
                  this page. Registered users will be sent an email that
                  outlines changes made to the terms of use.
                </p>
                <p className="fs-4">
                  Questions? Please email us at{" "}
                  <Link href="#">hello@example.com</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default TermsAndConditions;
