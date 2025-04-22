"use client";
// Section : Features
// Style : Three Columns Features Section

// import node module libraries
import { Card } from "react-bootstrap";

const FeatureTopIconCard = ({ item }) => {
  return (
    <Card className="mb-4">
      <Card.Body className="p-5">
        <div className="mb-3">{item.icon}</div>
        <h3 className="mb-2">{item.title}</h3>
        <p className="mb-0">{item.description}</p>
      </Card.Body>
    </Card>
  );
};
export default FeatureTopIconCard;
