import { v4 as uuid } from "uuid";

const MentorFooterRoutes = [
  {
    id: uuid(),
    menuitem: "Quick Links",
    children: [
      {
        id: uuid(),
        menuitem: "Home",
        link: "/",
      },
      {
        id: uuid(),
        menuitem: "Courses",
        link: "/courses",
      },
      // {
      //   id: uuid(),
      //   menuitem: "Dashboard",
      //   link: "/student/dashboard",
      // },
      {
        id: uuid(),
        menuitem: "Contact",
        link: "/contact",
      },
    ],
  },
  // {
  // 	id: uuid(),
  // 	menuitem: 'RESOURCES',
  // 	children: [
  // 		{
  // 			id: uuid(),
  // 			menuitem: 'Newsletter',
  // 			link: '#',
  // 		},
  // 		{
  // 			id: uuid(),
  // 			menuitem: 'Case Studies',
  // 			link: '#'
  // 		},
  // 		{
  // 			id: uuid(),
  // 			menuitem: 'Books',
  // 			link: '#'
  // 		},
  // 		{
  // 			id: uuid(),
  // 			menuitem: 'Templates',
  // 			link: '#'
  // 		},
  // 		{
  // 			id: uuid(),
  // 			menuitem: 'Blog',
  // 			link: '#'
  // 		}
  // 	]
  // },
  {
    id: uuid(),
    menuitem: "COMPANY",
    children: [
      {
        id: uuid(),
        menuitem: "About",
        link: "/about",
      },
      {
        id: uuid(),
        menuitem: "Terms and Conditions",
        link: "/terms-and-conditions",
      },
      {
        id: uuid(),
        menuitem: "Privacy Policy",
        link: "privacy-policy",
      },
      // {
      //   id: uuid(),
      //   menuitem: "Meet the Team",
      //   link: "/meet-the-team",
      // },
    ],
  },
  {
    id: uuid(),
    menuitem: "SUPPORT",
    children: [
      {
        id: uuid(),
        menuitem: "Help center",
        link: "/help-center",
      },
      {
        id: uuid(),
        menuitem: "FAQ",
        link: "/help-center/faq",
      },
      // {
      //   id: uuid(),
      //   menuitem: "Guides",
      //   link: "/help-center/guide",
      // },
    ],
  },
];

export default MentorFooterRoutes;
