// import node module libraries
import React from 'react'
import { Col, Row } from 'react-bootstrap'

// import widget/custom components
import { GKLightbox } from 'widgets'

const ProductGallery = () => {
    return (
        <Row>
            <Col xs={12}>
                <div className="mb-4">
                    <GKLightbox image='/images/ecommerce/product-slide-1.jpg' />
                </div>
            </Col>
            <Col lg={6} xs={12}>
                <div className="mb-4"> <GKLightbox image='/images/ecommerce/product-slide-2.jpg' /></div>
            </Col>
            <Col lg={6} xs={12}>
                <div className="mb-4"> <GKLightbox image='/images/ecommerce/product-slide-3.jpg' /> </div>
            </Col>
            <Col lg={6} xs={12}>
                <div className="mb-4"> <GKLightbox image='/images/ecommerce/product-slide-4.jpg' /></div>
            </Col>
            <Col lg={6} xs={12}>
                <div className="mb-4"> <GKLightbox image='/images/ecommerce/product-slide-5.jpg' /> </div>
            </Col>
        </Row>
    )
}

export default ProductGallery