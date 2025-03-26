import { v4 as uuid } from 'uuid';

const BasicNestedTableData = [
    {
        id: uuid(),
        logo: '/images/brand/dropbox-logo.svg',
        project_name: 'Dropbox Design System',
        due_date: 'June 2',
        priority: 'Medium',
        badge: 'warning',
        members: [
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-1.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-2.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-3.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-4.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-5.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-6.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-7.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-8.jpg'
            }],
        children: [
            {
                id: uuid(),
                logo: '/images/brand/slack-logo.svg',
                project_name: 'Slack UI Design',
                due_date: 'June 12',
                priority: 'High',
                badge: 'danger',
                members: [
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-1.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-2.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-3.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-4.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-5.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-6.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-7.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-8.jpg'
                    }
                ]
            },
            {
                id: uuid(),
                logo: '/images/brand/github-logo.svg',
                project_name: 'GitHub Satellite',
                due_date: 'Aug 14',
                priority: 'Low',
                badge: 'info',
                className: 'text-inverse',
                active: true,
                members: [
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-1.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-2.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-3.jpg'
                    },
                    {
                        id: uuid(),
                        avatar: '/images/avatar/avatar-4.jpg'
                    }
                ]
            },
        ]
    },

    {
        id: uuid(),
        logo: '/images/brand/3dsmax-logo.svg',
        project_name: '3D Character Modelling',
        due_date: 'Sept 20',
        priority: 'Medium',
        badge: 'warning',
        members: [
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-1.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-2.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-3.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-4.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-5.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-6.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-7.jpg'
            },
            {
                id: uuid(),
                avatar: '/images/avatar/avatar-8.jpg'
            }
        ]
    }
];

export default BasicNestedTableData;
