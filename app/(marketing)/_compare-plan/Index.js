'use client'

// import node module libraries
import { Fragment } from 'react';

// import sub components
import PricingPlans from './components/PricingPlans';
import ComparePlansTable from './components/ComparePlansTable';
import FAQs from './components/FAQs';
import DeveloperGeeks from './components/DeveloperGeeks';

// import required layout files
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';

const ComparePlan = () => {
	return (
		<Fragment>

			{/* Default Navigation bar */}
			<NavbarDefault />

			{/* pricing plans  */}
			<PricingPlans />

			{/* compare plan & additional features */}
			<ComparePlansTable />

			{/* FAQs section */}
			<FAQs />

			{/* developer geeks */}
			<DeveloperGeeks />

			{/* Footer with links */}
			<FooterWithLinks />

		</Fragment>
	);
};

export default ComparePlan;
