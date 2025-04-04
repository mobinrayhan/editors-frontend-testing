'use client'

// import node module libraries
import { usePathname } from 'next/navigation';

// import profile layout wrapper
import ProfileLayoutWrap from 'layouts/marketing/ProfileLayoutWrap';

// import widget/custom components
import { ACProfilePrivacyPage } from 'widgets';

const ProfilePrivacy = () => {
	const location = usePathname();
	return (
		<ProfileLayoutWrap pathpara={location}>
			<ACProfilePrivacyPage />
		</ProfileLayoutWrap>
	);
};

export default ProfilePrivacy;
