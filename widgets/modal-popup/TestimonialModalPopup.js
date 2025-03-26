// import node module libraries
import { Badge, Image, Modal } from 'react-bootstrap'

// import data files
import TestimonialsData from 'data/marketing/mentor/TestimonialsData';

const TestimonialModalPopup = (props) => {
    const testimonial = TestimonialsData.filter(item => item.id === props.activetestimonial)[0]
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="d-flex flex-row gap-3 align-items-center">
                        <Image src={testimonial?.menteeImage} alt="avatar 1" className="avatar avatar-md rounded-circle" />
                        <h5 className="mb-0">{testimonial?.menteeName}</h5>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='mb-4'>
                    <p className="mb-0 fst-italic fs-4 pe-xxl-5" dangerouslySetInnerHTML={{ __html: testimonial?.text }} />
                </div>
                <div className="d-flex flex-xl-row gap-2 align-items-center bg-light rounded-pill px-3 py-2">
                    <Image src={testimonial?.mentorImage} alt="avatar 2" className="avatar avatar-md rounded-circle d-lg-none d-md-block d-xl-block" />
                    <div>
                        <div className="d-flex flex-row gap-2 align-items-center">
                            <h4 className="mb-0">{testimonial?.mentorName}</h4>
                            <Badge bg="success-subtle" className="rounded-pill fs-6 px-2 text-success-emphasis border border-success" >Mentor</Badge>
                        </div>
                        <span className="fs-6">{testimonial?.role}</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default TestimonialModalPopup