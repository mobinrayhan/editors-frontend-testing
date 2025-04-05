"use client";

import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { Col, Row, Card, Form, Button } from "react-bootstrap";

const Verify = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const phoneNumber = formData.get("otp");
    const isValid = isValidNumber(phoneNumber);
    // console.log(phoneNumber, isValid);
    e.target.reset();
  };
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col lg={5} md={5} className="py-8 py-xl-0">
        <Card>
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/brand/logo/logo-icon.svg"
                  className="mb-4"
                  alt=""
                  width={50}
                  height={50}
                />
              </Link>
              <h1 className="mb-1 fw-bold">Verify your account</h1>
              <span>
                Already have an account?{" "}
                <Link href="/authentication/sign-in" className="ms-1">
                  Sign in
                </Link>
              </span>
            </div>
            {/* Form */}
            <Form onSubmit={handelSubmit}>
              <Row>
                {/* phone number */}
                <Col lg={12} md={12} className="mb-3">
                  <Form.Label>Verification code</Form.Label>
                  <Form.Control
                    type="number"
                    id="username"
                    placeholder="OTP code"
                    required
                    name="otp"
                  />
                </Col>
                {/* User Name */}
                {/* <Col lg={12} md={12} className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="username"
                    placeholder="User Name"
                    required
                  />
                </Col> */}
                {/* email */}
                {/* <Col lg={12} md={12} className="mb-3">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Email address here"
                    required
                  />
                </Col> */}
                {/* Password */}
                {/* <Col lg={12} md={12} className="mb-3">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="**************"
                    required
                  />
                </Col> */}
                {/* Checkbox */}
                {/* <Col lg={12} md={12} className="mb-3">
                  <Form.Check type="checkbox" id="check-api-checkbox">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                      I agree to the{" "}
                      <Link href="/marketing/terms-and-conditions/">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/marketing/terms-and-conditions/">
                        Privacy Policy.
                      </Link>
                    </Form.Check.Label>
                  </Form.Check>
                </Col> */}
                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit">
                    Verify
                  </Button>
                </Col>
              </Row>
            </Form>
            {/* <hr className="my-4" /> */}
            {/* <div className="mt-4 text-center">
						
							<Link href="#" className="btn-social btn-social-outline btn-facebook">
								<i className="fab fa-facebook"></i>
							</Link>{' '}
					
							<Link href="#" className="btn-social btn-social-outline btn-twitter">
								<i className="fab fa-twitter"></i>
							</Link>{' '}
						
							<Link href="#" className="btn-social btn-social-outline btn-linkedin">
								<i className="fab fa-linkedin"></i>
							</Link>{' '}
						
							<Link href="#" className="btn-social btn-social-outline btn-github">
								<i className="fab fa-github"></i>
							</Link>
						</div> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Verify;
