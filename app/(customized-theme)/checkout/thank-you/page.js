"use client";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function ThankYouHome() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const validId = searchParams.get("valid_id");

  useEffect(() => {
    if (success && validId) {
      localStorage.removeItem("cartItem");
    } else {
      notFound();
    }
  }, [success, validId]);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="text-center shadow p-4">
            <Card.Body>
              <h1 className="mb-4 text-success">🎉 Thank You!</h1>
              <Card.Text className="fs-5">
                Your purchase was successful. <br />
                We're thrilled to have you on board!
              </Card.Text>
              <Card.Text className="mt-3">
                Get ready to dive into your course and start learning right
                away. We hope you enjoy every step of the journey.
              </Card.Text>
              <Button variant="primary" className="mt-4" href="/courses">
                Go to My Courses
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
