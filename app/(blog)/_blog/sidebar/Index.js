"use client";

// import node module libraries
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

// import sub components
import BlogSidebarCards from "./components/BlogSidebarCards";

// import custom components
import SubscribeNewsroom from "components/SubscribeNewsroom";
import BlogListing2Col from "../components/BlogListing2Col";

// import data files
import BlogArticlesList from "data/blog/blogArticlesData";

const BlogSidebar = () => {
  const title = "Geeks Newsroom";
  const description =
    "Stories, tips, and tools to inspire you to find your most creative self. Subscribe to get curated content delivered directly to your inbox.";

  return (
    <Fragment>
      {/*  Page header subscribe newsroom */}
      <SubscribeNewsroom title={title} description={description} />

      {/* Page Content */}
      <section className="pb-16 bg-white">
        <Container>
          <Row>
            <Col lg={8} md={7} sm={12}>
              {/* Blog article listing  */}
              <BlogListing2Col articles={BlogArticlesList} />
            </Col>
            <Col lg={4} md={5} sm={!2} className="mt-6 mt-md-0">
              {/* Various sidebar cards */}
              <BlogSidebarCards />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BlogSidebar;
