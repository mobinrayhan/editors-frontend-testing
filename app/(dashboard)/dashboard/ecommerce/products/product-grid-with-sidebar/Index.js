'use client';

// import node module libraries
import React, { Fragment, useState } from 'react'
import { Card, Col, Form, Row, Breadcrumb, ButtonGroup } from 'react-bootstrap'

// import custom components
import ProductGridView from '../components/ProductGridView';

// import widget/custom components
import { RatingsBiIcon } from 'widgets';

// import utility file
import { getSlug } from 'helper/utils';

const ProductGridWithSidebar = () => {
    const [selected, setSelected] = useState(0)
    return (
        <Fragment>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="border-bottom pb-3 mb-3 ">
                        <div className="mb-2 mb-lg-0">
                            <h1 className="mb-1 h2 fw-bold">Product Grid </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Product Grid with Sidebar</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={6} lg={8} xl={9} xs={12}>
                    <ProductGridView />
                </Col>
                <Col md={6} lg={4} xl={3} xs={12}>
                    <Card className="card">
                        <Card.Header>
                            <h4 className="mb-0">Filters</h4>
                        </Card.Header>
                        <Card.Body>
                            {/* Gender */}
                            <h5 className="mb-3">Gender</h5>
                            {['Male', 'Female', 'Kids'].map(
                                (item, index) => (
                                    <Form.Check type="checkbox" className="mb-2" id={getSlug(item)} key={index} >
                                        <Form.Check.Input type="checkbox" />
                                        <Form.Check.Label>{item}</Form.Check.Label>
                                    </Form.Check>
                                )
                            )}
                        </Card.Body>
                        <Card.Body className="border-top">
                            <h5 className="mb-3">Category</h5>
                            {/* Category */}
                            {['All', 'Shoes', 'Bags', 'Glasses'].map(
                                (item, index) => (
                                    <Form.Check type="radio" className="mb-2" id={getSlug(item)} key={index} >
                                        <Form.Check.Input type="radio" name="categoryRadio" />
                                        <Form.Check.Label>{item}</Form.Check.Label>
                                    </Form.Check>
                                )
                            )}
                        </Card.Body>
                        <Card.Body className="border-top">
                            <h5 className="mb-3">Color</h5>
                            <div>
                                {/* Color */}
                                <ButtonGroup aria-label="Basic example">
                                    {['primary', 'success', 'danger', 'info', 'warning', 'dark'].map(
                                        (item, index) => (
                                            <Fragment key={index} >
                                                <Form.Check.Input className="btn-check" type="radio" name="colorRadio" id={getSlug(item)}
                                                    value={index}
                                                    checked={index === selected ? true : false}
                                                    onChange={(e) => console.log(e.target.value)}
                                                />
                                                <Form.Check.Label className={"btn btn-" + item + " rounded-circle me-2 btn-icon btn-xs border border-2 border-white shadow "}
                                                    onClick={() => setSelected(index)}>
                                                    <i className="fe fe-check icon-checked"></i>
                                                </Form.Check.Label>
                                            </Fragment>
                                        )
                                    )}
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                        <Card.Body className="border-top">
                            <h5 className="mb-3">Rating</h5>
                            {/* Rating */}
                            <div>
                                {[5, 4, 3, 2, 1].map((item, index) => (
                                    <Form.Check
                                        type="radio"
                                        id={`productRating${item}`}
                                        className="mb-1"
                                        key={index}
                                    >
                                        <Form.Check.Input type="radio" name="ratingRadio" />
                                        <Form.Check.Label>
                                            <span className="text-warning">
                                                <RatingsBiIcon rating={item} />
                                            </span>{' '}
                                            {parseInt(item) !== 5 && <span className="fs-6 pt-1">{item} & UP</span>}
                                        </Form.Check.Label>
                                    </Form.Check>
                                ))}
                            </div>
                        </Card.Body>
                        <Card.Body className="border-top">
                            <h5 className="mb-3">Price</h5>
                            <div>
                                {/* Price  */}
                                {['$25 to $75', '$75 to $175', '$175 to $299', '$300 to $499'].map(
                                    (item, index) => (
                                        <Form.Check type="checkbox" className="mb-2" id={getSlug(item)} key={index} >
                                            <Form.Check.Input type="checkbox" />
                                            <Form.Check.Label>{item}</Form.Check.Label>
                                        </Form.Check>
                                    )
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProductGridWithSidebar