// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// Here argument images required 0-12 images that will generate collage gallery with fixed format
const CollageGallery = ({ images }) => {
    return (
        <section className="pt-5 bg-white">
            <Container fluid className="px-md-5">
                <Row>
                    <Col lg={6} xs={12} className="d-none d-lg-block ">
                        <Row>
                            <Col md={4} xs={4} className="px-1">
                                <div
                                    className="bg-cover rounded-3 mb-2 h-20rem"
                                    style={{ backgroundImage: `url('${images[0]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2 h-18rem"
                                    style={{ backgroundImage: `url('${images[1]}')` }}
                                ></div>
                            </Col>
                            <Col md={4} xs={4} className="px-1">
                                <div
                                    className="bg-cover rounded-3 mb-2 h-16rem"
                                    style={{ backgroundImage: `url('${images[2]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2 h-17rem"
                                    style={{ backgroundImage: `url('${images[3]}')` }}
                                ></div>
                            </Col>
                            <Col md={4} xs={4} className="px-1">
                                <div
                                    className="bg-cover rounded-3 mb-2 h-20rem"
                                    style={{ backgroundImage: `url('${images[4]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2 h-19rem"
                                    style={{ backgroundImage: `url('${images[5]}')` }}
                                ></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} xs={12}>
                        <Row>
                            <Col lg={4} xs={4} className="px-1">
                                <div
                                    className="bg-cover rounded-3 mb-2 h-14rem"
                                    style={{ backgroundImage: `url('${images[6]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2 h-22rem"
                                    style={{ backgroundImage: `url('${images[7]}')` }}
                                ></div>
                            </Col>
                            <Col lg={4} xs={4} className="px-1">
                                <div
                                    className="bg-cover rounded-3 mb-2  h-22rem"
                                    style={{ backgroundImage: `url('${images[8]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2  h-24rem"
                                    style={{ backgroundImage: `url('${images[9]}')` }}
                                ></div>
                            </Col>
                            <Col lg={4} xs={4} className="px-1">
                                <div
                                    className="bg-cover rounded-3 mb-2  h-14rem"
                                    style={{ backgroundImage: `url('${images[10]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2  h-16rem"
                                    style={{ backgroundImage: `url('${images[11]}')` }}
                                ></div>
                                <div
                                    className="bg-cover rounded-3 mb-2  h-20rem"
                                    style={{ backgroundImage: `url('${images[12]}')` }}
                                ></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CollageGallery;
