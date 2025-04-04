// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Image } from 'react-bootstrap';

// import bootstrap icons
import { ArrowUpRight, ChatQuoteFill } from 'react-bootstrap-icons';

const PortfolioSingle = () => {
    return (
        <main>
            <section className="py-lg-12 py-7">
                <Container>
                    <Row>
                        <Col md={{ offset: 1, span: 10 }} xs={12}>
                            <div className="mb-10">
                                <Row >
                                    <Col md={10} xs={12}>
                                        <div className="mb-8">
                                            <h1 className="display-3 fw-bold mb-4">Hello Summer
                                            </h1>
                                            <p className="lead mb-0 pe-lg-22">Aliquam condimentum purus eget ipsum sollicitudin, eget suscipit ex blandit. Nulla augue mauris,
                                                facilisis sed interdum et, tincidunt posuerenec ornare orci a lacus efficitur interdum.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <Image src={'/images/portfolio/portfolio-single-1.jpg'} alt="portfolio" className="img-fluid w-100 rounded-3" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-10">
                                <Row>
                                    <Col md={8} xs={12}>
                                        <div className="mb-6 mb-lg-0">
                                            <h2 className="mb-4">Project Summary</h2>
                                            <p className="fs-4 mb-4">Maecenas laoreet imperdiet pellentesque.
                                                Aliquam venenatis ornare venenatis. Nulla nec massa commodo, rutrum lacus ac,
                                                facilisis eros. Donec aliquet nec arcu non lobortis. </p>
                                            <p className="fs-4 mb-0">Vivamus at odio a neque fermentum tincidunt
                                                ac id neque. Aenean convallis mi massa, ac volutpat leo fringilla in.
                                                Curabitur malesuada sit amet nulla at efficitur. Vestibulum posuere odio eu turpis
                                                pellentesque maximus.</p>
                                        </div>
                                    </Col>
                                    <Col md={{ offset: 1, span: 3 }} xs={12}>
                                        <div className="mb-6">
                                            <h3 className="mb-4">Services</h3>
                                            <ul className="list-unstyled fs-4">
                                                <li className="mb-2">UX Design</li>
                                                <li className="mb-2">Visual design</li>
                                                <li className="mb-2">Development</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="mb-3">Website</h3>
                                            <Link href="https://codescandy.com/" className="fs-4 text-inherit">https://codescandy.com/</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <hr className="mb-12" />
                            <div className="mb-10">
                                <Row >
                                    <Col md={3} xs={12}>
                                        <div>
                                            <h2 className="mb-4">The challenge</h2>
                                        </div>
                                    </Col>
                                    <Col md={{ offset: 1, span: 8 }} xs={12}>
                                        <p className="fs-4 mb-0">Aliquam condimentum purus eget ipsum
                                            sollicitudin, eget suscipit ex blandit. Nulla augue mauris, facilisis sed interdum et,
                                            tincidunt posuere est. Donec ornare orci a lacus efficitur interdum.
                                        </p>
                                    </Col>
                                    <Col md={6} xs={12} className="mt-6">
                                        <Image src={'/images/portfolio/portfolio-square-2.jpg'} alt="portfolio" className="img-fluid w-100 rounded-3" />
                                    </Col>
                                    <Col md={6} xs={12} className="mt-6">
                                        <Image src={'/images/portfolio/portfolio-square-3.jpg'} alt="portfolio" className="img-fluid w-100 rounded-3" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-10">
                                <Row >
                                    <Col md={3} xs={12} >
                                        <div>
                                            <h2 className="mb-4">Solution</h2>
                                        </div>
                                    </Col>
                                    <Col md={{ offset: 1, span: 8 }} xs={12}>
                                        <p className="fs-4 mb-0">Maecenas laoreet imperdiet pellentesque.
                                            Aliquam venenatis ornare venenatis. Nulla nec massa commodo, rutrum lacus ac,
                                            facilisis eros. Donec aliquet nec arcu non lobortis.
                                        </p>
                                    </Col>
                                    <Col md={12} className="mt-6">
                                        <Image src={'/images/portfolio/portfolio-single-4.jpg'} alt="portfolio" className="img-fluid w-100 rounded-3" />
                                    </Col>
                                </Row>
                            </div>
                            <div className="mb-10">
                                <Row >
                                    <Col md={7} xs={12}>
                                        <div className="mb-6 mb-md-0">
                                            <h2 className="mb-4">Results</h2>
                                            <p className="fs-4 mb-0">Vivamus at odio a neque fermentum tincidunt
                                                ac id neque. Aenean convallis mi massa, ac volutpat leo fringilla in.
                                                Curabitur malesuada sit amet nulla at efficitur. </p>
                                        </div>
                                    </Col>
                                    <Col md={5} xs={12}>
                                        <Row >
                                            <Col xs={6} className="ps-lg-6">
                                                <div className="mb-6">
                                                    <h2 className="fw-bold">200%</h2>
                                                    <span className="fs-4">Company Growth</span>
                                                </div>
                                            </Col>
                                            <Col xs={6} className="ps-lg-6">
                                                <div className="mb-6">
                                                    <h2 className="fw-bold">1700</h2>
                                                    <span className="fs-4">New customers</span>
                                                </div>
                                            </Col>
                                            <Col xs={6} className="ps-lg-6">
                                                <div>
                                                    <h2 className="fw-bold">21K</h2>
                                                    <span className="fs-4">Downloads</span>
                                                </div>
                                            </Col>
                                            <Col xs={6} className="ps-lg-6">
                                                <div>
                                                    <h2 className="fw-bold">85%</h2>
                                                    <span className="fs-4">Retention Rate</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <hr className="mb-8" />

                            {/* The client says */}
                            <div className="mb-10">
                                <Row >
                                    <Col xs={12} >
                                        <div className="mb-12">
                                            <h2 className="mb-0">The client says</h2>
                                        </div>
                                    </Col>
                                    <Col lg={{ offset: 2, span: 8 }} xs={12}>
                                        <div className="mb-4 text-center px-5">
                                            <ChatQuoteFill size={60} className="text-primary mb-4" />
                                            <p className="fs-3 lh-3 mb-4">Lorem ipsum dolor sit amet
                                                consectetur adipiscing elit. Porta ut nulla curabitur pulvinar tincidunt conseq uat
                                                etnisl orci diam id gravida feugiat simple text.</p>
                                            <h4 className="mb-1 h3">Raymundo Seal</h4>
                                            <span>Founder and CEO</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-16">
                        <Col xs={12}>
                            <h2 className="h1 mb-8">More Projects</h2>
                        </Col>
                        <Col md={6} >
                            <div className="mb-6">
                                <div className="img-overlay">
                                    <div className="img-color">
                                        <Link href="/portfolio/single/">
                                            <Image src={'/images/portfolio/portfolio-square-1.jpg'} alt="portfolio" className="img-fluid w-100" />
                                        </Link>
                                        <div className="caption">
                                            <Link href="/portfolio/single/" className="btn btn-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="fw-semibold mb-1"><Link href="/portfolio/single/" className="text-inherit">Business Card</Link></h3>
                                        <Link href="/portfolio/single/"><ArrowUpRight size={14} fill="currentColor" /></Link>
                                    </div>
                                    <span>Website / UX/UI / Development </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mb-6">
                                <div className="img-overlay">
                                    <div className="img-color">
                                        <Link href="/portfolio/single/">
                                            <Image src={'/images/portfolio/portfolio-square-2.jpg'} alt="portfolio" className="img-fluid w-100" />
                                        </Link>
                                        <div className="caption">
                                            <Link href="/portfolio/single/" className="btn btn-white">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="fw-semibold mb-1"><Link href="/portfolio/single/" className="text-inherit">Hello Summer</Link></h3>
                                        <Link href="/portfolio/single/"><ArrowUpRight size={14} fill="currentColor" /></Link>
                                    </div>
                                    <span>Website / UX/UI / Development</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default PortfolioSingle