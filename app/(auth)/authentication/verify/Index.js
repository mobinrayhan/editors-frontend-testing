"use client";

import { verifyAccount } from "actions/userAction";
import { isValidHashToken, setClientCookie } from "helper/utils";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useActionState, useRef, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";

const initialState = {
  message: "",
  success: null,
};

const VerifyMainComponent = () => {
  const searchParams = useSearchParams();
  const otpToken = searchParams.get("otpToken");
  const mode = searchParams.get("mode");

  const [state, formAction, pending] = useActionState(
    verifyAccount,
    initialState
  );

  const inputRefs = useRef([]);
  const cellArray = new Array(6).fill("");
  const [otp, setOtp] = useState(cellArray);
  const router = useRouter();

  if (
    !isValidHashToken(otpToken) &&
    (mode !== "registration" || mode !== "password-reset")
  ) {
    return notFound();
  }

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

  if (state?.existingUser) {
    setClientCookie("userSessionToken", state?.existingUser?.sessionToken);
    router.push("/");
  }

  if (
    state?.userNumber &&
    state?.isValid &&
    state?.otpToken &&
    state?.mode === "registration"
  ) {
    router.push(
      `/authentication/complete-registration?otpToken=${state.otpToken}&mobileNumber=${state.userNumber}`
    );
  }

  if (
    state?.userNumber &&
    state?.isValid &&
    state?.otpToken &&
    state?.mode === "password-reset"
  ) {
    router.push(
      `/authentication/reset-password?otpToken=${state.otpToken}&mobileNumber=${state.userNumber}`
    );
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
              <h1 className="mb-1 fw-bold">Verify your account</h1>
              <span>
                Already have an account?{" "}
                <Link href="/authentication/sign-in" className="ms-1">
                  Sign in
                </Link>
              </span>
            </div>
            {/* Form */}
            <Form action={formAction}>
              <Row className="justify-content-center">
                {/* otp */}
                {otp.map((_, index) => (
                  <Col key={index}>
                    <Form.Control
                      value={otp[index] || ""}
                      type="number"
                      required
                      maxLength={1}
                      className="mb-5 text-center"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  </Col>
                ))}
                <input
                  type="hidden"
                  name="otpCode"
                  value={+otp.join(",").replace(/,/g, "")}
                />
                <input type="hidden" name="mode" value={mode} />
                <input type="hidden" name="otpToken" value={otpToken} />
                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit">
                    {pending ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Verify"
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

export default function Verify() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerifyMainComponent />
    </Suspense>
  );
}
