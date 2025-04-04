'use client';

// import node module libraries
import { Fragment } from 'react'
import { Col, Row, Card, Image, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';

// import data files
import ProductsData from 'data/dashboard/ecommerce/ProductsData';

// import utility file
import { convertToCurrency } from 'helper/utils';

const OrderHistory = () => {
  const Orders = [
    {
      id: 1,
      orderNo: 'GK00017',
      deliveredON: 'June 26,2023',
      orderDetails: [
        {
          id: 11,
          productID: 15,
          color: 'Orange',
          size: '10',
          price: 49
        },
        {
          id: 11,
          productID: 14,
          color: 'Black',
          size: '11',
          price: 79
        },
      ]
    },
    {
      id: 2,
      orderNo: 'GK00012',
      deliveredON: 'Apr 20,2023',
      orderDetails: [
        {
          id: 21,
          productID: 13,
          color: 'Orange',
          size: '10',
          price: 49
        }
      ]
    }
  ]
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <div className="border-bottom pb-3 mb-3 ">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Order History </h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Order History</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xxl={8} xs={12}>
          <Card>
            <Card.Body>
              <div className="mb-6">
                <h4 className="mb-0">Your Order</h4>
                <p>Check the status of recent orders, manage returns, and discover similar products.</p>
              </div>
              {Orders.map((order, index) => {
                return (
                  <div className="mb-8" key={index}>
                    <div className="border-bottom mb-3 pb-3 d-lg-flex align-items-center justify-content-between ">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0">Order #{order.orderNo}</h5>
                        <span className="ms-2">Delivered on {order.deliveredON}</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Link href="#">Manage Order</Link>
                        <Link href="#" className="ms-6 ">View Invoice</Link>
                      </div>
                    </div>
                    {order.orderDetails.map((item, itemIndex) => {
                      const product = ProductsData.filter((product) => product.id === item.productID)[0];
                      return (
                        <Fragment key={itemIndex}>
                          <Row className="justify-content-between align-items-center" >
                            <Col lg={8} xs={12}>
                              <div className="d-md-flex">
                                <div>
                                  <Image src={product.images[0].image} alt="" className="img-4by3-xl rounded" />
                                </div>
                                <div className="ms-md-4 mt-2 mt-lg-0">
                                  <h5 className="mb-1">{product.name}</h5>
                                  <span>Color: <span className="text-dark">{item.color}</span>, Size:<span
                                    className="text-dark"> {item.size}</span>
                                  </span>
                                  <div className="mt-3"><h4>{convertToCurrency(parseFloat(product.salePrice))}</h4></div>
                                </div>
                              </div>
                            </Col>
                            <Col lg={3} xs={12} className="d-grid">
                              <Link href="/dashboard/ecommerce/products" className="btn btn-primary mb-2">Buy again</Link>
                              <Link href="#" className="btn btn-secondary"> Shop similar</Link>
                            </Col>
                          </Row>
                          <hr className="my-3" />
                        </Fragment>
                      )
                    })}
                  </div>
                )
              })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default OrderHistory