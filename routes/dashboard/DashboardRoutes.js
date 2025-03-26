import { v4 as uuid } from 'uuid';
/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */

// import MDI icons
import Icon from '@mdi/react';
import { mdiTrello, mdiCalendar } from '@mdi/js';

// import app config file
import { settings } from 'app.config';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		children: [
			{ id: uuid(), link: '/dashboard/overview', name: 'Overview' },
			{ id: uuid(), link: '/dashboard/analytics', name: 'Analytics' }
		]
	},

	{
		id: uuid(),
		title: 'Courses',
		icon: 'book',
		children: [
			{ id: uuid(), link: '/dashboard/courses/all-courses', name: 'All Courses' },
			{ id: uuid(), link: '/dashboard/courses/courses-category', name: 'Courses Category' },
			{ id: uuid(), link: '/dashboard/courses/category-single', name: 'Category Single' }
		]
	},
	{
		id: uuid(),
		title: 'User',
		icon: 'user',
		children: [
			{ id: uuid(), link: '/dashboard/user/instructor', name: 'Instructor' },
			{ id: uuid(), link: '/dashboard/user/students', name: 'Students' }
		]
	},

	{
		id: uuid(),
		title: 'CMS',
		icon: 'book-open',
		children: [
			{ id: uuid(), link: '/dashboard/cms/cms-dashboard', name: 'Overview' },
			{ id: uuid(), link: '/dashboard/cms/all-posts', name: 'All Posts' },
			{ id: uuid(), link: '/dashboard/cms/add-new-post', name: 'New Post' },
			{ id: uuid(), link: '/dashboard/cms/category', name: 'Category' }
		]
	},

	// Projects->Single children are used in below component for the comparision of router link and name
	// If you are changing main routes titles, i.e. Projects and Single you also need to modify on below component.
	// src/components/dashboard/projects/single/CommonHeaderTabs.js

	{
		id: uuid(),
		title: 'Projects',
		icon: 'file',
		badgecolor: 'success',
		children: [
			{ id: uuid(), link: '/dashboard/projects/grid', name: 'Grid' },
			{ id: uuid(), link: '/dashboard/projects/list', name: 'List' },
			{
				id: uuid(),
				title: 'Single',
				children: [
					{
						id: uuid(),
						link: '/dashboard/projects/single/overview',
						name: 'Overview'
					},
					{ id: uuid(), link: '/dashboard/projects/single/task', name: 'Task' },
					{
						id: uuid(),
						link: '/dashboard/projects/single/budget',
						name: 'Budget'
					},
					{
						id: uuid(),
						link: '/dashboard/projects/single/files',
						name: 'Files'
					},
					{ id: uuid(), link: '/dashboard/projects/single/team', name: 'Team' },
					{
						id: uuid(),
						link: '/dashboard/projects/single/summary',
						name: 'Summary'
					}
				]
			},
			{
				id: uuid(),
				link: '/dashboard/projects/create-project',
				name: 'Create Project'
			}
		]
	},
	{
		id: uuid(),
		title: 'Authentication',
		icon: 'lock',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
			{
				id: uuid(),
				link: '/authentication/forget-password',
				name: 'Forget Password'
			},
			{
				id: uuid(),
				link: '/dashboard/notification-history',
				name: 'Notifications'
			},
			{
				id: uuid(),
				link: '/not-found',
				name: '404 Error'
			}
		]
	},
	{
		id: uuid(),
		title: 'Ecommerce',
		icon: 'shopping-bag',
		children: [
			{
				id: uuid(),
				title: 'Product',
				children: [
					{ id: uuid(), link: '/dashboard/ecommerce/products/product-grid', name: 'Grid' },
					{ id: uuid(), link: '/dashboard/ecommerce/products/product-grid-with-sidebar', name: 'Grid Sidebar' },
					{ id: uuid(), link: '/dashboard/ecommerce/products', name: 'Products' },
					{ id: uuid(), link: '/dashboard/ecommerce/products/product-single', name: 'Product Single' },
					{ id: uuid(), link: '/dashboard/ecommerce/products/product-single-v2', name: 'Product Single v2' },
					{ id: uuid(), link: '/dashboard/ecommerce/products/add-product', name: 'Add Product' },
				]
			},
			{ id: uuid(), link: '/dashboard/ecommerce/shopping-cart', name: 'Shopping Cart' },
			{ id: uuid(), link: '/dashboard/ecommerce/checkout', name: 'Checkout' },
			{ id: uuid(), link: '/dashboard/ecommerce/orders', name: 'Orders' },
			{ id: uuid(), link: '/dashboard/ecommerce/order-single', name: 'Order Single' },
			{ id: uuid(), link: '/dashboard/ecommerce/order-history', name: 'Order History' },
			{ id: uuid(), link: '/dashboard/ecommerce/order-summary', name: 'Order Summary' },
			{ id: uuid(), link: '/dashboard/ecommerce/customers', name: 'Customers' },
			{ id: uuid(), link: '/dashboard/ecommerce/customer/1', name: 'Customer Single' },
			{ id: uuid(), link: '/dashboard/ecommerce/add-customer', name: 'Add Customer' }
		]
	},
	{
		id: uuid(),
		title: 'Layouts',
		icon: 'layout',
		children: [
			{ id: uuid(), link: '/dashboard-layouts/layout-horizontal', name: 'Top' },
			{
				id: uuid(),
				link: '/dashboard-layouts/layout-compact',
				name: 'Compact'
			},
			{
				id: uuid(),
				link: '/dashboard-layouts/layout-vertical',
				name: 'Vertical'
			}
		]
	},
	{
		id: uuid(),
		title: 'Apps',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Chat',
		icon: 'message-square',
		link: '/dashboard-apps/chat'
	},
	{
		id: uuid(),
		title: 'Task',
		icon: <Icon path={mdiTrello} className="nav-icon me-2" size={0.8} />,
		link: '/dashboard/task-kanban'
	},
	// -- Apps -> Mail - v2.1.0
	{
		id: uuid(),
		title: 'Mail',
		icon: 'mail',
		link: '/dashboard/mail',
		// badge: 'New',
		// badgecolor: 'primary',
	},
	// -- Apps -> Calendar - v2.1.0
	{
		id: uuid(),
		title: 'Calendar',
		icon: <Icon path={mdiCalendar} className="nav-icon me-2" size={0.8} />,
		link: '/dashboard/calendar',
	},
	{
		id: uuid(),
		title: 'Components',
		grouptitle: true
	},
	// {
	// 	id: uuid(),
	// 	title: 'Forms',
	// 	icon: 'book',
	// 	children: [
	// 		{ id: uuid(), link: '/dashboard/forms/form-controls', name: 'Form Controls' },
	// 		{ id: uuid(), link: '/dashboard/forms/form-text', name: 'Form Text' },
	// 		{ id: uuid(), link: '/dashboard/forms/select', name: 'Select' },
	// 		{ id: uuid(), link: '/dashboard/forms/checks-and-radios', name: 'Checks & Radios' },
	// 		{ id: uuid(), link: '/dashboard/forms/range', name: 'Range' },
	// 		{ id: uuid(), link: '/dashboard/forms/input-group', name: 'Input Group' },
	// 		{ id: uuid(), link: '/dashboard/forms/floating-labels', name: 'Floating Labels' },
	// 		{ id: uuid(), link: '/dashboard/forms/layouts', name: 'Layout' },
	// 		{ id: uuid(), link: '/dashboard/forms/validation', name: 'Validation' }
	// 	]
	// },
	// {
	// 	id: uuid(),
	// 	title: 'Components',
	// 	icon: 'monitor',
	// 	children: [
	// 		{ id: uuid(), link: '/dashboard/components/accordions', name: 'Accordions' },
	// 		{ id: uuid(), link: '/dashboard/components/alerts', name: 'Alerts' },
	// 		{ id: uuid(), link: '/dashboard/components/avatar', name: 'Avatar' },
	// 		{ id: uuid(), link: '/dashboard/components/badges', name: 'Badges' },
	// 		{ id: uuid(), link: '/dashboard/components/breadcrumbs', name: 'Breadcrumbs' },
	// 		{ id: uuid(), link: '/dashboard/components/buttons', name: 'Buttons' },
	// 		{ id: uuid(), link: '/dashboard/components/button-group', name: 'ButtonGroup' },
	// 		{ id: uuid(), link: '/dashboard/components/cards', name: 'Cards' },
	// 		{ id: uuid(), link: '/dashboard/components/carousels', name: 'Carousel' },
	// 		{ id: uuid(), link: '/dashboard/components/close-button', name: 'Close Button' },
	// 		{ id: uuid(), link: '/dashboard/components/collapse', name: 'Collapse' },
	// 		{ id: uuid(), link: '/dashboard/components/dropdowns', name: 'Dropdowns' },
	// 		{ id: uuid(), link: '/dashboard/components/list-group', name: 'Listgroup' },
	// 		{ id: uuid(), link: '/dashboard/components/modal', name: 'Modal' },
	// 		{ id: uuid(), link: '/dashboard/components/navs', name: 'Navs' },
	// 		{ id: uuid(), link: '/dashboard/components/navbar', name: 'Navbar' },
	// 		{ id: uuid(), link: '/dashboard/components/offcanvas', name: 'Offcanvas' },
	// 		{ id: uuid(), link: '/dashboard/components/overlays', name: 'Overlays' },
	// 		{ id: uuid(), link: '/dashboard/components/pagination', name: 'Pagination' },
	// 		{ id: uuid(), link: '/dashboard/components/popovers', name: 'Popovers' },
	// 		{ id: uuid(), link: '/dashboard/components/progress', name: 'Progress' },
	// 		{ id: uuid(), link: '/dashboard/components/spinners', name: 'Spinners' },
	// 		{ id: uuid(), link: '/dashboard/components/tables', name: 'Tables' },
	// 		{ id: uuid(), link: '/dashboard/components/toasts', name: 'Toasts' },
	// 		{ id: uuid(), link: '/dashboard/components/tooltips', name: 'Tooltips' }
	// 	]
	// },

	// -- Snippet - v3.0.0
	{
		id: uuid(),
		title: 'Snippets',
		icon: 'code',
		link: '/docs/snippet/introduction'
	},
	{
		id: uuid(),
		title: 'Forms',
		icon: 'book',
		link: '/docs/forms/form-controls',
	},
	{
		id: uuid(),
		title: 'Components',
		icon: 'monitor',
		link: '/docs/components/accordions',

	},


	// -- Help Center - v1.3.0
	{
		id: uuid(),
		title: 'Help Center',
		icon: 'help-circle',
		link: '/help-center'
	},

	{
		id: uuid(),
		title: 'Site Settings',
		icon: 'settings',
		children: [
			{ id: uuid(), link: '/dashboard/settings/general', name: 'General' },
			{ id: uuid(), link: '/dashboard/settings/google', name: 'Google' },
			{ id: uuid(), link: '/dashboard/settings/social', name: 'Social' },
			{ id: uuid(), link: '/dashboard/settings/social-login', name: 'Social Login' },
			{ id: uuid(), link: '/dashboard/settings/payment', name: 'Payment' },
			{ id: uuid(), link: '/dashboard/settings/smtp-server', name: 'SMPT' }
		]
	},
	{
		id: uuid(),
		title: 'Documentation',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Documentation',
		icon: 'clipboard',
		link: '/docs/getting-started/introduction'
	},
	{
		id: uuid(),
		title: 'Changelog',
		icon: 'git-pull-request',
		link: '/docs/getting-started/changelog',
		badge: 'v' + settings.app.version
	}
];

export default DashboardMenu;
