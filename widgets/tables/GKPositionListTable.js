import Link from "next/link";
import { Col, Row, Table } from "react-bootstrap";

const GKPositionListTable = ({ item }) => {
  return (
    <Row className="my-5">
      <Col xs={12}>
        <div className="mb-5">
          <h2 className="fw-bold">{item.department}</h2>
          <p className="mb-0">{item.description}</p>
        </div>
        <Table responsive hover className="table-lg fs-4">
          <tbody>
            {item.jobtitles.map((jobitem, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link href="#" scroll={false} className="text-inherit">
                      {jobitem.designation}
                    </Link>
                  </td>
                  <td>
                    {jobitem.location}{" "}
                    {jobitem.remote ? (
                      <span className="text-muted"> (Remote)</span>
                    ) : (
                      ""
                    )}
                  </td>
                  <td className="text-end">
                    <Link href="#" scroll={false} className="text-muted">
                      <i className="fe fe-chevron-right "></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default GKPositionListTable;
