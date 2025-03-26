'use client'

// import node module libraries
import { Col, Row, Image } from 'react-bootstrap';

// import sub components 
import CommonHeaderTabs from '../components/CommonHeaderTabs';

// import data files
import ComapniesListData from 'data/marketing/jobs/CompaniesListData';

const Benifits = () => {
  const data = ComapniesListData[0]
  const benefits = [
    { title: 'Job Training', icon: '/images/job/job-training.svg' },
    { title: 'Health Insurance', icon: '/images/job/health-insurance.svg' },
    { title: 'Soft Skill Training', icon: '/images/job/skill-training.svg' },
    { title: 'Cafeteria', icon: '/images/job/cafeteria.svg' },
    { title: 'Team Outings', icon: '/images/job/team-outings.svg' },
    { title: 'Work From Home', icon: '/images/job/work-from-home.svg' },
    { title: 'Free Transport', icon: '/images/job/free-transport.svg' },
    { title: 'Education Assistance', icon: '/images/job/education-assistance.svg' },
    { title: 'Child care', icon: '/images/job/child-care.svg' },
    { title: 'Gymnasium', icon: '/images/job/gymnasiums.svg' },
    { title: 'Free Food', icon: '/images/job/free-food.svg' },
    { title: 'International Relocation', icon: '/images/job/international-relocation.svg' }
  ]
  return (
    <CommonHeaderTabs data={data}>
      <Row className="mt-6">
        <Col md={12}>
          <h2 className="mb-4">Employee Benefits</h2>
          <Row className="row-cols-2 row-cols-lg-5 row-cols-md-4 g-2 g-lg-3">
            {benefits.map((item, index) => {
              return (
                <Col xs key={index}>
                  <div className="text-center my-5">
                    <Image src={item.icon} alt="" className="mb-2" />
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </CommonHeaderTabs>
  )
}

export default Benifits