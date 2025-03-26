/**************************************
Component : Brand Logo with Top Heading
***************************************

Available Parameters

logos        : Required, list of the logos in JSON format
title        : Optional, title to show logo section title
limit        : Optional, default -1 i.e. show all logo, if you want to limit N number of logos you can specific with thisparameter

*/

// import node module libraries
import PropTypes from 'prop-types';
import { Container, Row, Col, Image } from 'react-bootstrap';

const LogosTopBrands = ({ logos, title, limit = -1 }) => {
	const Heading = () => {
		if (title) {
			return (
				<Row>
					<Col md={12}>
						<div className="d-flex justify-content-center text-center mb-6">
							<h4 className="mb-0">{title}</h4>
						</div>
					</Col>
				</Row>
			);
		} else {
			return '';
		}
	};

	const LogoImage = ({ logo, index }) => {
		let borderEnd = "border-end-md ";
		if (limit > 0) {
			borderEnd = limit - 1 === index ? "" : "border-end-md "
		} else {
			borderEnd = (logos.length - 1) === index ? "" : "border-end-md "
		}

		return (
			<Col className={"border-end-0 text-center " + borderEnd}>
				<Image src={logo} alt="" />
			</Col>
		);
	};
	const LogosList = () => {
		if (limit > 0) {
			return logos
				.slice(0, limit)
				.map((logo, index) => <LogoImage key={index} index={index} logo={logo.logoimage} />);
		} else {
			return logos.map((logo, index) => (
				<LogoImage key={index} index={index} logo={logo.logoimage} />
			));
		}
	};
	return (
		<section className="py-lg-8 py-6 bg-white">
			<Container className='py-lg-6'>
				<Heading />
				<Row className='row-cols-xl-7 gy-6'>
					<LogosList />
				</Row>
			</Container>
		</section>
	);
};

LogosTopBrands.propTypes = {
	title: PropTypes.string,
	limit: PropTypes.number
};

export default LogosTopBrands;
