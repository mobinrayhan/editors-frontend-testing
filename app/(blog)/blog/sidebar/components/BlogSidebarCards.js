
// import node module libraries
import Link from 'next/link';
import { Fragment } from 'react';
import { Form, Card, ListGroup } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

const BlogSidebarCards = () => {
    return (
        <Fragment>
            {/*  search */}
            <div className="mb-4">
                <div className="mb-3 position-relative">
                    <Form.Control type="search" placeholder="Search..." />
                    <span className="position-absolute end-0 top-0 my-2 me-3">
                        <SearchIcon size={15} className="me-1" />
                    </span>
                </div>
            </div>
            {/*  card */}
            <Card className="mb-4 border ">
                {/*  card body */}
                <Card.Body className="p-4">
                    <h3>Recent Posts</h3>
                    <div className="mt-3">
                        <ListGroup
                            as="ul"
                            className=" mb-0"
                            bsPrefix="list-unstyled"
                        >
                            {BlogArticlesList.slice(0, 4).map((item, index) => (
                                <ListGroup.Item
                                    as="li"
                                    className="mb-3"
                                    bsPrefix=" "
                                    key={index}
                                >
                                    <h4 className="lh-lg">
                                        <Link href={`/blog/${item.slug}`} className="text-inherit">
                                            {item.title}
                                        </Link>
                                    </h4>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
            {/*  card */}
            <Card className="mb-4 border ">
                {/*  card body */}
                <Card.Body className="p-4">
                    <h3>Categories</h3>
                    <div className="mt-3">
                        {/*  list */}
                        <ListGroup
                            as="ul"
                            className="mb-0 nav nav-x-0 flex-column"
                            bsPrefix="list-unstyled"
                        >
                            {[
                                'Business',
                                'Marketing',
                                'Courses',
                                'Dashboard',
                                'Landings',
                                'E-commerce'
                            ].map((item, index) => (
                                <ListGroup.Item
                                    as="li"
                                    className="lh-lg mb-1"
                                    bsPrefix=" "
                                    key={index}
                                >
                                    <i className="fe fe-arrow-right text-muted"></i>{' '}
                                    <Link href="/blog/category" className="text-link d-inline">
                                        {item}
                                    </Link>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
            {/*  card */}
            <Card className="mb-4 border ">
                {/*  card body */}
                <Card.Body className="p-4">
                    <h3>Archive</h3>
                    <div className="mt-3">
                        {/*  list */}
                        <ListGroup
                            as="ul"
                            className="mb-0 nav nav-x-0 flex-column"
                            bsPrefix="list-unstyled"
                        >
                            {[
                                'March 2021',
                                'February 2021',
                                'January 2021',
                                'December 2020'
                            ].map((item, index) => (
                                <ListGroup.Item
                                    as="li"
                                    className="lh-lg mb-1"
                                    bsPrefix=" "
                                    key={index}
                                >
                                    <i className="fe fe-arrow-right text-muted"></i>{' '}
                                    <Link href="#" className="text-link d-inline">
                                        {item}
                                    </Link>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Card.Body>
            </Card>
            {/*  card */}
            <Card className="mb-4 border ">
                {/*  card body */}
                <Card.Body className="p-4">
                    <h3>Tags</h3>
                    <div className="mt-3">
                        {[
                            'business',
                            'e-commerce',
                            'course',
                            'dashboard',
                            'landings',
                            'marketing'
                        ].map((item, index) => (
                            <Fragment key={index}>
                                <Link href="#" className="btn btn-light btn-xs mb-2">
                                    {item}
                                </Link>{' '}
                            </Fragment>
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default BlogSidebarCards