
// import node module libraries
import React from 'react'
import { Col, Row, ProgressBar, Image } from 'react-bootstrap'
import Link from 'next/link';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';


// import widget/custom components
import { RatingsBiIcon } from 'widgets';

const RatingsReviews = () => {
  return (
    <div className="mb-4">
      <h3 className="mb-4">Ratings &amp; Reviews</h3>
      <Row className="align-items-center mb-4">
        <Col md={4} className="mb-4 mb-md-0">
          {/* rating */}
          <h3 className="display-2 fw-bold">4.5</h3>
          <RatingsBiIcon className="text-success" rating={4.4} />
          <p className="mb-0">595 Verified Buyers</p>
        </Col>
        <Col lg={{ span: 7, offset: 1 }} md={8}>
          {/* progress */}
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3 text-muted"><span className="d-inline-block align-middle text-muted">5</span>
              <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-muted" />
            </div>
            <div className="w-100">
              <ProgressBar variant="success" now={60} style={{ height: '6px' }} />
            </div>
            <span className="text-muted ms-3">420</span>
          </div>
          {/* progress */}
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3 text-muted"><span className="d-inline-block align-middle text-muted">4</span>
              <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-muted" />
            </div>
            <div className="w-100">
              <ProgressBar variant="success" now={50} style={{ height: '6px' }} />
            </div><span className="text-muted ms-3">90</span>
          </div>
          {/* progress */}
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3 text-muted"><span className="d-inline-block align-middle text-muted">3</span>
              <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-muted" />
            </div>
            <div className="w-100">
              <ProgressBar variant="success" now={35} style={{ height: '6px' }} />
            </div><span className="text-muted ms-3">33</span>
          </div>
          {/* progress */}
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3 text-muted"><span className="d-inline-block align-middle text-muted">2</span>
              <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-muted" />
            </div>
            <div className="w-100">
              <ProgressBar variant="warning" now={22} style={{ height: '6px' }} />
            </div><span className="text-muted ms-3">12</span>
          </div>
          {/* progress */}
          <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3 text-muted"><span className="d-inline-block align-middle text-muted">1</span>
              <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-muted" />
            </div>
            <div className="w-100">
              <ProgressBar variant="danger" now={14} style={{ height: '6px' }} />
            </div><span className="text-muted ms-3">40</span>
          </div>
        </Col>
      </Row>
      <div>
        {/* review 1 */}
        <div className="border-top py-4 mt-4">
          <div className="border d-inline-block px-2 py-1 rounded-pill mb-3">
            <span className="text-dark fw-semibold ">4.4 <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-success" /></span>
          </div>
          <p>It's awesome , I never thought about geeks that awesome shoes.very pretty.</p>
          <div>
            <span>James Ennis</span>
            <span className="ms-4">28 Nov 2022</span>
          </div>
        </div>
        {/* review 2 */}
        <div className="border-top py-4">
          <div className="border d-inline-block px-2 py-1 rounded-pill mb-3">
            <span className="text-dark fw-semibold ">5.0 <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-success" /></span>
          </div>
          <p>Quality is more than good that I was expected for buying. I first time
            purchase Geeks shoes &amp; this brand is good. Thanks to Geeks UI delivery
            was faster than fast ...Love Geeks UI</p>
          <div>
            <span>Bradley Mouton</span>
            <span className="ms-4">21 Apr 2022
            </span>
          </div>
        </div>
        {/* review 3 */}
        <div className="border-top py-4 border-bottom">
          <div className="border d-inline-block px-2 py-1 rounded-pill mb-3">
            <span className="text-dark fw-semibold ">4.4 <Icon path={mdiStar} size={0.6} className="ms-1 fs-6 text-success" /></span>
          </div>
          <p>Excellent shoes with original logo , Thanks Geeks UI , Buy these shoes
            without any tension</p>
          <div className="mb-5">
            <Image src='/images/ecommerce/ecommerce-img-1.jpg' alt="" className="avatar-md rounded-2 me-1" />
            <Image src='/images/ecommerce/ecommerce-img-2.jpg' alt="" className="avatar-md rounded-2 me-1" />
            <Image src='/images/ecommerce/ecommerce-img-3.jpg' alt="" className="avatar-md rounded-2 me-1" />
          </div>
          <div>
            {/* text */}
            <span>Kieth J. Watson </span>
            <span className="ms-4">21 May 2022</span>
          </div>
        </div>
        <div className="my-3">
          {/* btn link */}
          <Link href="#" className="fw-semibold">View all 89 reviews</Link>
        </div>
      </div>
    </div>
  )
}

export default RatingsReviews