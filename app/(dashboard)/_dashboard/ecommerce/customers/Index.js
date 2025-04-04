'use client';

// import node module libraries
import React, { Fragment, useMemo } from 'react';
import Link from 'next/link';
import {
  Col,
  Row,
  Card,
  Breadcrumb,
  Image
} from 'react-bootstrap';

// import custom components
import TanstackTable from 'components/TanstackTable';

// import widget/custom components
import { Checkbox, GKTippy } from 'widgets';

// import data files
import CustomersData from 'data/dashboard/customers/CustomersData';

const CustomersList = () => {
  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ getValue, row }) => {
          return (
            <Link href={`/dashboard/ecommerce/customer/${row.original.id}`} className="text-body">
              <span className="me-1">
                <Image src={row.original.avatar} className="avatar avatar-xs rounded-circle" alt="" />
              </span>
              {getValue()}
            </Link>
          );
        }
      },
      {
        accessorKey: 'location', header: 'Location',
        cell: ({ getValue }) => {
          return (
            <Fragment>
              <i className="fe fe-map-pin text-muted me-1"></i> {getValue()}
            </Fragment>
          );
        }
      },
      {
        accessorKey: 'totalOrders', header: 'Order',
        cell: ({ getValue }) => {
          return (
            <Fragment>
              {getValue()} {getValue() > 1 ? "Orders" : "Order"}
            </Fragment>
          );
        }
      },
      {
        accessorKey: 'totalSpent', header: 'Total Spent',
        cell: ({ getValue }) => {
          return (
            <Fragment>
              ${getValue().toFixed(2)}
            </Fragment>
          );
        }
      },
      {
        accessorKey: 'action',
        header: 'Action',
        cell: () => {
          return (
            <Fragment>
              <GKTippy content="Edit">
                <Link href="#" className="text-muted text-primary-hover texttooltip me-4" data-template="one">
                  <i className="fe fe-edit fs-5"></i>
                </Link>
              </GKTippy>
              <GKTippy content="Delete">
                <Link href="#" className="text-muted text-primary-hover texttooltip" data-template="one">
                  <i className="fe fe-trash-2 fs-5"></i>
                </Link>
              </GKTippy>
            </Fragment>
          );
        }
      }
    ],
    []
  );

  const data = useMemo(() => CustomersData, []);

  return (
    <Fragment>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">Customers</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Ecommerce</Breadcrumb.Item>
                <Breadcrumb.Item active>Customers</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="d-flex align-items-center">
              <Link href="#" className="me-5 text-body"><i className="fe fe-upload me-2"></i>Export</Link>
              <Link href="#" className="me-5 text-body"><i className="fe fe-download me-2"></i>Import</Link>
              <Link href="/dashboard/ecommerce/add-customer" className="btn btn-primary me-2">Add Customer</Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Card>
            <Card.Body className="p-0">
              <TanstackTable
                data={data}
                columns={columns}
                filter={true}
                filterPlaceholder="Search for order ID, customer name, order status ..."
                pagination={true} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default CustomersList