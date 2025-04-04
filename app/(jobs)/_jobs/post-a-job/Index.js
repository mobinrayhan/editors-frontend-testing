'use client'

// import node module libraries
import { Col, Row, Container, Form } from 'react-bootstrap';

// import sub components 
import JobPosterInfo from './components/JobPosterInfo';
import JobInfo from './components/JobInfo';
import CompanyInfo from './components/CompanyInfo';

const PostAJob = () => {
  return (
    <main>
      <section className="py-6 py-lg-12 bg-white">
        <Container>
          <Row>
            <Col md={12} lg={5}>
              <div className="mb-12">
                <h1 className="display-4 mb-3 fw-bold">Post a job today</h1>
                <p className="mb-0 lead">Ready to post a job for your company? Choose your job type below and fill all the job information</p>
              </div>
            </Col>
          </Row>
          {/* form */}
          <Form>
            <JobPosterInfo />
            <hr className="my-10" />
            <JobInfo />
            <hr className="my-10" />
            <CompanyInfo />
          </Form>
        </Container>
      </section>
    </main>
  )
}

export default PostAJob