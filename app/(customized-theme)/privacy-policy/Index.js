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
                <h1 className="display-3 fw-bold">Privacy Policy</h1>
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
              <h1 className="fw-bold mb-3">Information We Collect</h1>

              <p className="fs-4 mb-4">
                We may collect the following types of personal information:
                Personal Details: Name, email address, contact information.
                Account Data: Login credentials and course activity. Payment
                Details: Billing information via secure third-party payment
                gateways. Usage Data: Pages visited, time spent on the site, and
                other analytics. We only collect data that is necessary to
                provide you with our services and improve your experience.
              </p>

              <p className="mb-1 fs-4">
                <span className="text-dark fw-semi-bold">Email: </span>
                hello@geeksui.com
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
                  <h3 className="fw-bold">How We Use Your Information</h3>
                  <p className="fs-4">
                    We use your data to: Process transactions and provide course
                    access. Send you updates, receipts, or service
                    announcements. Respond to customer support inquiries.
                    Analyze trends to improve the website and course content.
                    Ensure compliance with our Terms of Use and applicable laws.
                    We do not sell or rent your data to third parties.{" "}
                  </p>
                </div>
              </div>
              {/* para */}
              <div className="d-flex mt-3">
                <div className="">
                  <h3 className="fw-bold">B</h3>
                </div>
                <div className="ms-3">
                  <h3 className="fw-bold">Cookies and Tracking</h3>
                  <p className="fs-4">
                    We use cookies and similar tracking technologies to:
                    Remember your preferences. Authenticate logins. Understand
                    site usage through analytics tools like Google Analytics.
                    You may disable cookies through your browser settings,
                    though some site features may not function properly.{" "}
                  </p>
                </div>
              </div>
              {/* para */}
              <div className="mt-5">
                <h2 className="fw-bold">Changes to This Policy</h2>
                <p className="fs-4">
                  We may update this Privacy Policy periodically. All changes
                  will be posted on this page with a revised “Effective Date.”
                  If the changes are significant, we will notify registered
                  users via email.{" "}
                </p>
                {/* list */}
                {/* <ul className="fs-4">
                  <li>More than 60+ components</li>
                  <li>Five ready tests</li>
                  <li>Coming soon page</li>
                  <li>Check list with left icon</li>
                  <li>And much more ...</li>
                </ul> */}
              </div>
              {/* para */}
              <div className="mt-5">
                <h2 className="fw-bold">Contact Us</h2>
                <p className="fs-4">
                  Geeks ui takes the privacy of its users very seriously. For
                  the current our Privacy Policy, please click{" "}
                  <Link href="#">here</Link>.
                </p>
                <p className="mb-6 fs-4">
                  If you have any questions or concerns about this Privacy
                  Policy, you can contact us at: 📧 Email:
                  contact@editors.academy 🌐 Website: https://editors.academy{" "}
                </p>
                <h2 className="fw-bold">Changes about terms</h2>
                <p className="fs-4">
                  If we change our terms of use we will post those changes on
                  this page. Registered users will be sent an email that
                  outlines changes made to the terms of use.
                </p>
                <p className="fs-4">
                  Questions? Please email us at{" "}
                  <Link href="#">contact@editors.academy</Link>
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
