"use client";

// import node module libraries
import Link from "next/link";
import { Badge, Card, Table } from "react-bootstrap";

// import data files
import InvoiceData from "data/student/InvoiceData";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

const Invoice = () => {
  return (
    <ProfileLayout>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Invoices</h3>
            <p className="mb-0">You can find all of your order Invoices.</p>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          {/* Table */}
          <div className="table-invoice border-0">
            <Table hover responsive className="table mb-0 text-nowrap">
              <thead className="table-light">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {InvoiceData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Link href="/marketing/student/invoice-details">
                        #{item.id}
                      </Link>
                    </td>
                    <td>{item.invoicedate}</td>
                    <td>{item.amount}</td>
                    <td>
                      <Badge bg={item.status === "Due" ? "danger" : "success"}>
                        {item.status}
                      </Badge>
                    </td>
                    <td>
                      <Link
                        href={item.pdf}
                        target="_blank"
                        className="fe fe-download"
                        download
                      ></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </ProfileLayout>
  );
};

export default Invoice;
