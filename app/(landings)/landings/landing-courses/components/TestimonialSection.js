// import node module libraries
import { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

// import widget/custom components
import {SectionHeadingCenter, TestimonialsSlider} from 'widgets';

const TestimonialSection = () => {
	const title = 'Don’t just take our word for it.';
	const subtitle = 'Testimonials';
	const description = `12+ million people are already learning on Geeks`;

	return (
		<Fragment>
			{/*  Section left heading */}
			<SectionHeadingCenter
				title={title}
				subtitle={subtitle}
				description={description}
			/>

			<Row className="mb-8">
				<Col md={12}>
					{/*  Testimonial slider */}
					<TestimonialsSlider />
				</Col>
			</Row>
		</Fragment>
	);
};
export default TestimonialSection;
