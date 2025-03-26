import { v4 as uuid } from 'uuid';

const MentorFooterRoutes = [
	{
		id: uuid(),
		menuitem: 'PLATFORM',
		children: [
			{
				id: uuid(),
				menuitem: 'Browse Mentors',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'Book a Session',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Become a Mentor',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Wall Of love',
				link: '#'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'RESOURCES',
		children: [
			{
				id: uuid(),
				menuitem: 'Newsletter',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'Case Studies',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Books',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Templates',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Blog',
				link: '#'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'COMPANY',
		children: [
			{
				id: uuid(),
				menuitem: 'About',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'Partner Program',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Privacy Policy',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Meet the Team',
				link: '#'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'SUPPORT',
		children: [
			{
				id: uuid(),
				menuitem: 'FAQ',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'Contact',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Help centre',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Join Community',
				link: '#'
			}
		]
	}
];

export default MentorFooterRoutes;
