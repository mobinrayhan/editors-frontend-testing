"use client";

import { notFound, useSearchParams } from "next/navigation";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function PurchaseFailed() {
  const searchParams = useSearchParams();
  const sslCancelId = searchParams.get("ssl_failed_id");

  if (!sslCancelId) {
    notFound();
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="text-center shadow p-4 border-danger">
            <Card.Body>
              <h1 className="mb-4 text-danger">❌ Payment Failed</h1>
              <Card.Text className="fs-5">
                Something went wrong during the payment process.
              </Card.Text>
              <Card.Text className="mt-2">
                Please try again or contact support if the issue continues.
              </Card.Text>
              <Button variant="danger" className="mt-4" href="/checkout">
                Try Again
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
