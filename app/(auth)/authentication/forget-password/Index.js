"use client";

import { forgetPassword } from "actions/userAction";
import { settings } from "app.config";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";

const initialState = {
  message: "",
  success: null,
};
const ForgetPassword = () => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    forgetPassword,
    initialState
  );

  if (state?.otpToken && state?.success) {
    router.push(
      `/authentication/verify?otpToken=${state.otpToken}&mode=${state?.mode}`
    );
  }

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
            <Form action={formAction}>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  {/*  email */}
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    disabled={pending}
                    type="number"
                    id="email"
                    placeholder="Enter your phone number"
                    required
                    name="mobileNumber"
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit" disabled={pending}>
                    {pending ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Send Reset Code"
                    )}
                  </Button>
                </Col>
              </Row>
              <span>
                Return to{" "}
                <Link
                  href="/authentication/sign-in"
                  style={{
                    pointerEvents: pending ? "none" : "all",
                  }}
                >
                  Sign in
                </Link>
              </span>

              {state?.success === false ? (
                <p className="text-center pt-1 text-danger">{state?.message}</p>
              ) : (
                ""
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgetPassword;
