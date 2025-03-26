// import node module libraries
import Link from 'next/link';
import { Image, Card, Badge } from 'react-bootstrap';

// import widget/custom components
import { Ratings } from 'widgets';

// import utility file
import { numberWithCommas } from 'helper/utils';

const GetEnrolledCourseCard = ({ item }) => {
	const badgeBG = () => {
		switch (item.level) {
			case 'Intermediate':
				return "info-soft"
			case 'Beginner':
				return "success-soft"
			case 'Advance':
				return "danger-soft"
			default:
				return "primary-soft"
		}
	}

	return (
		<Card className="mb-4 card-hover">
			{/* Card Image */}
			<Link href={item.link} className="card-img-top">
				<Image src={item.image} alt="" className="card-img-top rounded-top-md" />
			</Link>
			{/* Card Body */}
			<Card.Body>
				<div className="d-flex justify-content-between align-items-center mb-3">
					<Badge bg={badgeBG()}>{item.level}</Badge>
					<Link href={item.link} className="text-muted fs-5"><i className="fe fe-heart align-middle"></i></Link>
				</div>
				<h4 className="mb-2 text-truncate-line-2 "><Link href={item.link} className="text-inherit">{item.title}</Link></h4>
				<small>By: {item.instructor_name}</small>
				<div className="lh-1 mt-3">
					<span className="text-warning me-1">
						<Ratings rating={item.rating} />
					</span>
					<span className="text-warning me-1">{item.rating.toFixed(1)}</span>
					<span className="fs-6 text-muted">({numberWithCommas(item.ratingby)})</span>
				</div>
			</Card.Body>
			{/* Card Footer */}
			<Card.Footer>
				<div className="row align-items-center g-0">
					<div className="col">
						<h5 className="mb-0">${item.price}</h5>
					</div>
					<div className="col-auto">
						<Link href={item.link} className="text-inherit">
							<i className="fe fe-shopping-cart text-primary me-2"></i>Get Enrolled
						</Link>
					</div>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default GetEnrolledCourseCard;
