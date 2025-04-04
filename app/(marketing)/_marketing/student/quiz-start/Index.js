'use client'

// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Card, Image } from 'react-bootstrap';

// import sub components 
import QuizTimer from './components/QuizTimer';
import QuizProgress from './components/QuizProgress';
import QuizPagination from './components/QuizPagination';
import Question from '../../instructor/quiz-single/components/Question';

// import profile layout wrapper
import ProfileLayout from 'layouts/marketing/student/ProfileLayout';

// import data files
import { QuizData } from 'data/marketing/quiz/QuizData';

// import hooks
import useMounted from 'hooks/useMounted';

const QuizStart = () => {
  const hasMounted = useMounted();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = QuizData.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(QuizData.length / recordsPerPage); // nPages = total number of pages

  return (
    <ProfileLayout>
      <Card className="mb-4">
        <Card.Body>
          {/* Question Title + Timer */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
            <div className="d-flex align-items-center">
              {/* quiz img */}
              <Link href="#"> <Image src='/images/course/course-react.jpg' alt="" className="rounded img-4by3-lg" /></Link>
              {/* quiz content */}
              <div className="ms-3">
                <h3 className="mb-0"><Link href="#" className="text-inherit">React Basic Quiz </Link></h3>
              </div>
            </div>
            {/* Timer */}
            <QuizTimer hours={0} minutes={0} seconds={55} />
          </div>

          {/* Progress */}
          <QuizProgress currentQuestion={currentRecords[0]?.id} totalQuestion={QuizData.length} />

          {/* Question(s) */}
          <div className="mt-5">
            <span>Question {currentRecords[0]?.id}</span>

            {hasMounted && <Question item={currentRecords[0]} />}
          </div>

        </Card.Body>
      </Card>

      {/* Quiz Pagination */}
      <QuizPagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </ProfileLayout>
  )
}

export default QuizStart;
