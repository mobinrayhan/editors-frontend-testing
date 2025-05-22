"use client";

import { loginUser } from "actions/userAction";
import { settings } from "app.config";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { useActionState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";

const initialState = {
  message: "",
  success: null,
};

const SignIn = () => {
  const [state, formAction, pending] = useActionState(loginUser, initialState);

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
            <Form action={formAction}>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  {/* Username or email */}
                  <Form.Label>Phone number </Form.Label>
                  <Form.Control
                    disabled={pending}
                    type="text"
                    id="phone"
                    placeholder="Phone number "
                    required
                    name="mobileNumber"
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3">
                  {/* Password */}
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    disabled={pending}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="**************"
                    required
                  />
                </Col>
                <Col lg={12} md={12} className="mb-3">
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
                  <Button variant="primary" type="submit" disabled={pending}>
                    {pending ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </Col>
              </Row>
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

export default SignIn;
