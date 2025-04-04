// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import PortfolioItem from './components/PortfolioItem';

// import data files
import PortfolioData from 'data/marketing/portfolio/PortfolioData'

const PortfolioList = () => {
    return (
        <main>
            <section className="py-lg-12 py-7">
                <Container>
                    <Row>
                        <Col md={{ offset: 2, span: 8 }} xs={12}>
                            <div className="mb-5">
                                <h1 className="display-3 fw-semibold mb-4">We showcase projects that we are proud of it</h1>
                                <p className="lead mb-0">Check out some of the work we&apos;ve done for startups and established businesses around the world.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-lg-6 g-6">
                        <Col md={6}>
                            {PortfolioData.slice(0, 3).map((item, index) => {
                                return (
                                    <PortfolioItem item={item} key={index} />
                                )
                            })}
                        </Col>
                        <Col md={6}>
                            {PortfolioData.slice(3, 6).map((item, index) => {
                                return (
                                    <PortfolioItem item={item} key={index} />
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default PortfolioList