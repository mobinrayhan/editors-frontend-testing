"use client";

// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Breadcrumb, Card, Col, Nav, Row, Tab } from "react-bootstrap";

// import sub components
import ProductsTable from "./components/ProductsTable";

// import data files
import ProductsData from "data/dashboard/ecommerce/ProductsData";

const ProductsList = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} xs={12}>
          {/* Page header */}
          <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-0 h2 fw-bold">Products </h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Products</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {/* button */}
            <div>
              <Link href="#" className="me-5 text-body">
                <i className="fe fe-upload me-2"></i>Export
              </Link>
              <Link href="#" className="me-5 text-body">
                <i className="fe fe-download me-2"></i>Import
              </Link>
              <Link
                href="/dashboard/ecommerce/products/add-product"
                className="btn btn-primary me-2"
              >
                Add Product
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <Tab.Container defaultActiveKey="all">
            <Card>
              <Card.Header className="border-bottom-0 p-0 bg-white">
                <Nav className="nav-lb-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
                      All
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="active" className="mb-sm-3 mb-md-0">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="draft" className="mb-sm-3 mb-md-0">
                      Draft
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="archived" className="mb-sm-3 mb-md-0">
                      Archived
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <Tab.Content>
                  <Tab.Pane eventKey="all" className="pb-0">
                    <ProductsTable table_data={ProductsData} status={"all"} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="active" className="pb-0">
                    <ProductsTable
                      table_data={ProductsData}
                      status={"active"}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="draft" className="pb-4">
                    <ProductsTable table_data={ProductsData} status={"draft"} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="archived" className="pb-4">
                    <ProductsTable
                      table_data={ProductsData}
                      status={"archived"}
                    />
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

export default ProductsList;
