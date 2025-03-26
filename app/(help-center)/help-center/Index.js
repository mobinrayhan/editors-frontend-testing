'use client'

// import node module libraries
import { Fragment } from 'react';

// import sub components
import HeroGradientHeader from './components/HeroGradientHeader';
import HelpCenterFAQs from './components/HelpCenterFAQs';
import ContactSupportSection from './components/ContactSupportSection';

const HelpCenter = () => {
	return (
		<Fragment>

			{/* hero gradient header with features */}
			<HeroGradientHeader />

			{/* FAQs section  */}
			<HelpCenterFAQs />

			{/* contact / support section */}
			<ContactSupportSection />

		</Fragment>
	);
};

export default HelpCenter;
