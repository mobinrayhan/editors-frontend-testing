import { v4 as uuid } from "uuid";
// const NavbarDefault = [
//   {
//     id: uuid(),
//     menuitem: "Home",
//     link: "/",
//   },
//   {
//     id: uuid(),
//     menuitem: "Courses",
//     link: "/courses",
//   },
//   {
//     id: uuid(),
//     menuitem: "Pages",
//     link: "#",
//     children: [
//       {
//         id: uuid(),
//         menuitem: "Courses",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Course Single",
//             link: "/marketing/courses/course-single",
//           },
//           {
//             id: uuid(),
//             menuitem: "Course Single v2",
//             link: "/marketing/courses/course-single2",
//           },
//           {
//             id: uuid(),
//             menuitem: "Course Resume",
//             link: "/course-resume",
//           },
//           {
//             id: uuid(),
//             menuitem: "Course Category",
//             link: "/marketing/course-category",
//           },
//           {
//             id: uuid(),
//             menuitem: "Course Checkout",
//             link: "/marketing/courses/course-checkout",
//           },
//           {
//             id: uuid(),
//             menuitem: "Course List/Grid",
//             link: "/marketing/courses/course-filter-page",
//           },
//           {
//             id: uuid(),
//             menuitem: "Add New Course",
//             link: "/marketing/instructor/add-new-course",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Paths",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Browse Path",
//             link: "/marketing/courses/course-path",
//           },
//           {
//             id: uuid(),
//             menuitem: "Path Single",
//             link: "/marketing/courses/course-path-single",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Blog",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Listing",
//             link: "/blog",
//           },
//           {
//             id: uuid(),
//             menuitem: "Article",
//             link: "/blog/getting-started-the-web-app-javascript-in-2020",
//           },
//           {
//             id: uuid(),
//             menuitem: "Category",
//             link: "/blog/category",
//           },
//           {
//             id: uuid(),
//             menuitem: "Sidebar",
//             link: "/blog/sidebar",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Career",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Overview",
//             link: "/marketing/career/overview",
//           },
//           {
//             id: uuid(),
//             menuitem: "Listing",
//             link: "/marketing/career/career-list",
//           },
//           {
//             id: uuid(),
//             menuitem: "Opening",
//             link: "/marketing/career/career-single",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Portfolio",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "List",
//             link: "/portfolio/list/",
//           },
//           {
//             id: uuid(),
//             menuitem: "Single",
//             link: "/portfolio/single/",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Mentor",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Home",
//             link: "/landings/mentor",
//           },
//           {
//             id: uuid(),
//             menuitem: "List",
//             link: "/mentor/list/",
//           },
//           {
//             id: uuid(),
//             menuitem: "Single",
//             link: "/mentor/single/",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Job",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Home",
//             link: "/landings/landing-job",
//           },
//           {
//             id: uuid(),
//             menuitem: "List",
//             link: "/jobs/job-listing",
//           },
//           {
//             id: uuid(),
//             menuitem: "Grid",
//             link: "/jobs/job-listing/",
//           },
//           {
//             id: uuid(),
//             menuitem: "Single",
//             link: "/jobs/helpdesk-software-engineer-web3crypto",
//           },
//           {
//             id: uuid(),
//             menuitem: "Company List",
//             link: "/jobs/company-list",
//           },
//           {
//             id: uuid(),
//             menuitem: "Company Single",
//             link: "/jobs/company/about",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Specialty",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Coming Soon",
//             link: "/specialty/coming-soon",
//           },
//           {
//             id: uuid(),
//             menuitem: "Error 404",
//             link: "/not-found",
//           },
//           {
//             id: uuid(),
//             menuitem: "Maintenance Mode",
//             link: "/specialty/maintenance-mode",
//           },
//           {
//             id: uuid(),
//             menuitem: "Terms & Conditions",
//             link: "/marketing/terms-and-conditions",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         divider: true,
//       },
//       {
//         id: uuid(),
//         menuitem: "About",
//         link: "/about",
//       },
//       {
//         id: uuid(),
//         menuitem: "Help Center",
//         link: "#",
//         children: [
//           {
//             id: uuid(),
//             menuitem: "Help Center",
//             link: "/help-center/",
//           },
//           {
//             id: uuid(),
//             menuitem: "FAQ's",
//             link: "/help-center/faq/",
//           },
//           {
//             id: uuid(),
//             menuitem: "Guide",
//             link: "/help-center/guide/",
//           },
//           {
//             id: uuid(),
//             menuitem: "Guide Single",
//             link: "/help-center/guide-single/getting-started/what-is-this-geeks-app",
//           },
//           {
//             id: uuid(),
//             menuitem: "Support",
//             link: "/help-center/support/",
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         menuitem: "Pricing",
//         link: "/marketing/pricing",
//       },
//       {
//         id: uuid(),
//         menuitem: "Compare Plan",
//         link: "/compare-plan",
//       },
//       {
//         id: uuid(),
//         menuitem: "Contact",
//         link: "/contact",
//       },
//     ],
//   },
// ];
const NavbarDefault = [
  {
    id: uuid(),
    menuitem: "Home",
    link: "/",
    children: [],
  },
  {
    id: uuid(),
    menuitem: "Courses",
    link: "/courses",
    children: [],
  },
  {
    id: uuid(),
    menuitem: "Browse",
    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "Web Development",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Bootstrap",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "React",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "GraphQl",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Gatsby",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Grunt",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Svelte",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Meteor",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "HTML5",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Angular",
            link: "/marketing/course-category",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Design",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Graphic Design",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Illustrator",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "UX / UI Design",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Figma Design",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Adobe XD",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Sketch",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Icon Design",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Photoshop",
            link: "/marketing/course-category",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Mobile App",
        link: "/marketing/course-category",
      },
      {
        id: uuid(),
        menuitem: "IT Software",
        link: "/marketing/course-category",
      },
      {
        id: uuid(),
        menuitem: "Marketing",
        link: "/marketing/course-category",
      },
      {
        id: uuid(),
        menuitem: "Music",
        link: "/marketing/course-category",
      },
      {
        id: uuid(),
        menuitem: "Life Style",
        link: "/marketing/course-category",
      },
      {
        id: uuid(),
        menuitem: "Business",
        link: "/marketing/course-category",
      },
      {
        id: uuid(),
        menuitem: "Photography",
        link: "/marketing/course-category",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Landings",
    link: "#",
    children: [
      {
        id: uuid(),
        header: true,
        header_text: "LANDINGS",
      },
      {
        id: uuid(),
        menuitem: "Mentor",
        link: "/landings/mentor",
      },
      {
        id: uuid(),
        menuitem: "Education",
        link: "/landings/landing-education/",
      },
      {
        id: uuid(),
        menuitem: "Home Academy",
        link: "/landings/home-academy/",
      },
      {
        id: uuid(),
        menuitem: "Courses",
        link: "/landings/landing-courses",
      },
      {
        id: uuid(),
        menuitem: "Lead Course",
        link: "/landings/course-lead",
      },
      {
        id: uuid(),
        menuitem: "Request Access",
        link: "/landings/request-access",
      },
      {
        id: uuid(),
        menuitem: "SaaS",
        link: "/landings/landing-sass",
      },
      {
        id: uuid(),
        menuitem: "Job Listing",
        link: "/landings/landing-job/",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Pages",
    link: "#",
    children: [
      {
        id: uuid(),
        menuitem: "Courses",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Course Single",
            link: "/marketing/courses/course-single",
          },
          {
            id: uuid(),
            menuitem: "Course Single v2",
            link: "/marketing/courses/course-single2",
          },
          {
            id: uuid(),
            menuitem: "Course Resume",
            link: "/course-resume",
          },
          {
            id: uuid(),
            menuitem: "Course Category",
            link: "/marketing/course-category",
          },
          {
            id: uuid(),
            menuitem: "Course Checkout",
            link: "/marketing/courses/course-checkout",
          },
          {
            id: uuid(),
            menuitem: "Course List/Grid",
            link: "/marketing/courses/course-filter-page",
          },
          {
            id: uuid(),
            menuitem: "Add New Course",
            link: "/marketing/instructor/add-new-course",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Paths",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Browse Path",
            link: "/marketing/courses/course-path",
          },
          {
            id: uuid(),
            menuitem: "Path Single",
            link: "/marketing/courses/course-path-single",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Blog",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Listing",
            link: "/blog",
          },
          {
            id: uuid(),
            menuitem: "Article",
            link: "/blog/getting-started-the-web-app-javascript-in-2020",
          },
          {
            id: uuid(),
            menuitem: "Category",
            link: "/blog/category",
          },
          {
            id: uuid(),
            menuitem: "Sidebar",
            link: "/blog/sidebar",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Career",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Overview",
            link: "/marketing/career/overview",
          },
          {
            id: uuid(),
            menuitem: "Listing",
            link: "/marketing/career/career-list",
          },
          {
            id: uuid(),
            menuitem: "Opening",
            link: "/marketing/career/career-single",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Portfolio",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "List",
            link: "/portfolio/list/",
          },
          {
            id: uuid(),
            menuitem: "Single",
            link: "/portfolio/single/",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Mentor",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Home",
            link: "/landings/mentor",
          },
          {
            id: uuid(),
            menuitem: "List",
            link: "/mentor/list/",
          },
          {
            id: uuid(),
            menuitem: "Single",
            link: "/mentor/single/",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Job",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Home",
            link: "/landings/landing-job",
          },
          {
            id: uuid(),
            menuitem: "List",
            link: "/jobs/job-listing",
          },
          {
            id: uuid(),
            menuitem: "Grid",
            link: "/jobs/job-listing/",
          },
          {
            id: uuid(),
            menuitem: "Single",
            link: "/jobs/helpdesk-software-engineer-web3crypto",
          },
          {
            id: uuid(),
            menuitem: "Company List",
            link: "/jobs/company-list",
          },
          {
            id: uuid(),
            menuitem: "Company Single",
            link: "/jobs/company/about",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Specialty",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Coming Soon",
            link: "/specialty/coming-soon",
          },
          {
            id: uuid(),
            menuitem: "Error 404",
            link: "/not-found",
          },
          {
            id: uuid(),
            menuitem: "Maintenance Mode",
            link: "/specialty/maintenance-mode",
          },
          {
            id: uuid(),
            menuitem: "Terms & Conditions",
            link: "/marketing/terms-and-conditions",
          },
        ],
      },
      {
        id: uuid(),
        divider: true,
      },
      {
        id: uuid(),
        menuitem: "About",
        link: "/about",
      },
      {
        id: uuid(),
        menuitem: "Help Center",
        link: "#",
        children: [
          {
            id: uuid(),
            menuitem: "Help Center",
            link: "/help-center/",
          },
          {
            id: uuid(),
            menuitem: "FAQ's",
            link: "/help-center/faq/",
          },
          {
            id: uuid(),
            menuitem: "Guide",
            link: "/help-center/guide/",
          },
          {
            id: uuid(),
            menuitem: "Guide Single",
            link: "/help-center/guide-single/getting-started/what-is-this-geeks-app",
          },
          {
            id: uuid(),
            menuitem: "Support",
            link: "/help-center/support/",
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Pricing",
        link: "/marketing/pricing",
      },
      {
        id: uuid(),
        menuitem: "Compare Plan",
        link: "/compare-plan",
      },
      {
        id: uuid(),
        menuitem: "Contact",
        link: "/contact",
      },
    ],
  },
  {
    id: uuid(),
    menuitem: "Accounts",
    link: "#",
    children: [
      {
        id: uuid(),
        header: true,
        header_text: "Accounts",
      },
      {
        id: uuid(),
        menuitem: "Instructor",
        link: "#",
        children: [
          {
            id: uuid(),
            header: true,
            header_text: "Instructor",
            description: "Instructor dashboard for manage courses and earning.",
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: "Dashboard",
            link: "/marketing/instructor/dashboard",
          },
          {
            id: uuid(),
            menuitem: "Profile",
            link: "/marketing/instructor/profile",
          },
          {
            id: uuid(),
            menuitem: "My Courses",
            link: "/marketing/instructor/my-courses",
          },
          {
            id: uuid(),
            menuitem: "Orders",
            link: "/marketing/instructor/orders",
          },
          {
            id: uuid(),
            menuitem: "Reviews",
            link: "/marketing/instructor/reviews",
          },
          {
            id: uuid(),
            menuitem: "Students",
            link: "/marketing/instructor/students",
          },
          {
            id: uuid(),
            menuitem: "Payouts",
            link: "/marketing/instructor/payouts",
          },
          {
            id: uuid(),
            menuitem: "Earning",
            link: "/marketing/instructor/earnings",
          },
          {
            id: uuid(),
            menuitem: "Quiz",
            link: "#",
            children: [
              {
                id: uuid(),
                menuitem: "Quiz",
                link: "/marketing/instructor/quiz",
              },
              {
                id: uuid(),
                menuitem: "Single",
                link: "/marketing/instructor/quiz-single",
              },
              {
                id: uuid(),
                menuitem: "Result",
                link: "/marketing/instructor/quiz-result",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Students",
        link: "#",
        children: [
          {
            id: uuid(),
            header: true,
            header_text: "Students",
            description:
              "Students dashboard to manage your courses and subscriptions.",
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: "Dashboard",
            link: "/marketing/student/dashboard",
          },
          {
            id: uuid(),
            menuitem: "Subscriptions",
            link: "/marketing/student/subscriptions",
          },
          {
            id: uuid(),
            menuitem: "Payments",
            link: "/marketing/student/payment",
          },
          {
            id: uuid(),
            menuitem: "Billing Info",
            link: "/marketing/student/billing-info",
          },
          {
            id: uuid(),
            menuitem: "Invoice",
            link: "/marketing/student/invoice",
          },
          {
            id: uuid(),
            menuitem: "Invoice Details",
            link: "/marketing/student/invoice-details",
          },
          {
            id: uuid(),
            menuitem: "Bookmarked",
            link: "/marketing/student/dashboard",
          },
          {
            id: uuid(),
            menuitem: "My Path",
            link: "/marketing/student/dashboard",
          },
          {
            id: uuid(),
            menuitem: "Quiz",
            link: "#",
            children: [
              {
                id: uuid(),
                menuitem: "Quiz",
                link: "/marketing/student/quiz",
              },
              {
                id: uuid(),
                menuitem: "Attempt",
                link: "/marketing/student/quiz-attempt",
              },
              {
                id: uuid(),
                menuitem: "Start",
                link: "/marketing/student/quiz-start",
              },
              {
                id: uuid(),
                menuitem: "Result",
                link: "/marketing/student/quiz-result",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        menuitem: "Admin",
        link: "#",
        children: [
          {
            id: uuid(),
            header: true,
            header_text: "Master Admin",
            description:
              "Master admin dashboard to manage courses, user, site setting, and work with amazing apps.",
          },
          {
            id: uuid(),
            divider: true,
          },
          {
            id: uuid(),
            menuitem: "Go to Dashboard",
            link: "/dashboard/overview",
            type: "button",
          },
        ],
      },
      {
        id: uuid(),
        divider: true,
      },
      {
        id: uuid(),
        menuitem: "Sign In",
        link: "/authentication/sign-in",
      },
      {
        id: uuid(),
        menuitem: "Sign Up",
        link: "/authentication/sign-up",
      },
      {
        id: uuid(),
        menuitem: "Forgot Password",
        link: "/authentication/forget-password",
      },
      {
        id: uuid(),
        menuitem: "Edit Profile",
        link: "/marketing/student/edit-profile",
      },
      {
        id: uuid(),
        menuitem: "Security",
        link: "/marketing/student/security",
      },
      {
        id: uuid(),
        menuitem: "Social Profiles",
        link: "/marketing/student/social-profiles",
      },
      {
        id: uuid(),
        menuitem: "Notifications",
        link: "/marketing/student/notifications",
      },
      {
        id: uuid(),
        menuitem: "Privacy Settings",
        link: "/marketing/student/profile-privacy",
      },
      {
        id: uuid(),
        menuitem: "Delete Profile",
        link: "/marketing/student/delete-profile",
      },
      {
        id: uuid(),
        menuitem: "Linked Accounts",
        link: "/marketing/student/linked-accounts",
      },
    ],
  },
];

export default NavbarDefault;
