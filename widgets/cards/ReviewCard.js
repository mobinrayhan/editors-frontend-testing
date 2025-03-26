// import node module libraries
import Link from 'next/link'
import { Image } from 'react-bootstrap'

// import widget/custom components
import Ratings from 'widgets/ratings/Ratings'

const ReviewCard = ({ item }) => {
    return (
        <div className="d-flex border-bottom pb-4 mb-4" >
            <Image
                src={item.image}
                alt=""
                className="rounded-circle avatar-lg"
            />
            <div className=" ms-3">
                <h4 className="mb-1">
                    {item.student}
                    <span className="ms-1 fs-6 text-muted">{item.postedon}</span>
                </h4>
                <div className="fs-6 mb-2 text-warning">
                    <Ratings rating={item.rating} />
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: item.review
                    }}
                />
                <div className="d-lg-flex">
                    <p className="mb-0">Was this review helpful?</p>
                    <Link href="#" className="btn btn-xs btn-primary ms-lg-3">
                        Yes
                    </Link>
                    <Link href="#" className="btn btn-xs btn-outline-secondary ms-1">
                        No
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard