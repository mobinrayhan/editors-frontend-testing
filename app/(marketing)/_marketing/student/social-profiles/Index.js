'use client'

// import node module libraries
import { usePathname } from 'next/navigation';

// import profile layout wrapper
import ProfileLayoutWrap from 'layouts/marketing/ProfileLayoutWrap';

// import widget/custom components
import { ACSocialProfilesPage } from 'widgets';

const SocialProfiles = () => {
	const location = usePathname();
	return (
		<ProfileLayoutWrap pathpara={location}>
			<ACSocialProfilesPage />
		</ProfileLayoutWrap>
	);
};

export default SocialProfiles;
