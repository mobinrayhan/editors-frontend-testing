'use client'

// import node module libraries
import { usePathname } from 'next/navigation';

// import profile layout wrapper
import ProfileLayoutWrap from 'layouts/marketing/ProfileLayoutWrap';

// import widget/custom components
import { ACDeleteProfilePage } from 'widgets';

const DeleteProfile = () => {
	const location = usePathname();
	return (
		<ProfileLayoutWrap pathpara={location}>
			<ACDeleteProfilePage />
		</ProfileLayoutWrap>
	);
};

export default DeleteProfile;
