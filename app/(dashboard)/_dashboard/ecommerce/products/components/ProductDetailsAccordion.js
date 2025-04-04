// import node module libraries
import { Fragment, useContext } from 'react'
import {
    Accordion,
    useAccordionButton,
    AccordionContext,
    ListGroup
} from 'react-bootstrap';
import Link from 'next/link';

// import data files
import { ProductDetails } from 'data/dashboard/ecommerce/ProductDetailsData';

const ProductDetailsAccordion = () => {
    const ContextAwareToggle = ({ children, eventKey, callback }) => {
        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey)
        );
        const isCurrentEventKey = activeEventKey === eventKey;
        return (
            <Fragment>
                <Link
                    href="#"
                    onClick={decoratedOnClick}
                    aria-expanded={isCurrentEventKey}
                    className="d-flex align-items-center text-inherit text-decoration-none h4 mb-0"
                    data-bs-toggle="collapse"
                    aria-controls="courseTwo"
                >
                    <div className="me-auto">{children.title}</div>
                    <span className="chevron-arrow ms-4">
                        <i className="fe fe-chevron-down fs-4"></i>
                    </span>
                </Link>
            </Fragment>
        );
    };

    return (<Fragment>
        <Accordion defaultActiveKey={ProductDetails[0].id}>
            <ListGroup as="ul" variant="flush">
                {ProductDetails.map((item, index) => {
                    return (
                        <ListGroup.Item
                            key={index}
                            as="li"
                            className="fs-5 px-0"
                        >
                            <ContextAwareToggle eventKey={item.id}>
                                {item}
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey={item.id}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="border-0 fs-5 px-0 py-4"
                                        dangerouslySetInnerHTML={{ __html: item.content }}>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Accordion.Collapse>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </Accordion>
    </Fragment>

    )
}

export default ProductDetailsAccordion