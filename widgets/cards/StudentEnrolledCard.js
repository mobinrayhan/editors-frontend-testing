// import node module libraries
import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';

const StudentEnrolledCard = ({ student }) => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <div className="text-center">
                    <Image
                        src={student.image}
                        className="rounded-circle avatar-xl mb-3"
                        alt=""
                    />
                    <h4 className="mb-1">{student.name}</h4>
                    <p className="mb-0 fs-6">
                        <i className="fe fe-map-pin me-1"></i>
                        {student.locations}
                    </p>
                    <Link href="#" scroll={false} className="btn btn-sm btn-outline-secondary mt-3">
                        Message
                    </Link>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                    <span>Enrolled</span>
                    <span className="text-dark">{student.joined}</span>
                </div>
                <div className="d-flex justify-content-between pt-2 fs-6">
                    <span>Progress</span>
                    <span className="text-success">{student.progress}%</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default StudentEnrolledCard