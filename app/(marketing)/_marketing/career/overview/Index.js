'use client'

// import sub components
import Collage from './components/Collage';
import CareerAtGeeks from './components/CareerAtGeeks';
import TeamMemberAtGeeks from './components/TeamMemberAtGeeks';
import GeeksCulture from './components/GeeksCulture';

// import widget/custom components
import { CTAButton } from 'widgets';

const Career = () => {
	const title = 'Join the Geeks team & shape the future of design';
	const description = `If you’re passionate and ready to dive in, we’d love to meet you. We’re committed to supporting our employee professional development and well-being.`;
	const btntext = 'View opportunities';
	const btnlink = '#';

	return (
		<main>
			{/* collage gallery */}
			<Collage />

			{/* career at geeks */}
			<CareerAtGeeks />

			{/* team member at geeks */}
			<TeamMemberAtGeeks />

			{/* geeks culture */}
			<GeeksCulture />

			{/* hero call to action */}
			<CTAButton
				title={title}
				description={description}
				btntext={btntext}
				btnlink={btnlink}
			/>
		</main>
	);
};

export default Career;
