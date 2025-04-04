// import node module libraries
import { Row, Col } from 'react-bootstrap';

// import widget/custom components
import { StatRightBadge } from 'widgets';

export const Stats3 = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatRightBadge
                        title="Revenue"
                        subtitle="Earning this month"
                        value="$467.34"
                        badgeValue="$203.23"
                        colorVariant="success"
                    />
                </Col>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatRightBadge
                        title="Students Enrollments"
                        subtitle="New this month"
                        value="12,000"
                        badgeValue="120+"
                        colorVariant="info"
                    />
                </Col>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatRightBadge
                        title="Courses Rating"
                        subtitle="Rating this month"
                        value="4.80"
                        badgeValue="10+"
                        colorVariant="warning"
                    />
                </Col>
            </Row>
        </section>
    )
}


export const Stats3Code = `
// import node module libraries
import { Row, Col } from 'react-bootstrap';

// import widget/custom components
import { StatRightBadge } from 'widgets';

export const Stats3Example = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatRightBadge
                        title="Revenue"
                        subtitle="Earning this month"
                        value="$467.34"
                        badgeValue="$203.23"
                        colorVariant="success"
                    />
                </Col>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatRightBadge
                        title="Students Enrollments"
                        subtitle="New this month"
                        value="12,000"
                        badgeValue="120+"
                        colorVariant="info"
                    />
                </Col>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatRightBadge
                        title="Courses Rating"
                        subtitle="Rating this month"
                        value="4.80"
                        badgeValue="10+"
                        colorVariant="warning"
                    />
                </Col>
            </Row>
        </section>
    )
}`.trim();