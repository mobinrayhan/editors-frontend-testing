// Section : Hero Header
// Style : Welcome Text on left and image on right

// import node module libraries
import { Col, Row, Container, Image } from 'react-bootstrap';
import Link from 'next/link';

const HeroHeader = ({
	title = 'Welcome to Geeks UI Learning Application',
	description = 'Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.',
	buttonText1 = 'Browse Courses',
	buttonLink1 = '#',
	buttonText2 = 'Are You Instructor?',
	buttonLink2 = '#'
}) => {
	return (
		<section className="bg-primary">
			<Container>
				{/*  Hero Section  */}
				<Row className="align-items-center g-0">
					<Col xl={5} lg={6} md={12}>
						<div className="py-5 py-lg-0">
							<h1 className="text-white display-4 fw-bold">
								{title}
							</h1>
							<p className="text-white-50 mb-4 lead">
								{description}
							</p>
							<Link href={buttonLink1} scroll={false} className="btn btn-dark">
								{buttonText1}
							</Link>{' '}
							<Link href={buttonLink2} scroll={false} className="btn btn-white">
								{buttonText2}
							</Link>
						</div>
					</Col>
					<Col xl={7} lg={6} md={12} className="text-lg-end text-center">
						<Image src='/images/hero/hero-img.png' alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default HeroHeader;
