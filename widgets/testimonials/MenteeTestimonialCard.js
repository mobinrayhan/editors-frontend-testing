// import node module libraries
import { Badge, Card, Image } from 'react-bootstrap'

const MenteeTestimonialCard = ({ testimonial }) => {
    return (
        <Card className="card-light-primary rounded-4">
            <Card.Body className="d-flex flex-column gap-3">
                <div className="d-flex flex-row gap-3 align-items-center">
                    <Image src={testimonial.menteeImage} alt="avatar 1" className="avatar avatar-md rounded-circle" />
                    <h5 className="mb-0">{testimonial.menteeName}</h5>
                </div>
                <div>
                    <p className="mb-0 fst-italic fs-4 pe-xxl-5" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                </div>
                <div className="d-flex flex-xl-row gap-2 align-items-center bg-light rounded-pill px-3 py-2">
                    <Image src={testimonial.mentorImage} alt="avatar 2" className="avatar avatar-md rounded-circle d-lg-none d-md-block d-xl-block" />
                    <div>
                        <div className="d-flex flex-row gap-2 align-items-center">
                            <h4 className="mb-0">{testimonial.mentorName}</h4>
                            <Badge bg="success-subtle" className="rounded-pill fs-6 px-2 text-success-emphasis border border-success" >Mentor</Badge>
                        </div>
                        <span className="fs-6">{testimonial.role}</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MenteeTestimonialCard