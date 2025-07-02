import { v4 as uuid } from "uuid";

const MentorFooterRoutes = [
  {
    id: uuid(),
    menuitem: "আমাদের কোর্সগুলো",
    children: [
      {
        id: uuid(),
        menuitem: "প্রিমিয়ার প্রো",
        link: "/courses/প্রিমিয়ার-প্রো",
      },
      {
        id: uuid(),
        menuitem: "আফটার ইফেক্সট",
        link: "/courses/আফটার-ইফেক্সট",
      },
      {
        id: uuid(),
        menuitem: "ক্যাপকাট",
        link: "/courses/ক্যাপকাট",
      },
      {
        id: uuid(),
        menuitem: "ড্যাভিঞ্চি রিজলভ",
        link: "/courses/ড্যাভিঞ্চি-রিজলভ",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "কোম্পানি",
    children: [
      {
        id: uuid(),
        menuitem: "জেমস সম্পর্কে",
        link: "/কোম্পানি/জেমস-সম্পর্কে",
      },
      {
        id: uuid(),
        menuitem: "অ্যাফিলিয়েট",
        link: "/কোম্পানি/অ্যাফিলিয়েট",
      },
      {
        id: uuid(),
        menuitem: "সাফল্যের গল্প",
        link: "/কোম্পানি/সাফল্যের-গল্প",
      },
      {
        id: uuid(),
        menuitem: "ফ্রী রিসোর্স",
        link: "/কোম্পানি/ফ্রী-রিসোর্স",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "সাপোর্ট",
    children: [
      {
        id: uuid(),
        menuitem: "সাধারণ জিজ্ঞাসা",
        link: "/সাপোর্ট/সাধারণ-জিজ্ঞাসা",
      },
      {
        id: uuid(),
        menuitem: "সাপোর্টে যোগাযোগ",
        link: "/সাপোর্ট/সাপোর্টে-যোগাযোগ",
      },
      {
        id: uuid(),
        menuitem: "ডিস্কোর্ড কমিউনিটি",
        link: "/সাপোর্ট/ডিস্কোর্ড-কমিউনিটি",
      },
      {
        id: uuid(),
        menuitem: "ফ্রী রিসোর্স",
        link: "/সাপোর্ট/ফ্রী-রিসোর্স",
      },
    ],
  },

  // {
  //   id: uuid(),
  //   menuitem: "Quick Links",
  //   children: [
  //     {
  //       id: uuid(),
  //       menuitem: "Home",
  //       link: "/",
  //     },
  //     {
  //       id: uuid(),
  //       menuitem: "Courses",
  //       link: "/courses",
  //     },
  //     // {
  //     //   id: uuid(),
  //     //   menuitem: "Dashboard",
  //     //   link: "/student/dashboard",
  //     // },
  //     {
  //       id: uuid(),
  //       menuitem: "Contact",
  //       link: "/contact",
  //     },
  //   ],
  // },
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
        menuitem: "Refund Policy",
        link: "/refund-policy",
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
    ],
  },
  // {
  //   id: uuid(),
  //   menuitem: "SUPPORT",
  //   children: [
  //     {
  //       id: uuid(),
  //       menuitem: "Help center",
  //       link: "/help-center",
  //     },
  //     {
  //       id: uuid(),
  //       menuitem: "FAQ",
  //       link: "/help-center/faq",
  //     },
  //     // {
  //     //   id: uuid(),
  //     //   menuitem: "Guides",
  //     //   link: "/help-center/guide",
  //     // },
  //   ],
  // },
];

export default MentorFooterRoutes;
