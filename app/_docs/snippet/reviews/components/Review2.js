// import node module libraries
import { Card, Form } from 'react-bootstrap';

// import widget/custom components
import { RatingProgressBar, ReviewCard } from 'widgets';

// import data files
import { Reviews } from 'data/courses/CourseIndexData';

export const Review2 = () => {
    return (
        <section className='p-4 bg-light rounded-3'>
            <Card className="p-4 border-0">
                <div className="mb-3">
                    <h3 className="mb-4">How students rated this courses</h3>
                    <RatingProgressBar
                        totalFiveStart={24}
                        totalFourStart={16}
                        totalThreeStart={5}
                        totalTwoStart={2}
                        totalOneStart={3}
                    />
                </div>
                <hr className="my-5" />
                <div className="mb-3">
                    <div className="d-lg-flex align-items-center justify-content-between mb-5">
                        <div className="mb-3 mb-lg-0">
                            <h3 className="mb-0">Reviews</h3>
                        </div>
                        <div>
                            <Form className="form-inline">
                                <Form.Group className="d-flex align-items-center me-2" controlId="formBasicEmail" >
                                    <span className="position-absolute ps-3">
                                        <i className="fe fe-search"></i>
                                    </span>
                                    <Form.Control type="search" placeholder="Search Review" className=" ps-6" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    {Reviews.map((item, index) => (<ReviewCard item={item} key={index} />))}
                </div>
            </Card>
        </section>
    );
}


export const Review2Code = `
// import node module libraries
import { Card, Form } from 'react-bootstrap';

// import widget/custom components
import { RatingProgressBar, ReviewCard } from 'widgets';

// import data files
import { Reviews } from 'data/courses/CourseIndexData';

export const Review2Example = () => {
    return (
        <section className='p-4 bg-light rounded-3'>
            <Card className="p-4 border-0">
                <div className="mb-3">
                    <h3 className="mb-4">How students rated this courses</h3>
                    <RatingProgressBar
                        totalFiveStart={24}
                        totalFourStart={16}
                        totalThreeStart={5}
                        totalTwoStart={2}
                        totalOneStart={3}
                    />
                </div>
                <hr className="my-5" />
                <div className="mb-3">
                    <div className="d-lg-flex align-items-center justify-content-between mb-5">
                        <div className="mb-3 mb-lg-0">
                            <h3 className="mb-0">Reviews</h3>
                        </div>
                        <div>
                            <Form className="form-inline">
                                <Form.Group className="d-flex align-items-center me-2" controlId="formBasicEmail" >
                                    <span className="position-absolute ps-3">
                                        <i className="fe fe-search"></i>
                                    </span>
                                    <Form.Control type="search" placeholder="Search Review" className=" ps-6" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    {Reviews.map((item, index) => (<ReviewCard item={item} key={index} />))}
                </div>
            </Card>
        </section>
    );
}`.trim();