// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import bootstrap icons
import { PlayFill, StarFill, Infinity as Infinite } from 'react-bootstrap-icons';

const EducationFeaturesWithBullets = () => {

  const features = [
    {
      id: 1,
      icon: <PlayFill size={20} />,
      title: 'Learn in- skills with over 24,000 video courses'
    },
    {
      id: 2,
      icon: <StarFill size={20} />,
      title: 'Choose courses taught by real-world experts'
    },
    {
      id: 3,
      icon: <Infinite size={20} />,
      title: 'Learn at your own pace, with lifetime access on mobile and desktop'
    }
  ]

  return (
    <section className="py-4 bg-gray-100">
      <Container>
        <Row>
          <Col xl={{ offset: 1, span: 10 }} md={12} xs={12} >
            <Row>
              {features.map((item, index) => {
                return (
                  <Col xl={4} md={4} xs={12} key={index}>
                    <div className="d-flex mb-4 mb-md-0">
                      <div className="icon icon-shape rounded icon-md bg-gray-300 p-4">
                        <span className='fs-4 text-gray-600'>{item.icon}</span>
                      </div>
                      <div className="ms-3">
                        <p className="mb-0 text-dark fw-medium">Learn in- skills with over 24,000 video courses</p>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EducationFeaturesWithBullets