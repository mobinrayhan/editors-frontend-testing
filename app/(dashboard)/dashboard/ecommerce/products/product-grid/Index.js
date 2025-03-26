'use client';

// import node module libraries
import React, { Fragment } from 'react'
import { Row, Col, Breadcrumb } from 'react-bootstrap';

// import custom components
import ProductGridView from '../components/ProductGridView';

const ProductGrid = () => {
    return (
        <Fragment>
            <Row>
                <Col lg={12} md={12} xl={12}>
                    {/* Page header */}
                    <div className="border-bottom pb-3 mb-3 ">
                        <div className="mb-2 mb-lg-0">
                            <h1 className="mb-1 h2 fw-bold">Product Grid </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Product Grid</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </Col>
            </Row>

            <ProductGridView />

        </Fragment>
    )
}

export default ProductGrid