// TestimonialCard4 ( added with v3.0.0 )

// import node module libraries
import { Card, Image } from 'react-bootstrap'
import { mdiFormatQuoteOpen } from '@mdi/js'
import Icon from '@mdi/react'

const TestimonialCard4 = ({ item }) => {
    return (
        <Card className="mb-6 mb-lg-0">
            <Card.Body className="p-6">
                <Icon
                    path={mdiFormatQuoteOpen}
                    className="text-light-primary lh-1 mb-3 d-block"
                    size={2}
                />
                <p className="fs-3 text-dark fw-semi-bold">
                    {item.content}
                </p>
                <div className="d-flex mt-4 align-items-center">
                    <Image
                        src={item.image}
                        alt=""
                        className="avatar avatar-md rounded-circle"
                    />
                    <div className="ms-2">
                        <h5 className="text-primary mb-0">{item.name}</h5>
                        <p className="mb-0 fs-6">{item.designation}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TestimonialCard4