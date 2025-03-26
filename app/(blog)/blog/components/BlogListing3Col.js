// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { BlogCard } from 'widgets';

const BlogListing3Col = ({ articles }) => {
    return (
        <Row>
            {articles.filter(function (dataSource) {
                return dataSource.category === 'Tutorial';
            }).map((item, index) => (
                <Col xl={4} lg={4} md={6} sm={12} key={index} className="d-flex">
                    <BlogCard item={item} />
                </Col>
            ))}
        </Row>
    )
}

export default BlogListing3Col