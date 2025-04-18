"use client";

import { settings } from "app.config";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const SignIn = () => {
  const isValidEmailOrPhone = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^01\d{9}$/;

    return emailRegex.test(input) || phoneRegex.test(input);
  };
  const handelSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const emailOrPhone = formData.get("emailOrPhone");
    const password = formData.get("password");

    const isVerify = isValidEmailOrPhone(emailOrPhone);
    console.log(isVerify);
  };
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col lg={5} md={5} className="py-8 py-xl-0">
        <Card>
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src={settings.theme.footer}
                  className="mb-4"
                  alt=""
                />
              </Link>
              <h1 className="mb-1 fw-bold">Sign in</h1>
              <span>
                Don’t have an account?{" "}
                <Link href="/authentication/sign-up" className="ms-1">
                  Sign up
                </Link>
              </span>
            </div>
            {/* Form */}
            <Form onSubmit={handelSignIn}>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  {/* Username or email */}
                  <Form.Label>Phone number </Form.Label>
                  <Form.Control
                    type="text"
                    id="email"
                    placeholder="Phone number "
                    required
                    name="emailOrPhone"
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  {/* Password */}
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="**************"
                    required
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  {/* Checkbox */}
                  <div className="d-md-flex justify-content-between align-items-center">
                    <Form.Group
                      className="mb-3 mb-md-0"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Link href="/authentication/forget-password">
                      Forgot your password?
                    </Link>
                  </div>
                </Col>
                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit">
                    Sign in
                  </Button>
                </Col>
              </Row>
            </Form>
            {/* <hr className="my-4" /> */}
            {/* social links */}
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

export default SignIn;
