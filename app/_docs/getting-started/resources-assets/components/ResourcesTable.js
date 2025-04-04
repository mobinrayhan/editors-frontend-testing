// import node module libraries
import { Card, Table } from "react-bootstrap";
import Link from "next/link";

const ResourcesTable = ({ data }) => {
  return (
    <Card className="border shadow-none ">
      <div className="table-responsive">
        <Table className="mb-0">
          <thead className="table-light">
            <tr>
              <th style={{ width: "30%" }}>Name of installed package</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="text-dark fw-semibold">{item.name}</td>
                <td>
                  <Link href={item.link} target="_blank">
                    {item.link} <i className="fe fe-external-link"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default ResourcesTable;
