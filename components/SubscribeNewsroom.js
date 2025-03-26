// import node module libraries
import { Col, Row, Container, Form, Button } from 'react-bootstrap';

const SubscribeNewsroom = ({ title, description, headingclassName = 'display-2' }) => {
    return (
        <section className="pt-9 pb-9 bg-white">
            <Container>
                <Row>
                    <Col
                        xl={{ offset: 2, span: 8 }}
                        lg={{ offset: 1, span: 10 }}
                        md={12}
                        sm={12}
                    >
                        <div className="text-center mb-5">
                            <h1 className={"fw-bold " + headingclassName}>{title}</h1>
                            <p className=" lead">{description}</p>
                        </div>
                        {/*  Form */}
                        <Form className="row px-md-20">
                            <Form.Group
                                className="mb-3 col ps-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group
                                className="mb-3 col-auto ps-0"
                                controlId="formSubmitButton"
                            >
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SubscribeNewsroom