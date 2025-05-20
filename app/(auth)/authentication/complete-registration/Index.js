"use client";

import { verifyAccount } from "actions/userAction";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const initialState = {
  message: "",
  success: null,
};

const Verify = () => {
  const [state, formAction, pending] = useActionState(
    verifyAccount,
    initialState
  );

  const inputRefs = useRef([]);
  const cellArray = new Array(6).fill("");
  const [otp, setOtp] = useState(cellArray);
  const searchParams = useSearchParams();
  const otpToken = searchParams.get("otpToken");

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
      newOtp[index] = ""; // Clear the current input value
      setOtp(newOtp);
      inputRefs.current[index - 1].focus();
    }
  };

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
                <input type="hidden" name="otpToken" value={otpToken} />

                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  {/* Button */}
                  <Button variant="primary" type="submit">
                    Verify
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Verify;
