// import node module libraries
import { Col, ProgressBar, Row } from 'react-bootstrap'

// import sub components
import Ratings from './Ratings'

const RatingProgressBar = ({ totalFiveStart, totalFourStart, totalThreeStart, totalTwoStart, totalOneStart }) => {
    const totalReviews = totalFiveStart + totalFourStart + totalThreeStart + totalTwoStart + totalOneStart;
    const totalRatings = (5 * totalFiveStart) + (4 * totalFourStart) + (3 * totalThreeStart) + (2 * totalTwoStart) + (1 * totalOneStart);
    // average rating = (5r5 + 4r4 + 3r3 + 2r2 + r1) / (r5 + r4 + r3 + r2 + r1)
    const AverageRating = totalRatings / totalReviews
    return (
        <Row className="align-items-center">
            <Col xs="auto" className="text-center">
                <h3 className="display-2 fw-bold">{AverageRating}</h3>
                <span className="text-warning">
                    <Ratings rating={AverageRating} />
                </span>
                <p className="mb-0 fs-6">(Based on {totalReviews} reviews)</p>
            </Col>
            {/* Progress bar */}
            <Col className="pt-3 order-3 order-md-2">
                <ProgressBar
                    variant="warning"
                    now={(totalFiveStart * 100) / totalReviews}
                    className="mb-3"
                    style={{ height: '6px' }}
                />
                <ProgressBar
                    variant="warning"
                    now={(totalFourStart * 100) / totalReviews}
                    className="mb-3"
                    style={{ height: '6px' }}
                />
                <ProgressBar
                    variant="warning"
                    now={(totalThreeStart * 100) / totalReviews}
                    className="mb-3"
                    style={{ height: '6px' }}
                />
                <ProgressBar
                    variant="warning"
                    now={(totalTwoStart * 100) / totalReviews}
                    className="mb-3"
                    style={{ height: '6px' }}
                />
                <ProgressBar
                    variant="warning"
                    now={(totalOneStart * 100) / totalReviews}
                    className="mb-3"
                    style={{ height: '6px' }}
                />
            </Col>
            <Col xs={6} md="auto" className="order-2 order-md-3">
                {/* Rating */}
                <div>
                    <span className="text-warning">
                        <Ratings rating={5} />
                    </span>
                    <span className="ms-4">{(totalFiveStart * 100) / totalReviews}%</span>
                </div>
                <div>
                    <span className="text-warning">
                        <Ratings rating={4} />
                    </span>
                    <span className="ms-4">{(totalFourStart * 100) / totalReviews}%</span>
                </div>
                <div>
                    <span className="text-warning">
                        <Ratings rating={3} />
                    </span>
                    <span className="ms-4">{(totalThreeStart * 100) / totalReviews}%</span>
                </div>
                <div>
                    <span className="text-warning">
                        <Ratings rating={2} />
                    </span>
                    <span className="ms-4">{(totalTwoStart * 100) / totalReviews}%</span>
                </div>
                <div>
                    <span className="text-warning">
                        <Ratings rating={1} />
                    </span>
                    <span className="ms-4">{(totalOneStart * 100) / totalReviews}%</span>
                </div>
            </Col>
        </Row>
    )
}

export default RatingProgressBar