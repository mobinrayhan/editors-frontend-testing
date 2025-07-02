import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function SubscribeUs() {
  return (
    <section className="pt-10 pb-10 bg-light">
      <Container>
        <h2 className="text-center mb-3">
          নতুন কোর্স ও টিপসের জন্য সাবস্ক্রাইব করুন
        </h2>
        <p className="text-center mb-4">
          নতুন কোর্স, এক্সক্লুসিভ টিপস ও বিশেষ অফার সরাসরি আপনার ইনবক্সে পৌঁছে
          যাবে।
        </p>

        <Form>
          <Row className="justify-content-center g-2">
            <Col xs={12} md={8} lg={5}>
              <Form.Control
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="w-100"
                required
              />
            </Col>
            <Col xs={12} md="auto">
              <Button type="submit" variant="primary" className="w-100">
                সাবস্ক্রাইব করুন
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
}
