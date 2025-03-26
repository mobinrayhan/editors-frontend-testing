// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';

// import widget/custom components
import { JobSearchBox } from 'widgets';

// import utility file
import { numberWithCommas } from 'helper/utils';

const HeroFindJobs = ({
    title = 'Find your dream job that you love to do.',
    description = 'The largest remote work community in the world. Sign up and post a job or create your developer profile.',
    totalJobs = 0,
    totalCompanies = 0
}) => {
    return (
        <section className="bg-light py-lg-14 py-12 bg-cover">
            {/* container */}
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} sm={12}>
                        <div>
                            <div className=" text-center text-md-start ">
                                {/* heading */}
                                <h1 className=" display-2 fw-bold  mb-3">{title}</h1>
                                {/* lead */}
                                <p className="lead">{description}</p>
                            </div>
                            <div className="mt-8">
                                {/* job search form */}
                                <JobSearchBox />
                                {/* text */}
                                <span className=" fs-4">Currently listing {numberWithCommas(totalJobs)} jobs from {numberWithCommas(totalCompanies)} companies</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} sm={12} className="text-center">
                        <div className="position-relative ">
                            <Image src='/images/job/png/job-hero-section.png' alt="" className="img-fluid " />
                            <div className="position-absolute top-0 mt-7 ms-n6 ms-md-n6 ms-lg-n12 start-0">
                                <Image src='/images/job/job-hero-block-1.svg' alt="" className="img-fluid " />
                            </div>
                            <div className="position-absolute bottom-0 mb-12 me-n6 me-md-n4 me-lg-n12 end-0 ">
                                <Image src='/images/job/job-hero-block-2.svg' alt="" className="img-fluid " />
                            </div>
                            <div className="position-absolute bottom-0 mb-n4 ms-n1 ms-md-n4 ms-lg-n7 start-0">
                                <Image src='/images/job/job-hero-block-3.svg' alt="" className="img-fluid " />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroFindJobs