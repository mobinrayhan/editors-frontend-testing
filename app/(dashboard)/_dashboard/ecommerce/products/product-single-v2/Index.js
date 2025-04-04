'use client';

// import node module libraries
import React, { Fragment } from 'react'
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link';

// import custom components
import ProductBriefInfo from '../components/ProductBriefInfo';
import ProductDetailsAccordion from '../components/ProductDetailsAccordion';
import ProductGallery2 from '../components/ProductGallery2';
import RatingsReviews from '../components/RatingsReviews';

const ProductSingleV2 = () => {
    return (
        <Fragment>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
                        <div className="mb-2 mb-lg-0">
                            <h1 className="mb-0 h2 fw-bold"> Products</h1>
                            <Breadcrumb>
                                <Breadcrumb.Item to="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item to="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Products Details</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <Link href="/dashboard/ecommerce/products/add-product" className="btn btn-primary me-2">Add Product</Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Card>
                <Card.Body className="p-5">
                    <Row>
                        <Col lg={6} xs={12}>
                            <ProductGallery2 />
                        </Col>
                        <Col lg={6} xs={12}>
                            <div className="my-5 mx-lg-10">

                                {/* Product's brief information */}
                                <ProductBriefInfo />

                                <hr className="mt-4 mb-2" />

                                {/* Product Details in Accordion */}
                                <ProductDetailsAccordion />

                                {/* Product's Review */}
                                <RatingsReviews />

                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default ProductSingleV2