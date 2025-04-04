// import node module libraries
import { Col, Row, Image, ListGroup, Container } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

// import widget/custom components
import { SectionHeadingLeftBold } from 'widgets';

export const Features5 = () => {
    const title = 'Build the sites you want with Geeks UI you love';
    const subtitle = 'Build fast, launch faster';
    const description = 'Mauris interdum leo vel eleifend fringilla nibh elit interdc nunc elementum nisi.';
    const featurescol1 = [
        { content: 'Earnings' },
        { content: 'Conversion Rates' },
        { content: 'Top security' }
    ];
    const featurescol2 = [
        { content: 'High converting' },
        { content: 'Easy to use' },
        { content: '200+ Integrations' }
    ];

    return (
        <section className='py-8'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={12} xs={12}>
                        <div className="mb-4 mb-lg-0 bg-gray-200 rounded-4 ">
                            <Image src="/images/svg/featured-img-1.svg" alt="..." className="img-fluid w-100" />
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12} className="mt-4 mt-lg-0">
                        <div className="ps-lg-7">
                            <SectionHeadingLeftBold title={title} description={description} subtitle={subtitle} />
                            <Row className="mt-5">
                                <Col>
                                    <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                                        {featurescol1.map((item, index) => {
                                            return (
                                                <ListGroup.Item key={index} bsPrefix="mb-2" className="d-flex"   >
                                                    <Icon path={mdiCheckCircle} size={0.7} className="text-success mt-1 me-2" />
                                                    {item.content}
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                                        {featurescol2.map((item, index) => {
                                            return (
                                                <ListGroup.Item key={index} bsPrefix="mb-2" className="d-flex" >
                                                    <Icon path={mdiCheckCircle} size={0.7} className="text-success mt-1 me-2" />
                                                    {item.content}
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export const Features5Code = `
// import node module libraries
import { Col, Row, Image, ListGroup, Container } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

// import widget/custom components
import { SectionHeadingLeftBold } from 'widgets';

export const Features5Example = () => {
    const title = 'Build the sites you want with Geeks UI you love';
    const subtitle = 'Build fast, launch faster';
    const description = 'Mauris interdum leo vel eleifend fringilla nibh elit interdc nunc elementum nisi.';
    const featurescol1 = [
        { content: 'Earnings' },
        { content: 'Conversion Rates' },
        { content: 'Top security' }
    ];
    const featurescol2 = [
        { content: 'High converting' },
        { content: 'Easy to use' },
        { content: '200+ Integrations' }
    ];

    return (
        <section className='py-8'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={12} xs={12}>
                        <div className="mb-4 mb-lg-0 bg-gray-200 rounded-4 ">
                            <Image src="/images/svg/featured-img-1.svg" alt="..." className="img-fluid w-100" />
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12} className="mt-4 mt-lg-0">
                        <div className="ps-lg-7">
                            <SectionHeadingLeftBold title={title} description={description} subtitle={subtitle} />
                            <Row className="mt-5">
                                <Col>
                                    <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                                        {featurescol1.map((item, index) => {
                                            return (
                                                <ListGroup.Item key={index} bsPrefix="mb-2" className="d-flex"   >
                                                    <Icon path={mdiCheckCircle} size={0.7} className="text-success mt-1 me-2" />
                                                    {item.content}
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </Col>
                                <Col>
                                    <ListGroup bsPrefix="list-unstyled" className="fs-4 fw-medium">
                                        {featurescol2.map((item, index) => {
                                            return (
                                                <ListGroup.Item key={index} bsPrefix="mb-2" className="d-flex" >
                                                    <Icon path={mdiCheckCircle} size={0.7} className="text-success mt-1 me-2" />
                                                    {item.content}
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}`.trim();