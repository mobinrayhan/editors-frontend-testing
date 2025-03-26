// import node module libraries
import { Card, Image } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

// import utility file
import { numberWithCommas } from 'helper/utils';

const StudentInstructorInfoCard = ({ instructor }) => {
    return (
        <Card className="mb-5">
            <Card.Body>
                <div className="text-center">
                    <Image
                        src={instructor.image}
                        className="rounded-circle avatar-xl mb-3"
                        alt=""
                    />
                    <h4 className="mb-0">{instructor.name}</h4>
                    <p className="mb-0">{instructor.topic}</p>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2 mt-4">
                    <span>Students</span>
                    <span className="text-dark">
                        {numberWithCommas(instructor.students)}
                    </span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-2">
                    <span>Instructor Rating</span>
                    <span className="text-warning">
                        {instructor.rating}{' '}
                        <Icon path={mdiStar} size={0.6} className="mb-1" />{' '}
                    </span>
                </div>
                <div className="d-flex justify-content-between pt-2">
                    <span>Courses</span>
                    <span className="text-dark"> {instructor.courses} </span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default StudentInstructorInfoCard