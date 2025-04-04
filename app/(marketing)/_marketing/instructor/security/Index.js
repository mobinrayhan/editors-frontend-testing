'use client'

// import node module libraries
import { usePathname } from 'next/navigation';

// import profile layout wrapper
import ProfileLayoutWrap from 'layouts/marketing/ProfileLayoutWrap';

// import widget/custom components
import { ACSecuirtyPage } from 'widgets';

const Security = () => {
	const location = usePathname();
	return (
		<ProfileLayoutWrap pathpara={location}>
			<ACSecuirtyPage />
		</ProfileLayoutWrap>
	);
};

export default Security;
