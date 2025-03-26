// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKLightbox } from 'widgets';

export const ImageGrid4 = () => {
    const images = [
        { image: '/images/job/jpg/job-gallery-img-1.jpg' },
        { image: '/images/job/jpg/job-gallery-img-2.jpg' },
        { image: '/images/job/jpg/job-gallery-img-3.jpg' },
        { image: '/images/job/jpg/job-gallery-img-4.jpg' },
        { image: '/images/job/jpg/job-gallery-img-5.jpg' },
        { image: '/images/job/jpg/job-gallery-img-6.jpg' },
        { image: '/images/job/jpg/job-gallery-img-7.jpg' },
        { image: '/images/job/jpg/job-gallery-img-8.jpg' }
    ]
    return (
        <Row className="mt-6">
            {images.map((item, index) => {
                return (
                    <Col lg={3} md={4} xs={12} key={index}>
                        <div className="mb-4">
                            <GKLightbox image={item.image} />
                        </div>
                    </Col>
                )
            })}
        </Row>
    );
}

export const ImageGrid4Code = `
// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKLightbox } from 'widgets';

export const ImageGrid4Example = () => {
    const images = [
        { image: '/images/job/jpg/job-gallery-img-1.jpg' },
        { image: '/images/job/jpg/job-gallery-img-2.jpg' },
        { image: '/images/job/jpg/job-gallery-img-3.jpg' },
        { image: '/images/job/jpg/job-gallery-img-4.jpg' },
        { image: '/images/job/jpg/job-gallery-img-5.jpg' },
        { image: '/images/job/jpg/job-gallery-img-6.jpg' },
        { image: '/images/job/jpg/job-gallery-img-7.jpg' },
        { image: '/images/job/jpg/job-gallery-img-8.jpg' }
    ]
    return (
        <Row className="mt-6">
            {images.map((item, index) => {
                return (
                    <Col lg={3} md={4} xs={12} key={index}>
                        <div className="mb-4">
                            <GKLightbox image={item.image} />
                        </div>
                    </Col>
                )
            })}
        </Row>
    );
}`.trim();