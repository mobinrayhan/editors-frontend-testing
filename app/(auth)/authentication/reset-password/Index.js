"use client";

import { resetPassword } from "actions/userAction";
import { settings } from "app.config";
import { isValidHashToken } from "helper/utils";
import Image from "next/image";
// import node module libraries
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const otpToken = searchParams.get("otpToken");
  const mobileNumber = searchParams.get("mobileNumber");

  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    resetPassword,
    initialState
  );
  const [showPassword, setShowPassword] = useState(false);

  if (!isValidHashToken(otpToken)) {
    return notFound();
  }

  if (!state?.isValid && state?.success === false) {
    router.push("/authentication/forget-password");
  }

  if (state?.isValid && state?.success) {
    router.push("/authentication/sign-in");
  }

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
              <h1 className="mb-1 fw-bold">Confirm Password</h1>
            </div>
            {/* Form */}
            <Form action={formAction}>
              <Row>
                <Col lg={12} md={12} className="mb-3">
                  {/* Password */}
                  <Form.Label>New Password </Form.Label>
                  <InputGroup>
                    <Form.Control
                      disabled={pending}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="**************"
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
                <Col lg={12} md={12} className="mb-3">
                  {/* Password */}
                  <Form.Label>Confirm New Password </Form.Label>
                  <InputGroup>
                    <Form.Control
                      disabled={pending}
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="password"
                      placeholder="**************"
                      required
                    />

                    <input type="hidden" name="otpToke" value={otpToken} />
                    <input
                      type="hidden"
                      name="mobileNumber"
                      value={mobileNumber}
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
                <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                  <Button variant="primary" type="submit" disabled={pending}>
                    {pending ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      "Change Password"
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

export default function ResetPasswordComponent() {
  return (
    <Suspense fallback={<p>Loading..</p>}>
      <ResetPassword />
    </Suspense>
  );
}
