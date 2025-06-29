"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function PurchaseCanceledMain() {
  const searchParams = useSearchParams();
  const sslCancelId = searchParams.get("ssl_cancel_id");

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
          <Card className="text-center shadow p-4 border-warning">
            <Card.Body>
              <h1 className="mb-4 text-warning">⚠️ Purchase Canceled</h1>
              <Card.Text className="fs-5">
                Your payment was canceled before completion.
              </Card.Text>
              <Card.Text className="mt-2">
                If this was a mistake, you can try purchasing again at any time.
              </Card.Text>
              <Button variant="warning" className="mt-4" href="/courses">
                Back to Courses
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default function PurchaseCanceled() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PurchaseCanceledMain />
    </Suspense>
  );
}
