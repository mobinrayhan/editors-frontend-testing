// import node module libraries
import { Row, Col } from 'react-bootstrap';

// import widget/custom components
import { StatRightIcon } from 'widgets';

export const Stats6 = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="SALES"
                        value="$10,800"
                        summary="Number of sales"
                        summaryValue="+20.9$"
                        summaryIcon="up"
                        showSummaryIcon
                        iconName="shopping-bag"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>

                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="COURSES"
                        value="2,456"
                        summary="Number of pending"
                        summaryValue="120+"
                        summaryIcon="down"
                        iconName="book-open"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>

                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="STUDENTS"
                        value="1,22,456"
                        summary="Students"
                        summaryValue="+1200"
                        summaryIcon="up"
                        showSummaryIcon
                        iconName="users"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>

                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="INSTRUCTOR"
                        value="22,786"
                        summary="Instructor"
                        summaryValue="+200"
                        summaryIcon="up"
                        showSummaryIcon
                        iconName="user-check"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>
            </Row>
        </section>
    );
};

export const Stats6Code = `
// import node module libraries
import { Row, Col } from 'react-bootstrap';

// import widget/custom components
import { StatRightIcon } from 'widgets';

export const Stats6 = () => {
    return (
        <section className="p-4 bg-light rounded-3">
            <Row>
                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="SALES"
                        value="$10,800"
                        summary="Number of sales"
                        summaryValue="+20.9$"
                        summaryIcon="up"
                        showSummaryIcon
                        iconName="shopping-bag"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>

                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="COURSES"
                        value="2,456"
                        summary="Number of pending"
                        summaryValue="120+"
                        summaryIcon="down"
                        iconName="book-open"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>

                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="STUDENTS"
                        value="1,22,456"
                        summary="Students"
                        summaryValue="+1200"
                        summaryIcon="up"
                        showSummaryIcon
                        iconName="users"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>

                <Col xl={3} lg={6} md={12} sm={12}>
                    <StatRightIcon
                        title="INSTRUCTOR"
                        value="22,786"
                        summary="Instructor"
                        summaryValue="+200"
                        summaryIcon="up"
                        showSummaryIcon
                        iconName="user-check"
                        iconColorVariant="primary"
                        classValue="mb-4"
                    />
                </Col>
            </Row>
        </section>
    );
}`.trim();
