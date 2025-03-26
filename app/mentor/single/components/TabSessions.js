// import node module libraries
import Link from "next/link";
import { useState } from 'react';
import { Form, ListGroup } from "react-bootstrap";

const TabSessions = () => {
    const [selected, setSelected] = useState(1)
    return (
        <div className="d-flex flex-column gap-4">
            <ListGroup>
                <ListGroup.Item className="list-group-item-action p-3">
                    <Form.Check name="group1" type="radio" id="introductory-call">
                        <Form.Check.Input
                            type="radio"
                            name="session"
                            className="me-1"
                            value={1}
                            onChange={(e) => setSelected(e.target.value)}
                            checked={parseInt(selected) === 1}
                        />
                        <Form.Check.Label>
                            <span className="d-flex flex-column">
                                <span className="fs-5 text-dark fw-semibold">Introductory Call</span>
                                <span className="">20 minutes, $39 per session</span>
                            </span>
                        </Form.Check.Label>
                    </Form.Check>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action p-3">
                    <Form.Check name="group1" type="radio" id="session-name-call">
                        <Form.Check.Input
                            type="radio"
                            name="session"
                            className="me-1"
                            value={2}
                            onChange={(e) => setSelected(e.target.value)}
                            checked={parseInt(selected) === 2}
                        />
                        <Form.Check.Label>
                            <span className="d-flex flex-column">
                                <span className="fs-5 text-dark fw-semibold">Session Name with Call</span>
                                <span className="">30 minutes, $89 per session</span>
                            </span>
                        </Form.Check.Label>
                    </Form.Check>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action p-3">
                    <Form.Check name="group1" type="radio" id="session-name-call-2">
                        <Form.Check.Input
                            type="radio"
                            name="session"
                            className="me-1"
                            value={3}
                            onChange={(e) => setSelected(e.target.value)}
                            checked={parseInt(selected) === 3}
                        />
                        <Form.Check.Label>
                            <span className="d-flex flex-column">
                                <span className="fs-5 text-dark fw-semibold">Session Name with Call</span>
                                <span className="">30 minutes, $89 per session</span>
                            </span>
                        </Form.Check.Label>
                    </Form.Check>
                </ListGroup.Item>
            </ListGroup>
            <div className="d-grid">
                <Link href="#!" className="btn btn-primary">Book Now</Link>
            </div>
        </div>
    )
}

export default TabSessions