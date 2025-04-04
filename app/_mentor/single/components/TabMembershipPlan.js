// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { ListGroup } from "react-bootstrap"

// import widget/custom components
import { SignUpModalPopup } from "widgets"

const TabMembershipPlan = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="d-flex flex-column gap-4">
            <h3 className="mb-0">
                Book a <span className="text-success">Free 1:1 Trial</span>{' '}
                : To Plan Your Mentorship with Jitu Chauhan
            </h3>
            <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column gap-1">
                    <span>Starting from</span>
                    <div className="d-flex flex-row align-items-center gap-1">
                        <h3 className="mb-0 h2">$125.00</h3>
                        <small className="text-gray-800 fw-medium">/ Month</small>
                    </div>
                </div>
                <div className="d-flex flex-column gap-2">
                    <div>
                        <h4 className="mb-1">Every Month Of Mentorship</h4>
                    </div>
                    <ListGroup as="ul" bsPrefix="list-unstyled" className="mb-0 d-flex flex-column gap-2">
                        <ListGroup.Item as="li" className="d-flex flex-row gap-2">
                            <span>
                                <svg className="bi bi-person-video text-primary" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" /></svg>
                            </span>
                            <span>1 session/week (1:1 Sessions)</span>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex flex-row gap-2">
                            <span>
                                <svg className="bi bi-chat-left-dots-fill text-primary" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>
                            </span>
                            <span>Within 12hours (Chat Support)</span>
                        </ListGroup.Item>
                        <ListGroup.Item as="li" className="d-flex flex-row gap-2">
                            <span>
                                <svg className="bi bi-list-task text-primary" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" fillRule="evenodd" /><path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" /><path d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" fillRule="evenodd" /></svg>
                            </span>
                            <span>Everyday (Tasks & Followup)</span>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>

            <div className="d-flex flex-column gap-3">
                <Link href="#!" className="btn btn-primary d-grid" onClick={() => setModalShow(true)}>Book a Free Trial</Link>
                <span className="text-success fw-medium">Next Available: Tuesday June 05 2025</span>
            </div>

            <SignUpModalPopup
                show={modalShow}
                onHide={() => setModalShow(false)} />

        </div>
    )
}

export default TabMembershipPlan