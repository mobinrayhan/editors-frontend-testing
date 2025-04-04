// import node module libraries
import { Col, Row } from 'react-bootstrap';
import { mdiAccountMultiple, mdiImageMultiple, mdiMessageReplyText, mdiTextBoxMultiple } from '@mdi/js';

// import widget/custom components
import { StatRightBGIcon } from 'widgets';

export const Stats5 = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="TOTAL POSTS"
                        value="2,000"
                        summary="100 Last 30 Days"
                        iconName={mdiTextBoxMultiple}
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="ASSETS"
                        value="367"
                        summary="300+ Media Object"
                        iconName={mdiImageMultiple}
                        iconColorVariant="warning"
                        classValue="mb-4"
                    />
                </Col>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="USERS"
                        value="13,234"
                        summary="1.5k in 30Days"
                        iconName={mdiAccountMultiple}
                        iconColorVariant="success"
                        classValue="mb-4"
                    />
                </Col>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="COMMENTS"
                        value="120"
                        summary="20+ Comments"
                        iconName={mdiMessageReplyText}
                        iconColorVariant="info"
                        classValue="mb-4"
                    />
                </Col>
            </Row>
        </section>
    );
}

export const Stats5Code = `
// import node module libraries
import { Col, Row } from 'react-bootstrap';
import { mdiAccountMultiple, mdiImageMultiple, mdiMessageReplyText, mdiTextBoxMultiple } from '@mdi/js';

// import widget/custom components
import { StatRightBGIcon } from 'widgets';

export const Stats5 = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="TOTAL POSTS"
                        value="2,000"
                        summary="100 Last 30 Days"
                        iconName={mdiTextBoxMultiple}
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="ASSETS"
                        value="367"
                        summary="300+ Media Object"
                        iconName={mdiImageMultiple}
                        iconColorVariant="warning"
                        classValue="mb-4"
                    />
                </Col>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="USERS"
                        value="13,234"
                        summary="1.5k in 30Days"
                        iconName={mdiAccountMultiple}
                        iconColorVariant="success"
                        classValue="mb-4"
                    />
                </Col>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightBGIcon
                        title="COMMENTS"
                        value="120"
                        summary="20+ Comments"
                        iconName={mdiMessageReplyText}
                        iconColorVariant="info"
                        classValue="mb-4"
                    />
                </Col>
            </Row>
        </section>
    );
}`.trim();