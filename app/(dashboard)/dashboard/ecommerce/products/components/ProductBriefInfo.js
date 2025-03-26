// import node module libraries
import React, { Fragment, useState } from 'react'
import { ButtonGroup, Col, Row, Form } from 'react-bootstrap'
import Link from 'next/link';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import utility file
import { getSlug } from 'helper/utils';

const ProductBriefInfo = () => {
    const [selected, setSelected] = useState(0)
    const [selectedSize, setSelectedSize] = useState(0);
    return (
        <Fragment>
            <div>
                <h1>White Adidas Low-Top Sneakers</h1>
                <div>
                    <span><span className="me-1 text-dark fw-semibold">4.4 <Icon path={mdiStar} size={0.6} className="text-success" />
                    </span>592 Customer Reviews</span>
                </div>
            </div>
            <hr className="my-3" />
            <div className="mb-5">
                <h4 className="mb-1">$49.00 <span className="text-muted text-decoration-line-through">$ 69.00</span> <span className="text-warning">(45% OFF)</span></h4>
                <span>inclusive of all taxes</span>
            </div>
            <div className="mb-4 d-md-flex justify-content-between align-items-center">
                <h5 className="mb-2 mb-md-0">Color</h5>
                <div>
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
            </div>
            <div className="mb-6 d-md-flex justify-content-between align-items-center">
                {/* size */}
                <h5 className="mb-2 mb-md-0">Select Size</h5>
                <div>
                    <ButtonGroup aria-label="Basic example">
                        {[6, 7, 8, 9, 10, 11].map(
                            (item, index) => (
                                <Fragment key={index} >
                                    <Form.Check.Input className="btn-check" type="radio" name="sizeRadio" id={"size_radio_" + item}
                                        value={index}
                                        checked={index === selectedSize ? true : false}
                                        onChange={(e) => console.log(e.target.value)}
                                    />
                                    <Form.Check.Label className="btn btn-outline-light border rounded-circle me-2 text-body btn-icon btn-md"
                                        onClick={() => setSelectedSize(index)}>
                                        {item}
                                    </Form.Check.Label>
                                </Fragment>
                            )
                        )}
                    </ButtonGroup>
                </div>
            </div>
            <Row>
                <Col md={6}>
                    <div className="d-grid mb-2 mb-md-0">
                        <Link href="/dashboard/ecommerce/shopping-cart" className="btn btn-danger"><i className="fe fe-shopping-cart me-2"></i>Add
                            To Cart</Link>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="d-grid">
                        <Link href="#" className="btn btn-outline-secondary"><i className="fe fe-heart me-2"></i>Wishlist</Link>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProductBriefInfo