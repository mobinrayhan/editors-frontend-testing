'use client'

// import node module libraries
import { Fragment } from 'react';

// import widget/custom components
import { LogosTopHeading, CTA2Buttons, HeroFormRight } from 'widgets';

// import sub components
import FeaturesWithBullets from './components/FeaturesWithBullets';
import CourseDescriptionSection from './components/CourseDescriptionSection';
import YourInstructor from './components/YourInstructor';
import LeadTestimonialSection from './components/TestimonialSection';
import FAQsection from './components/FAQsection';

// import required data files
import LogoList2 from 'data/clientlogos/LogoList2';

const CourseLead = () => {
	return (
		<Fragment>

			{/* Hero section with right form */}
			<HeroFormRight
				title='Become a Vanilla JavaScript Developer'
				description='In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.'
				hours={4}
				videos={12}
				enrolled={10234}
				buttonText='Watch Preview'
				buttonLink='#'
			/>

			{/* Feature section with bullet  */}
			<FeaturesWithBullets />

			{/* Course description section  */}
			<CourseDescriptionSection />

			{/* Your instructor section */}
			<YourInstructor />

			{/*  Logo section */}
			<LogosTopHeading
				title="Trusted by top-tier product companies"
				logos={LogoList2}
			/>

			{/* Testimonial slider section */}
			<LeadTestimonialSection />

			{/*  FAQs section */}
			<FAQsection />

			{/*  CTA section */}
			<CTA2Buttons
				title="Join more than 1 million learners worldwide"
				description="Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier."
				btntext1="Start Learning for Free"
				btnlink1="/authentication/sign-up"
				btntext2="Geeks for Business"
				btnlink2="/authentication/sign-up"
			/>

		</Fragment>
	);
};

export default CourseLead;
