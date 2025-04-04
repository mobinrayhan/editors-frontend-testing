// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatTopIcon } from 'widgets';

export const Stats4 = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatTopIcon
                        title="Earning this month"
                        value="$3,210"
                        iconName="folder"
                        colorVariant="primary"
                        progress={65}
                    />
                </Col>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatTopIcon
                        title="Account Balance"
                        value="$3,800"
                        iconName="shopping-bag"
                        colorVariant="danger"
                        progress={65}
                    />
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <StatTopIcon
                        title="Life Time Sales"
                        value="$10,800"
                        iconName="send"
                        colorVariant="warning"
                        progress={65}
                    />
                </Col>
            </Row>
        </section>
    );
}

export const Stats4Code = `
// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatTopIcon } from 'widgets';

export const Stats4Example = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatTopIcon
                        title="Earning this month"
                        value="$3,210"
                        iconName="folder"
                        colorVariant="primary"
                        progress={65}
                    />
                </Col>
                <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                    <StatTopIcon
                        title="Account Balance"
                        value="$3,800"
                        iconName="shopping-bag"
                        colorVariant="danger"
                        progress={65}
                    />
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <StatTopIcon
                        title="Life Time Sales"
                        value="$10,800"
                        iconName="send"
                        colorVariant="warning"
                        progress={65}
                    />
                </Col>
            </Row>
        </section>
    );
}`.trim();