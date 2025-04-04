// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { BlogCardFullWidth } from 'widgets';

const BlogListing1Col = ({ articles }) => {
    return (
        <Row>
            {articles.map((item, index) => (
                <Col xl={12} lg={12} md={12} sm={12} key={index}>
                    <BlogCardFullWidth item={item} />
                </Col>
            ))}
        </Row>
    )
}

export default BlogListing1Col