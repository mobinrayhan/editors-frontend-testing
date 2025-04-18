"use client";

// import node module libraries
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Col, Row, Card, Form, Button, Image } from "react-bootstrap";

const ForgetPassword = () => {
  const router = useRouter();
  const handelForgetPassword = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const phoneNumber = formData.get("phoneNumber");

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
                  src="/images/brand/logo/logo-icon.svg"
                  className="mb-4"
                  alt=""
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
                    name="phoneNumber"
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
