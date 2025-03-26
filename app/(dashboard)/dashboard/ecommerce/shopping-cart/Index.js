'use client';

// import node module libraries
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react'
import { Alert, Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap'

// import required sub component
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';

// import required hooks
import useCartOperations from 'hooks/useCartOperations';


const ShoppingCart = () => {
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const { cartItems, totalQuantity } = useSelector((state) => state.cart);
    const { getCartSubtotal, convertToCurrency } = useCartOperations();

    useEffect(() => {
        setCartSubTotal(getCartSubtotal(cartItems));
    }, [cartItems, getCartSubtotal]);

    const isCartEmpty = cartItems.length === 0;

    return (
        <Fragment>
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="border-bottom pb-3 mb-3 ">
                        <div className="mb-2 mb-lg-0">
                            <h1 className="mb-0 h2 fw-bold">Shopping Cart </h1>
                            <Breadcrumb>
                                <Breadcrumb.Item to="#">Dashboard</Breadcrumb.Item>
                                <Breadcrumb.Item to="#">Ecommerce</Breadcrumb.Item>
                                <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                </Col>
            </Row>
            {isCartEmpty ?
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <div className="d-flex ">
                                    <h4 className="mb-0">Shopping Cart </h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div>Opps !! You have no products in your shopping cart, start shopping now!</div>
                            </Card.Body>
                        </Card>
                        <div className="mt-4 d-flex justify-content-between">
                            <Link href="/dashboard/ecommerce/products/product-grid" className="btn btn-outline-primary">Continue Shopping</Link>
                        </div>
                    </Col>
                </Row>
                :
                <Row>
                    <Col xs={12} className="mb-2">
                        <Alert variant="warning">
                            Use coupon code <strong>(GKDIS5 / GKDIS10 / GKDIS15)</strong> and get discount !
                        </Alert>
                    </Col>
                    <Col lg={8}>
                        <Card>
                            <Card.Header>
                                <div className="d-flex ">
                                    <h4 className="mb-0">Shopping Cart <span className="text-muted ">({totalQuantity} Items)</span> </h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive table-card">
                                    <Table className="table mb-0 text-nowrap">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((product, index) => {
                                                return (
                                                    <CartItem key={index} product={product} />
                                                )
                                            })}
                                            <tr>
                                                <td className="align-middle border-top-0 border-bottom-0 ">
                                                </td>
                                                <td className="align-middle border-top-0 border-bottom-0 ">
                                                    <h4 className="mb-0">Total</h4>
                                                </td>
                                                <td className="align-middle border-top-0 border-bottom-0">
                                                    <span className="fs-4">{totalQuantity} (items)</span>
                                                </td>
                                                <td>
                                                    <h4 className="mb-0">{convertToCurrency(cartSubTotal)}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="mt-4 d-flex justify-content-between">
                            <Link href="/dashboard/ecommerce/products/product-grid" className="btn btn-outline-primary">Continue Shopping</Link>
                            {!isCartEmpty && <Link href="/dashboard/ecommerce/checkout" className="btn btn-primary">Checkout</Link>}
                        </div>
                    </Col>
                    <Col lg={4}>
                        <OrderSummary />
                    </Col>
                </Row>
            }
        </Fragment>
    )
}

export default ShoppingCart