export const DashboardMenu = [
	{
		id: 1,
		title: 'My Subscriptions',
		link: '/marketing/student/subscriptions',
		icon: 'home'
	},
	{
		id: 2,
		title: 'Billing Info',
		link: '/marketing/student/billing-info',
		icon: 'book'
	},
	{
		id: 3,
		title: 'Payment',
		link: '/marketing/student/payment',
		icon: 'star'
	},
	{
		id: 4,
		title: 'Invoice',
		link: '/marketing/student/invoice',
		icon: 'pie-chart'
	},
	{
		id: 5,
		title: 'My Quiz Attempt',
		link: '/marketing/student/quiz',
		icon: 'help-circle'
	}
];

export const AccountSettingsMenu = [
	{
		id: 1,
		title: 'Edit Profile',
		link: '/marketing/student/edit-profile',
		icon: 'settings'
	},
	{
		id: 2,
		title: 'Security',
		link: '/marketing/student/security',
		icon: 'user'
	},
	{
		id: 3,
		title: 'Social Profiles',
		link: '/marketing/student/social-profiles',
		icon: 'refresh-cw'
	},
	{
		id: 4,
		title: 'Notifications',
		link: '/marketing/student/notifications',
		icon: 'bell'
	},
	{
		id: 5,
		title: 'Profile Privacy',
		link: '/marketing/student/profile-privacy',
		icon: 'lock'
	},
	{
		id: 6,
		title: 'Delete Profile',
		link: '/marketing/student/delete-profile',
		icon: 'trash'
	},
	{
		id: 6,
		title: 'Linked Accounts',
		link: '/marketing/student/linked-accounts',
		icon: 'user'
	},
	{
		id: 6,
		title: 'Sign Out',
		link: '/',
		icon: 'power'
	}
];

export const InstructorDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default InstructorDashboardMenu;
