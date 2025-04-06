'use client'

// import node module libraries
import { usePathname } from 'next/navigation';

// import profile layout wrapper
import ProfileLayoutWrap from 'layouts/marketing/ProfileLayoutWrap';

// import widget/custom components
import { ACEditProfilePage } from 'widgets';

const EditProfile = () => {
	const location = usePathname();
	return (
		<ProfileLayoutWrap pathpara={location}>
			<ACEditProfilePage />
		</ProfileLayoutWrap>
	);
};

export default EditProfile;
