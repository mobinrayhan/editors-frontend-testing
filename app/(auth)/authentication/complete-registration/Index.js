"use client";

import { completeRegistration } from "actions/userAction";
import { isValidHashToken, isValidNumber } from "helper/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useActionState, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const initialState = {
  message: "",
  success: null,
};

const CompleteRegistrationMain = () => {
  const searchParams = useSearchParams();
  const mobileNumber = searchParams.get("mobileNumber");
  const otpCode = searchParams.get("otpCode");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    completeRegistration,
    initialState
  );

  if (!isValidHashToken(otpCode) || !isValidNumber(mobileNumber)) {
    return notFound();
  }

  if (!state?.isValid && state?.success) {
    router.push(`/authentication/sign-up`);
  }

  if (state?.success && typeof state?.userId === "number") {
    router.push(`/`);
  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col lg={6} md={6} className="py-8 py-xl-0">
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
              <h1 className="mb-1 fw-bold">Complete Registration</h1>
            </div>
            {/* Form */}
            <Form action={formAction}>
              <Row className="d-grid">
                <Col>
                  Name :
                  <Form.Control
                    disabled={pending}
                    type="text"
                    name="name"
                    required
                    className="mb-3 mt-1"
                    placeholder="Enter Your Name"
                  />
                </Col>
                <Col>
                  E-mail :
                  <Form.Control
                    disabled={pending}
                    type="email"
                    name="email"
                    required
                    className="mb-3 mt-1"
                    placeholder="Enter Your Email"
                  />
                </Col>
                <Col>
                  Password :
                  <InputGroup className="mb-3 mt-1">
                    <Form.Control
                      disabled={pending}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={pending}
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeSlash size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </Button>
                  </InputGroup>
                </Col>
                <input type="hidden" name="mobileNumber" value={mobileNumber} />

                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit" disabled={pending}>
                    {pending ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Complete Registration"
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

export default function CompleteRegistration() {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <CompleteRegistrationMain />
    </Suspense>
  );
}
