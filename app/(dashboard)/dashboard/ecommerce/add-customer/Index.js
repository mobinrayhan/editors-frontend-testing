'use client';

// import node module libraries
import React, { Fragment } from 'react'
import Link from 'next/link';
import { Row, Col, Breadcrumb, Card, Form, Button } from 'react-bootstrap';

// import widget/custom components
import { FormSelect } from 'widgets';

const AddCustomer = () => {
    const countryOptions = [
        { value: 'India', label: 'India' },
        { value: 'UK', label: 'UK' },
        { value: 'US', label: 'US' }
    ];
    return (
        <Fragment>
            <Row>
                <Col lg={12} md={12} xs={12} >
                    {/* Page header */}
                    <div className="border-bottom pb-3 mb-3 ">
                        <div className="mb-2 mb-lg-0">
                            <h1 className="mb-0 h2 fw-bold"> Add Customer </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item to="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item to="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Add Customer</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={{ offset: 3, span: 6 }} xs={12}>
                    <Form>
                        <Card className="mb-4">
                            <Card.Body>
                                <h4 className="mb-4">Customer Overview</h4>
                                <Row className="gx-3">
                                    {/* First Name */}
                                    <Form.Group as={Col} md={6} controlId="firstname" className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" required />
                                    </Form.Group>

                                    {/* Last Name */}
                                    <Form.Group as={Col} md={6} controlId="lastName" className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" required />
                                    </Form.Group>

                                    {/* Email */}
                                    <Form.Group as={Col} md={6} controlId="email" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email address" required />
                                    </Form.Group>

                                    {/* Phone */}
                                    <Form.Group as={Col} md={6} controlId="phone" className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Phone address" required />
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="mb-4">
                            <Card.Body>
                                {/* heading */}
                                <div className="mb-4">
                                    <h4 className="mb-1">Address</h4>
                                    <p>The primary address of this customer.</p>
                                </div>

                                <Row className="gx-3">

                                    {/* Address */}
                                    <Form.Group as={Col} md={12} controlId="address" className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Address" required />
                                    </Form.Group>

                                    {/* Apartment street */}
                                    <Form.Group as={Col} md={12} controlId="aparment" className="mb-3">
                                        <Form.Label>Apartment, suite etc.</Form.Label>
                                        <Form.Control type="text" placeholder="Apartment street" required />
                                    </Form.Group>

                                    {/* Town / City */}
                                    <Form.Group as={Col} md={12} controlId="city" className="mb-3">
                                        <Form.Label>Town / City</Form.Label>
                                        <Form.Control type="text" placeholder="Enter City" required />
                                    </Form.Group>

                                    {/* State */}
                                    <Form.Group as={Col} md={12} controlId="state" className="mb-3">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" placeholder="Enter state" required />
                                    </Form.Group>

                                    {/* Zip / Postal Code */}
                                    <Form.Group as={Col} md={12} controlId="zip" className="mb-3">
                                        <Form.Label>Zip / Postal Code</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Zip / Postal Code" required />
                                    </Form.Group>

                                    {/* Country */}
                                    <Form.Group as={Col} md={12} className="mb-3" controlId="country">
                                        <Form.Label className="mb-1">Country</Form.Label>
                                        <Form.Control as={FormSelect} placeholder="Select Country" options={countryOptions} />
                                    </Form.Group>

                                </Row>

                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Row className="gx-3">
                                    <Form.Group as={Col} md={12} className="mb-3" controlId="customerNotes">
                                        <Form.Label className="mb-1">Notes <small className="text-muted">(Optional)</small></Form.Label>
                                        <Form.Control as="textarea" rows="3" placeholder="Write a Notes..." />
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>

                        <div className="d-flex justify-content-end">
                            <Link href="#" className="btn btn-outline-primary me-2">Cancel</Link>
                            <Button variant="primary" type="submit">Save Customer</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    )
}

export default AddCustomer