// import node module libraries
import { Col, Row } from 'react-bootstrap';

// Here argument images required 0-6 images that will generate collage gallery with fixed format
const HeroCollageGallery = ({ images }) => {
    return (
        <Row>
            <Col md={4} xs={4} className="px-1">
                <div
                    className="bg-cover rounded-3 mb-2 h-12rem"
                    style={{ backgroundImage: `url('${images[0]}')` }}
                ></div>
                <div
                    className="bg-cover rounded-3 mb-2 h-18rem"
                    style={{ backgroundImage: `url('${images[1]}')` }}
                ></div>
            </Col>
            <Col md={4} xs={4} className="px-1">
                <div
                    className="bg-cover rounded-3 mb-2 h-18rem"
                    style={{ backgroundImage: `url('${images[2]}')` }}
                ></div>
                <div
                    className="bg-cover rounded-3 mb-2 h-18rem"
                    style={{ backgroundImage: `url('${images[3]}')` }}
                ></div>
            </Col>
            <Col md={4} xs={4} className="px-1">
                <div
                    className="bg-cover rounded-3 mb-2 h-13rem"
                    style={{ backgroundImage: `url('${images[4]}')` }}
                ></div>
                <div
                    className="bg-cover rounded-3 mb-2 h-13rem"
                    style={{ backgroundImage: `url('${images[5]}')` }}
                ></div>
                <div
                    className="bg-cover rounded-3 mb-2 h-13rem"
                    style={{ backgroundImage: `url('${images[6]}')` }}
                ></div>
            </Col>
        </Row>
    )
}

export default HeroCollageGallery