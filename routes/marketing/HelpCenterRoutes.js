import { v4 as uuid } from 'uuid';

const HelpCenterRoutes = [
    {
        id: uuid(),
        menuitem: 'Help Center',
        link: '#',
        children: [
            {
                id: uuid(),
                menuitem: 'Help Center',
                link: '/help-center/'
            },
            {
                id: uuid(),
                menuitem: "FAQ's",
                link: '/help-center/faq/'
            },
            {
                id: uuid(),
                menuitem: 'Guide',
                link: '/help-center/guide/'
            },
            {
                id: uuid(),
                menuitem: 'Guide Single',
                link: '/help-center/guide-single/getting-started/what-is-this-geeks-app'
            },
            {
                id: uuid(),
                menuitem: 'Support',
                link: '/help-center/support/'
            }
        ]
    }
];


export default HelpCenterRoutes;
