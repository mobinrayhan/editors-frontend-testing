'use client'

// import node module libraries
import { Col, Row, Container, Tab } from 'react-bootstrap';

// import widget/custom components
import { GridListViewButton, FormSelect } from 'widgets';

// import widget/custom components
import { JobSearchBox } from 'widgets';

// import sub components 
import JobFilters from './components/JobFilters';
import JobsListView from './components/JobsListView';
import JobsGridView from './components/JobsGridView';

const JobsList = () => {

    const sortByOptions = [
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' },
    ];

    return (
        <main>
            <section className="py-8 bg-light">
                <Container>
                    <Row>
                        <Col lg={8} md={10} xs={12}>
                            <div>
                                <div className="mb-4">
                                    <h1 className=" fw-bold mb-4">Showing jobs for &apos;<span className="text-primary">it manager</span>, India</h1>
                                </div>
                                <JobSearchBox />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-8 bg-white">
                <Container>
                    <Row>
                        <Col md={4} xl={3}>
                            <JobFilters />
                        </Col>
                        <Col xl={9} md={8} className="mb-6 mb-md-0">
                            <Tab.Container defaultActiveKey="grid">
                                <Row className="row align-items-center mb-4">
                                    <Col xs>
                                        <p className="mb-0">1 - 20 of 86 IT Manager Jobs in India</p>
                                    </Col>
                                    <Col className="col-auto">
                                        <div className="d-flex ">
                                            <GridListViewButton keyGrid="grid" keyList="list" />
                                            <FormSelect options={sortByOptions} placeholder="Sorting" />
                                        </div>
                                    </Col>
                                </Row>
                                <Tab.Content>
                                    <Tab.Pane eventKey="list" className="pb-4 px-0 react-code">
                                        <JobsListView />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="grid" className="pb-4 px-0">
                                        <JobsGridView />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section >
        </main >
    )
}

export default JobsList