// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { BlogCard } from 'widgets';

const BlogListing2Col = ({ articles }) => {
    return (
        <Row>
            {articles.slice(0, 6).map((item, index) => (
                <Col lg={6} md={12} sm={12} key={index} className="d-flex">
                    <BlogCard item={item} />
                </Col>
            ))}
        </Row>
    )
}

export default BlogListing2Col