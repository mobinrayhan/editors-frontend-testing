'use client'

// import node module libraries
import { Fragment, useEffect } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import SASSFeatures4Columns from './components/Features4Columns';
import HeroLeftImage from './components/HeroLeftImage';
import HeroRightImage from './components/HeroRightImage';
import AppIntegration from './components/AppIntegration';
import CustomersTestimonials from './components/CustomersTestimonials';
import SimplePricingPlans from './components/SimplePricingPlans';

// import widget/custom components
import { CTAFreeTrial, HeroGradient } from 'widgets';

// import data files
import LogoList1 from 'data/clientlogos/LogoList2';

const LandingSass = () => {
	useEffect(() => {
		document.body.className = 'bg-white';
	});

	const title = 'Just try it out! You’ll fall in love';
	const subtitle = 'Get things done';
	const description = `Designed for modern companies looking to launch a simple, premium and modern website and apps.`;
	const btntext = 'Try For Free';
	const btnlink = '#';

	return (
		<Fragment>

			{/* hero gradient */}
			<HeroGradient
				title='Modern web apps shipped faster'
				bulletArray={['Simple to use, beautiful UI design', 'Complete complex project with ease', 'An intuitive admin app for developers']}
				buttonText='Get started for Free'
				buttonLink='#'
				hrefText='Questions? Talk to an expert'
				hrefLink='#'
				logos={LogoList1}
			/>

			{/* features */}
			<SASSFeatures4Columns />

			{/* image sections */}
			<section className="pb-lg-16 pb-8">
				<Container>
					{/* hero with left side image */}
					<HeroLeftImage />

					{/* divider */}
					<hr className="my-lg-12 my-8" />

					{/* hero with right side image */}
					<HeroRightImage />
				</Container>
			</section>

			{/* integrate with the apps */}
			<AppIntegration />

			<section className="pt-lg-16 pb-lg-14 pt-8 pb-8">
				<Container>
					{/* customer's testimonials  */}
					<CustomersTestimonials />

					{/* divider  */}
					<hr className="my-lg-12 my-8" />

					{/* simple pricing plans */}
					<SimplePricingPlans />
				</Container>
			</section>

			{/* cta with bg color  */}
			<CTAFreeTrial
				title={title}
				description={description}
				subtitle={subtitle}
				btntext={btntext}
				btnlink={btnlink}
			/>

		</Fragment>
	);
};

export default LandingSass;
