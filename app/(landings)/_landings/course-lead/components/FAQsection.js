// import node module libraries
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

// import widget/custom components
import {GKAccordionPlus, SectionHeadingCenter} from 'widgets';

// import data files
import { FAQList } from 'data/courses/LeadCourseData';

const FAQsection = () => {
	const title = 'Frequently Asked Questions.';
	const subtitle = 'Need to Know';
	const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.`;

	return (
        <section className="py-8 py-lg-18 bg-white">
			<Container>
				<SectionHeadingCenter
					title={title}
					description={description}
					subtitle={subtitle}
				/>
				<Row className="justify-content-center">
					<Col lg={6} md={8} sm={12}>
						<GKAccordionPlus accordionItems={FAQList} itemClass="px-0" />
					</Col>
				</Row>
				<div className="mt-10 text-center">
					<Link href="#" className="btn btn-outline-primary">
                        More questions? Visit the Learner Help Center.
                    </Link>
				</div>
			</Container>
		</section>
    );
};
export default FAQsection;
