// import node module libraries
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Card, Form, Image } from 'react-bootstrap';

// import widget/custom components
import { FormSelect, Ratings } from 'widgets';

// import data files
import WhatMenteesSayData from 'data/marketing/mentor/WhatMenteesSayData';

const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = 0;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentItems(currentItems);
    }, [currentPage, items, itemsPerPage]);

    return {
        currentItems,
        currentPage,
        setCurrentPage,
    };
};


const WhatMenteesSay = () => {
    const itemsPerPage = 2;
    const { currentItems, currentPage, setCurrentPage } = usePagination(WhatMenteesSayData, itemsPerPage);
    const sortByOptions = [
        { value: 'Recommended', label: 'Recommended' },
        { value: 'Most Recent', label: 'Workshop' },
    ];
    return (
        <Card >
            <Card.Body className=" p-md-5">
                <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-2">
                    <div>
                        <h3 className="mb-0">What mentees say</h3>
                    </div>
                    <div>
                        <Form>
                            <Form.Group className="d-flex flex-row align-items-center gap-2">
                                <Form.Label className="form-label text-nowrap mb-0">Sort by</Form.Label>
                                <Form.Control
                                    as={FormSelect}
                                    placeholder="Select"
                                    options={sortByOptions}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">
                    {currentItems.map((item, index) => {
                        return (
                            <div key={index} className="py-4 d-flex flex-column gap-5 border-bottom">
                                {/* Mentees' Testimonial */}
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex flex-row justify-content-between align-items-md-center">
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <div>
                                                <Image src={item.menteeImage} alt={item.menteeName} className="avatar avatar-lg rounded-circle" />
                                            </div>
                                            <div>
                                                <h4 className="mb-1">{item.menteeName}</h4>
                                                <div className="d-flex flex-md-row flex-column gap-md-2 align-items-md-center lh-1">
                                                    <span className='text-warning'>
                                                        <Ratings rating={4.5} size='0.94rem' />
                                                    </span>
                                                    <span>
                                                        <small className="fw-medium">{item.date}</small>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <small>Plan:</small>{' '}
                                            <small className="border-bottom">{item.plan}</small>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0">{item.text}</p>
                                    </div>
                                </div>
                                {/* Mentor's Reply */}
                                {item.mentorImage &&
                                    <div className="d-flex flex-column gap-3 ps-md-8">
                                        <div className="d-flex flex-row gap-3 align-items-center">
                                            <div>
                                                <Image src={item.mentorImage} alt="avatar 4" className="avatar avatar-lg rounded-circle" />
                                            </div>
                                            <div className="d-flex flex-column gap-1">
                                                <h4 className="mb-1">{item.mentorName}</h4>
                                                <div>
                                                    <span className="rounded-pill badge text-success-emphasis bg-success-subtle border border-success align-items-center fs-6">Mentor</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mb-0">{item.replyText}</p>
                                        </div>
                                    </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='mt-3'>
                    {currentItems.length >= WhatMenteesSayData.length ? 'No more records' :
                        <Link href="#" scroll={false} onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-outline-primary" >
                            Load more reviews
                        </Link>
                    }
                </div>

            </Card.Body>
        </Card>
    )
}

export default WhatMenteesSay