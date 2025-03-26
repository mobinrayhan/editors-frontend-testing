import { v4 as uuid } from 'uuid';

export const TeamMembers = [
	{
		id: 1,
		name: 'Paul Haney',
		image: '/images/avatar/avatar-1.jpg'
	},
	{
		id: 2,
		name: 'Gali Lanier',
		image: '/images/avatar/avatar-2.jpg'
	},
	{
		id: 3,
		name: 'Charlie Holland',
		image: '/images/avatar/avatar-3.jpg'
	},
	{
		id: 4,
		name: 'Gillbert Farr',
		image: '/images/avatar/avatar-4.jpg'
	},
	{
		id: 5,
		name: 'Jessica Nasto',
		image: '/images/avatar/avatar-6.jpg'
	},
	{
		id: 6,
		name: 'Nancy Limabd',
		image: '/images/avatar/avatar-7.jpg'
	},
	{
		id: 7,
		name: 'Nishant Luka',
		image: '/images/avatar/avatar-12.jpg'
	},
	{
		id: 8,
		name: 'Florin Pop',
		image: '/images/avatar/avatar-10.jpg'
	},
	{
		id: 9,
		name: 'Disha Noma',
		image: '/images/avatar/avatar-8.jpg'
	},
	{
		id: 10,
		name: 'Paul Haney',
		image: '/images/avatar/avatar-4.jpg'
	},
	{
		id: 11,
		name: 'Shrey Mojan',
		image: '/images/avatar/avatar-12.jpg'
	},
	{
		id: 12,
		name: 'Niman Kant',
		image: '/images/avatar/avatar-14.jpg'
	}
];

export const TaskKanbanItems = [
	{
		id: 1,
		title: 'To Do',
		taskIds: [
			{
				id: uuid(),
				title: 'Start prototyping in frame for admin dashboard.',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 1,
				attachments: 3,
				comments: 12
			},
			{
				id: uuid(),
				title: 'Invite your teammates and start collaborating',
				priority: 'High',
				dueDate: '30 Dec',
				description:
					'<img src="https://codescandy.com/geeks-bootstrap-5/assets/images/blog/blogpost-1.jpg" alt="" class="img-fluid rounded-3">',
				assignTo: 2,
				attachments: 4,
				comments: 12
			}
		]
	},
	{
		id: 2,
		title: 'In Progress',
		taskIds: [
			{
				id: uuid(),
				title: 'Website launch planning',
				priority: 'Medium',
				dueDate: '30 Dec',
				description: '',
				assignTo: 3,
				attachments: 6,
				comments: 16
			},
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 4,
				attachments: 5,
				comments: 8
			},
			{
				id: uuid(),
				title: 'Start prototyping in framer for admin dashboard.',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 5,
				attachments: 9,
				comments: 18
			},
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 6,
				attachments: 12,
				comments: 22
			}
		]
	},
	{
		id: 3,
		title: 'Review',
		taskIds: [
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 7,
				attachments: 9,
				comments: 18
			},
			{
				id: uuid(),
				title: 'Start prototyping in framer for admin dashboard.',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 8,
				attachments: 12,
				comments: 22
			},
			{
				id: uuid(),
				title: 'Website launch planning',
				priority: 'Medium',
				dueDate: '30 Dec',
				description: '',
				assignTo: 9,
				attachments: 6,
				comments: 16
			},
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 10,
				attachments: 5,
				comments: 8
			}
		]
	},
	{
		id: 4,
		title: 'Done',
		taskIds: [
			{
				id: uuid(),
				title: 'Start prototyping in frame for admin dashboard.',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 11,
				attachments: 3,
				comments: 12
			},
			{
				id: uuid(),
				title: 'Invite your teammates and start collaborating',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 12,
				attachments: 4,
				comments: 12
			}
		]
	}
];
