'use client'

// import node module libraries
import Link from 'next/link';
import { Card, Table, Image } from 'react-bootstrap';

// import data files
import QuizListData from 'data/marketing/quiz/QuizListData';

// import profile layout wrapper
import ProfileLayout from 'layouts/marketing/instructor/ProfileLayout';

const Quiz = () => {
  return (
    <ProfileLayout>
      <Card className="mb-4">
        {/* Card header */}
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="">
            <h3 className="mb-0">Quiz</h3>
          </div>
          <div>
            <Link href="#" className="btn btn-primary btn-sm">Add New Quiz</Link>
          </div>
        </Card.Header>
        {/* Card body */}
        <Card.Body className="p-0">
            <Table responsive className="table-centered">
              <tbody>
                {QuizListData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td >
                        <div className="d-flex align-items-center">
                          {/* quiz img */}
                          <Link href="/marketing/instructor/quiz-single/" > <Image src={item.image} alt="" className="rounded img-4by3-lg" /></Link>
                          {/* quiz content */}
                          <div className="ms-3">
                            <h4 className="mb-2">
                              <Link href="/marketing/instructor/quiz-single/" className="text-inherit">{item.title}</Link>
                            </h4>
                            <div>
                              <span><span className="me-2 align-middle"><i className="fe fe-list"></i></span>{item.questions} Questions</span>
                              <span className="ms-2"><span className="me-2 align-middle"><i className="fe fe-clock"></i></span>{item.duration}</span>
                              <Link href="/marketing/instructor/quiz-result/" className="ms-2 text-body"><span
                                className="me-2 align-middle"><i className="fe fe-file-text"></i></span>Result</Link>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {/* icon */}
                        <div>
                          <Link href="#" className="text-inherit"><i className="fe fe-settings"></i></Link>
                          <Link href="#" className="ms-2 link-danger"><i className="fe fe-trash-2"></i></Link>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
        </Card.Body>
      </Card>
    </ProfileLayout >
  )
}

export default Quiz;
