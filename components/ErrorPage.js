import { Container, Row, Col, Button } from "react-bootstrap";

export default function ErrorPage() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        // backgroundColor: "#fff",
      }}
    >
      <Container className="text-center">
        <p className="text-primary fw-semibold" style={{ fontSize: "30px" }}>
          404
        </p>
        <h1 className="mt-4 display-1 fw-semibold text-dark">Not found</h1>
        <p className="mt-4 fs-5 text-secondary">
          Sorry, we couldn’t find the data you’re looking for.
        </p>
        {/* <div className="mt-5 d-flex justify-content-center gap-3">
          <Button href="/" variant="primary">
            Go back home
          </Button>
          <Button href="/contact" variant="outline-dark">
            Contact support →
          </Button>
        </div> */}
      </Container>
    </main>
  );
}
