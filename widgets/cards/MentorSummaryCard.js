// import node module libraries
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { ChatLeftDotsFill, ListTask, PatchCheckFill, PeopleFill, PersonVideo, StarFill } from 'react-bootstrap-icons'

// import widget/custom components
import { SignUpModalPopup } from "widgets"

const MentorSummaryCard = ({ mentor }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Row className="border rounded-3 g-0 mb-3">
            <Col xxl={9} xl={8} xs={12}>
                <Row className="p-lg-5 p-4 gy-5">
                    <Col xl={3} md={3}>
                        <div>
                            <Link href="/marketing/mentor/single">
                                <Image src={mentor.image} alt="mentor 1" className="img-fluid w-100 rounded-3" />
                            </Link>
                        </div>
                    </Col>
                    <Col xl={9} md={9}>
                        <div className="d-flex flex-column gap-4">
                            <div>
                                <div className="d-flex flex-row align-items-center gap-2">
                                    <h3 className="mb-0 h2">
                                        <Link href="/marketing/mentor/single" className="text-reset">{mentor.mentorName}</Link>
                                    </h3>
                                    <span ><PatchCheckFill size={16} className='text-success' /> </span>
                                </div>
                                <span className="fw-medium">{mentor.mentorRole}</span>
                            </div>
                            <div>
                                <span>@ {mentor.company}</span> <div className="vr mx-2 text-gray-200"></div>
                                <span>{mentor.experience} yrs Exp.</span>
                            </div>
                            <div className="d-none d-md-block">
                                <p className="mb-0 pe-xl-5 pe-xxl-8">{mentor.description} </p>
                            </div>
                            <div className="gap-2 d-flex flex-wrap">
                                {mentor.skills.map((skill, index) => {
                                    return (<Link href="#" key={index} className="btn btn-tag btn-sm">{skill}</Link>)
                                })}
                            </div>
                            <div className="d-flex flex-row align-items-center gap-4">
                                <div className="d-flex flex-row gap-2 lh-1 align-items-center">
                                    <span><StarFill size={14} className="text-warning align-baseline" />  </span>
                                    <span>  <span className="text-dark fw-bold">{mentor.ratings}</span> ({mentor.reviews} Reviews) </span>
                                </div>
                                <div className="d-flex flex-row gap-2 lh-1 align-items-center">
                                    <span><PeopleFill size={14} className="text-primary align-baseline" /> </span>
                                    <span> <span className="text-dark fw-bold">{mentor.mentees} </span>  Mentees  </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xxl={3} xl={4} xs={12}>
                <div className="p-lg-5 p-4 bg-light d-flex flex-column gap-3 rounded-end-xl-3 rounded-bottom-xl-0 rounded-bottom-md-3 h-100">
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex flex-column gap-1">
                            <span>Starting from</span>
                            <div className="d-flex flex-row align-items-center gap-1">
                                <h3 className="mb-0 h2">${mentor.price}</h3>
                                <small>/ Month</small>
                            </div>
                        </div>
                        <div className="d-flex d-xl-grid gap-2">
                            <Link href="#!" onClick={() => setModalShow(true)} className="btn btn-outline-primary w-50 w-xl-100">Book a Free Trial</Link>
                            <Link href="/marketing/mentor/single" className="btn btn-outline-secondary w-50 w-xl-100">View Profile</Link>
                        </div>
                        <div>
                            <span className="text-success fw-medium">Next Available: Tuesday June 05 2025</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <div>
                            <h4 className="mb-0">Every Month Of Mentorship</h4>
                        </div>
                        <ListGroup as="ul" bsPrefix='list-unstyled' className="mb-0 d-flex flex-column gap-2">
                            <ListGroup.Item as="li">
                                <span><PersonVideo size={16} /> </span>
                                <span>1 session/week (1:1 Sessions)</span>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <span><ChatLeftDotsFill size={16} /> </span>
                                <span>Within 12hours (Chat Support)</span>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <span><ListTask size={16} /> </span>
                                <span>Everyday (Tasks & Followup)</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>

                <SignUpModalPopup
                    show={modalShow}
                    onHide={() => setModalShow(false)} />

            </Col>
        </Row>
    )
}

export default MentorSummaryCard