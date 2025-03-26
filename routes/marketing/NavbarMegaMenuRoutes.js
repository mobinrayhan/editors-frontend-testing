import { v4 as uuid } from 'uuid';


const NavbarMegaMenuRoutes = [	
	{
		id: uuid(),
		menuitem: 'Degrees',
		children: [		
			{
				id: uuid(),
				menuitem: 'Master of Applied Data Science',
				subtitle: 'University of Michigan',
				image : '/images/png/degree-1.png',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'MBA in Business Analytics',
				subtitle: 'A&B College 1980',
				image : '/images/png/degree-2.png',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Master of Science in Machine',
				subtitle: 'Imperial College London',
				image : '/images/png/degree-3.png',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'Master of Computer Science',
				subtitle: 'University of Colorado',
				image : '/images/png/degree-4.png',
				link: '#'
			}
			,
			{
				id: uuid(),
				menuitem: 'View all degree',
				button : true,
				link: '#'
			}
			
		]
	},
	{ 
		id: uuid(),
		menuitem: 'Certificate Programs',
		children: [		
			{
				id: uuid(),
				menuitem: 'Google Data Analytics',
				subtitle: 'No Prerequisites',
				image : '/images/png/google.png',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'IBM Data Science',
				subtitle: 'No Prerequisites',
				image : '/images/png/IBM.png',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Machine Leaning for Analytics',
				subtitle: 'Expert Feedback',
				image : '/images/png/microsoft.png',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'TensorFlow Developer Certificate',
				subtitle: 'Certification Prerequisites',
				image : '/images/png/tensorflow.png',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Meta Marketing Analytics',
				subtitle: 'University of Colorado',
				image : '/images/png/meta.png',
				link: '#'
			}
			,
			{
				id: uuid(),
				menuitem: 'View all Certificates',
				button : true,
				link: '#'
			}
			
		]
	},
	{ 
		id: uuid(),
		menuitem: 'Popular Skills',
		children: [		
			{
				id: uuid(),
				menuitem: 'Python',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'SQL',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Microsoft Excel',
				link: '#',
			},
			{
				id: uuid(),
				menuitem: 'Machine Learning',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Data Science',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Data Analytics',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Power BI',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Artificial Intelligence',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'View all Skills',
				button : true,
				link: '#'
			}
			
		]
	}
];

export default NavbarMegaMenuRoutes;
