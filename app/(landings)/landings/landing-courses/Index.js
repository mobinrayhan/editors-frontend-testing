'use client'

// import node module libraries
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import Features4Columns from './components/Features4Columns';
import BrowseCategories from './components/BrowseCategories';
import WorldClassInstructors from './components/WorldClassInstructors';
import BecomeInstructor from './components/BecomeInstructor';
import TestimonialSection from './components/TestimonialSection';

// import widget/custom components
import { LogosTopHeading, CTA2Buttons, HeroTypedCourses } from 'widgets';

// import required data files
import LogoList2 from 'data/clientlogos/LogoList2';

const LandingCourses = () => {
	return (
		<Fragment>

			{/* Page Content */}
			<HeroTypedCourses
				typedBefore='Build Better'
				typedArray={['Skills', 'Products', 'Teams', 'Future']}
				description='Build skills with courses Join Geeks to watch, play, learn, make, and discover, uscipit esi viimentum laoreet non et odio.'
				bulletArray={['30,000 online courses', 'Expert instruction', 'Lifetime access']}
				buttonText1='View Plans'
				buttonLink1='/marketing/pages/pricing'
				buttonText2='Try for Free'
				buttonLink2='/authentication/sign-up'
			/>

			{/*  Featured in section */}
			<LogosTopHeading title="Featured In" logos={LogoList2} />

			{/* Why learn with geeks */}
			<Features4Columns />

			{/* Browse Categories Section  */}
			<BrowseCategories />

			<hr className="my-0" />

			{/*  World Class Instructors Section  */}
			<WorldClassInstructors />

			<section className="py-8 py-lg-16 bg-white">
				{/*  Become an Instructor  */}
				<BecomeInstructor />

				<Container>
					<hr className="my-10 my-lg-16" />
					{/*  Testimonials start */}
					<TestimonialSection />
				</Container>
			</section>

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

export default LandingCourses;
