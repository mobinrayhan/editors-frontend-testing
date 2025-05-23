"use client";

import { settings } from "app.config";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const ForgetPassword = () => {
  const router = useRouter();
  const handelForgetPassword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const mobileNumber = formData.get("mobileNumber");

    router.push("/authentication/forget-password/verify");
  };
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col lg={5} md={5} className="py-8 py-xl-0">
        <Card>
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src={settings.theme.footer}
                  className="mb-4"
                  alt=""
                  width={50}
                  height={50}
                />
              </Link>
              <h1 className="mb-1 fw-bold">Forgot Password</h1>
              <span>Fill the form to reset your password.</span>
            </div>
            {/* Form */}
            <Form onSubmit={handelForgetPassword}>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  {/*  email */}
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    id="email"
                    placeholder="Enter your phone number"
                    required
                    name="mobileNumber"
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit">
                    Send Reset Code
                  </Button>
                </Col>
              </Row>
              <span>
                Return to <Link href="/authentication/sign-in">Sign in</Link>
              </span>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgetPassword;
