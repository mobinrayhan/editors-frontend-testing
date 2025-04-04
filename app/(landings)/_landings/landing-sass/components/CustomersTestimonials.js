// import node module libraries
import { Col, Row } from 'react-bootstrap';

// import widget/custom components
import { TestimonialCardWithLogo } from 'widgets';

// import data files
import CustomersTestimonialsData from 'data/landing-sass/CustomersTestimonialsData';

const CustomersTestimonials = () => {
	return (
		<Row>
			{CustomersTestimonialsData.map((item, index) => {
				return (
					<Col lg={{ offset: 1, span: 5 }} md={6} xs={12} key={index} className='mb-4'>
						<TestimonialCardWithLogo item={item} />
					</Col>
				);
			})}
		</Row>
	);
};

export default CustomersTestimonials;
