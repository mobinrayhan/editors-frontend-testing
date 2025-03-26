import { v4 as uuid } from 'uuid';

export const UpcomingTaskListData = [
	{
		id: uuid(),
		task: 'Design Wireframes',
		assignee: '/images/avatar/avatar-1.jpg',
		progress: 65,
		enddate: 'Set end date',
		status: 'In Review',
		statuscolor: 'primary'
	},
	{
		id: uuid(),
		task: 'Prototype design',
		assignee: '/images/avatar/avatar-2.jpg',
		progress: 75,
		enddate: 'Aug 15, 2021',
		status: 'In Progress',
		statuscolor: 'info'
	},
	{
		id: uuid(),
		task: 'Content Writing',
		assignee: '/images/avatar/avatar-3.jpg',
		progress: 86,
		enddate: 'Aug 16, 2021',
		status: 'Cancel',
		statuscolor: 'danger'
	},
	{
		id: uuid(),
		task: 'Figma to Bootstrap Conversion',
		assignee: '/images/avatar/avatar-4.jpg',
		progress: 40,
		enddate: 'Aug 18, 2021',
		status: 'In Review',
		statuscolor: 'primary'
	},
	{
		id: uuid(),
		task: 'User Interface Design',
		assignee: '/images/avatar/avatar-6.jpg',
		progress: 35,
		enddate: 'Aug 18, 2021',
		status: 'In Review',
		statuscolor: 'primary'
	}
];

export default UpcomingTaskListData;
