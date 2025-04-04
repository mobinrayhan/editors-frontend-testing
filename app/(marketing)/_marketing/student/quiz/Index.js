'use client'

// import node module libraries
import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';

// import profile layout wrapper
import ProfileLayout from 'layouts/marketing/student/ProfileLayout';

const Quiz = () => {
  return (
    <ProfileLayout>    
      <Card className="border-0">
        <Card.Body className="p-10">
          <div className="text-center">
            <Image src='/images/svg/survey-img.svg' alt="" className="img-fluid" />
            <div className="px-lg-18">
              <h1>Welcome to Quiz </h1>
              <p className="mb-0">Engage live or asynchronously with quiz and poll questions that participants complete at their own pace.</p>
              <Link href="/marketing/student/quiz-start" className="btn btn-primary mt-4">Start Your Quiz</Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </ProfileLayout>
  )
}

export default Quiz;
