// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';

const CTA2Buttons = ({ title, description, btntext1, btnlink1, btntext2, btnlink2 }) => {
	return (
		<section
				className="py-lg-16 py-10 bg-gray"
				style={{
					background: `url('/images/background/course-graphics.svg')`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'top center'
				}}
			>
				<Container>
					{/*  row  */}
					<Row className="justify-content-center text-center">
						<Col md={9} sm={12}>
							{/* heading  */}
							<h2 className="display-4"> {title}
								
							</h2>
							<p className="lead px-lg-12 mb-6">{description}
								
							</p>
							{/* button */}
							<div className="d-grid d-md-block">
								<Link
									href={btnlink1}
									className="btn btn-primary mb-2 mb-md-0"
								>{btntext1}
									
								</Link>{' '}
								<Link href={btnlink2} className="btn btn-info">
									{btntext2}
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
	);
};
export default CTA2Buttons;
