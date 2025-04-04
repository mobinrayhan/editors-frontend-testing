'use client';

// import node module libraries
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Col, Row, Tab, Card, Nav, Breadcrumb } from 'react-bootstrap';

// import sub custom components
import OrdersTable from '../components/orders/OrdersTable';

const AllOrders = () => {
    return (
        <Fragment>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
                        <div className="mb-3 mb-md-0">
                            <h1 className="mb-1 h2 fw-bold">Orders</h1>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Orders</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <Link href="#" className="btn btn-primary">
                                Add New Courses
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <Tab.Container defaultActiveKey="all">
                        <Card>
                            <Card.Header className="border-bottom-0 p-0 bg-white">
                                <Nav className="nav-lb-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                                            All Orders
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="shipped" className="mb-sm-3 mb-md-0">
                                            Shipped
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="cancelled" className="mb-sm-3 mb-md-0">
                                            Cancelled
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="return" className="mb-sm-3 mb-md-0">
                                            Return
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Tab.Content>
                                    <Tab.Pane eventKey="all" className="pb-4">
                                        <OrdersTable />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="shipped" className="pb-4">
                                        <OrdersTable filterBy="Shipped" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cancelled" className="pb-4">
                                        <OrdersTable filterBy="Cancelled" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="return" className="pb-4">
                                        <OrdersTable filterBy="Return" />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Tab.Container>
                </Col>
            </Row>
        </Fragment>
    );
};

export default AllOrders;
