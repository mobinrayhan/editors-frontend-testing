import { v4 as uuid } from 'uuid';

export const UpcomingDeadlinesData = [
	{
		id: uuid(),
		member: 'Eleanor Pena',
		memberimage: '/images/avatar/avatar-2.jpg',
		task: `Design a Geeks UI Figma`,
		deadline: '30 Aug, 2021',
		workload: '62'
	},
	{
		id: uuid(),
		member: 'Marvin McKinney',
		memberimage: '/images/avatar/avatar-3.jpg',
		task: `Geeks UI Webpack Workflow`,
		deadline: '24 Sept, 2022',
		workload: '45'
	},
	{
		id: uuid(),
		member: 'Wade Warren',
		memberimage: '/images/avatar/avatar-4.jpg',
		task: `Geeks UI React version`,
		deadline: '30 Sept, 2022',
		workload: '80'
	},
	{
		id: uuid(),
		member: 'Courtney Henry',
		memberimage: '/images/avatar/avatar-5.jpg',
		task: `Geeks UI Documents Improve`,
		deadline: '20 Dec, 2021',
		workload: '10'
	},
	{
		id: uuid(),
		member: 'Brooklyn Simmons',
		memberimage: '/images/avatar/avatar-6.jpg',
		task: `Ecommerce Design Geeks UI`,
		deadline: '25 Jan, 2022',
		workload: '8'
	}
];

export default UpcomingDeadlinesData;
