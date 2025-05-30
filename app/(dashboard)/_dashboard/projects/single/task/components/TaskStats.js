// import node module libraries
import { Col, Row } from "react-bootstrap";

// import widget/custom components
import { StatCenterInfo } from "widgets";

const TaskStats = () => {
  return (
    <Row>
      <Col md={6} xl={3} xs={12}>
        {/* task summary stat card  */}
        <StatCenterInfo
          title="Task Summary"
          value={50}
          valueColorVariant="primary"
          contentHTML="Total Task Count"
        />
      </Col>
      <Col md={6} xl={3} xs={12}>
        {/* in progress stat card  */}
        <StatCenterInfo
          title="In Progress"
          value={12}
          valueColorVariant="info"
          contentHTML='<span className="text-dark fw-semi-bold">6</span> In Progress'
        />
      </Col>
      <Col md={6} xl={3} xs={12}>
        {/* completed stat card  */}
        <StatCenterInfo
          title="Completed"
          value={30}
          valueColorVariant="success"
          contentHTML='<span className="text-dark fw-semi-bold">8</span> Today Completed'
        />
      </Col>
      <Col md={6} xl={3} xs={12}>
        {/* overdue stat card  */}
        <StatCenterInfo
          title="Overdue"
          value={8}
          valueColorVariant="danger"
          contentHTML='<span className="text-dark fw-semi-bold">4</span> Yesterday'
        />
      </Col>
    </Row>
  );
};
export default TaskStats;
