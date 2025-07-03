"use client";

import { createUser } from "actions/userAction";
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

const SignUp = () => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(createUser, initialState);

  if (state?.otpToken && !state?.isVerified) {
    router.push(
      `/authentication/verify?otpToken=${state.otpToken}&mode=${state.mode}`
    );
  }

  if (state?.otpToken && state?.isVerified) {
    router.push(
      `/authentication/complete-registration?otpToken=${state.otpToken}&userNumber${state.userNumber}`
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
                  alt={"Editors Academy Logo"}
                  src={settings.theme.logo}
                  style={{ cursor: "pointer", objectFit: "contain" }}
                  height={40}
                  width={150}
                />
              </Link>
              <h1 className="mb-1 fw-bold">Sign up</h1>
              <span>
                Already have an account?{" "}
                <Link href="/authentication/sign-in" className="ms-1">
                  Sign in
                </Link>
              </span>
            </div>
            {/* Form */}
            <Form action={formAction}>
              <Row>
                {/* phone number */}
                <Col lg={12} md={12} className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    disabled={pending}
                    type="number"
                    id="username"
                    placeholder="Your Number"
                    required
                    name="number"
                  />
                </Col>

                <Col lg={12} md={12} className="mb-3">
                  {/* Checkbox */}
                  <Form.Check required type="checkbox" id="check-api-checkbox">
                    <Form.Check.Input
                      type="checkbox"
                      disabled={pending}
                      defaultChecked
                    />
                    <Form.Check.Label>
                      I agree to the{" "}
                      <Link href="/terms-and-conditions">Terms of Service</Link>{" "}
                      and <Link href="/privacy-policy">Privacy Policy.</Link>
                    </Form.Check.Label>
                  </Form.Check>
                </Col>
                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  <Button variant="primary" type="submit" disabled={pending}>
                    {pending ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Col>
                {state?.success === false ? (
                  <p className="text-center pt-1 text-danger">
                    {state?.message}
                  </p>
                ) : (
                  ""
                )}
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
