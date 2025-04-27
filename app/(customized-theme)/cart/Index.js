import React from "react";
import {
  Card,
  Col,
  Container,
  // DropdownDivider,
  Form,
  Row,
} from "react-bootstrap";
// import { PageHeading } from "shared";
import CourseListView from "../courses/components/CourseListView";
import Link from "next/link";
import PageHeading from "shared/page-headings/PageHeading";
import CardList from "./components/CardList";
// import PageHeading from "widgets/page-headings/PageHeadingDescription";
// export const dynamic = "force-dynamic";

const Cart = async () => {
  return (
    <>
      <section className="mb-4">
        <PageHeading pagetitle="Shopping Cart" />

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className=" mt-4">
              <Row className="d-lg-flex justify-content-between align-items-center">
                <Col md={6} lg={8} xl={9}>
                  <h4 className="mb-3 mb-lg-0">2 Courses in Cart</h4>
                </Col>
              </Row>
            </Col>
            <hr className="hr" />
          </Row>
          <Row className="flex-column-reverse flex-md-row">
            <Col xl={9} lg={8} md={7} sm={12} className="mt-4 mt-md-0">
              <CourseListView
                courses={{
                  courses: [
                    {
                      id: 1,
                      title: "JavaScript for Beginners",
                      description:
                        "A complete course for learning JavaScript from scratch.",
                      price: "49.99",
                      level: "Beginner",
                      slug: "javascript-for-beginners",
                      thumbnail:
                        "https://dummyimage.com/600x400/333/fff&text=JavaScript",
                      createdAt: "2025-04-24T15:59:01.000Z",
                      createdBy: 1,
                      visibility: "public",
                    },
                  ],
                  message: "Get All Course Successfully",
                }}
              />
            </Col>
            <CardList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
