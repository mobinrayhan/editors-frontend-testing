// import node module libraries
import { Col, Row, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

// import widget/custom components
import { BlogCard, BlogCardFullWidth } from 'widgets';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

const BlogArticlesListing = () => {
    return (
        <section className="pb-8 bg-white">
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        {/* Flush Nav */}
                        <div className="flush-nav">
                            <Nav>
                                <Link href="/blog/listing/" className="ps-0 nav-link active">
                                    All
                                </Link>
                                <Link href="/blog/category/" className="nav-link">
                                    Courses
                                </Link>
                                <Link href="/blog/category/" className="nav-link">
                                    Workshop
                                </Link>
                                <Link href="/blog/category/" className="nav-link">
                                    Tutorial
                                </Link>
                                <Link href="/blog/category/" className="nav-link">
                                    Company
                                </Link>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>

                    {/* Show first article in full width  */}
                    {BlogArticlesList.slice(0, 1).map((item, index) => (
                        <Col xl={12} lg={12} md={12} sm={12} key={index}>
                            <BlogCardFullWidth item={item} />
                        </Col>
                    ))}

                    {/* Show remaining articles in 3 column width  */}
                    {BlogArticlesList.slice(1, 10).map((item, index) => (
                        <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                            <BlogCard item={item} />
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default BlogArticlesListing