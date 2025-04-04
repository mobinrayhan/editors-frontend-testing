// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';

// import widget/custom components
import {TestimonialsSlider2, SectionHeadingLeft2} from 'widgets';

const TestimonialSection = () => {
	return (
		<section className="pb-16 bg-white">
			<Container>
				<Row>
					<Col xl={{ offset: 2, span: 8 }} sm={12}>
						<Row className="mb-8">
							<Col lg={9} md={12} sm={12} className="mb-8">
								<SectionHeadingLeft2
									title="The developers loves. Says"
									description="Optimized for a great developer experience."
								/>
							</Col>
							<Col md={12} sm={12}>
								<TestimonialsSlider2 />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
export default TestimonialSection;
