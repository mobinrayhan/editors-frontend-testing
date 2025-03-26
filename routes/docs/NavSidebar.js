import { v4 as uuid } from 'uuid';

const NavSidebar = [
	{
		id: uuid(),
		title: 'Getting Started',
		children: [
			{ id: uuid(), name: "Introduction", link: "/docs/getting-started/introduction" },
			{ id: uuid(), name: "Environment setup", link: "/docs/getting-started/environment-setup" },
			{ id: uuid(), name: "Getting Started", link: "/docs/getting-started/getting-started" },
			{ id: uuid(), name: "Customize Theme", link: "/docs/getting-started/customize-theme" },
			{ id: uuid(), name: "API Integraion", link: "/docs/getting-started/api-integration" },
			{ id: uuid(), name: "File Structure", link: "/docs/getting-started/file-structure" },
			{ id: uuid(), name: "Resources & assets", link: "/docs/getting-started/resources-assets", },
			{ id: uuid(), name: "Changelog", link: "/docs/getting-started/changelog" },
		],

	},
	{
		id: uuid(),
		title: 'Foundation',
		children: [
			{
				id: uuid(),
				name: 'Typography',
				link: '/docs/foundation/typography',
			},
			{
				id: uuid(),
				name: 'Colors',
				link: '/docs/foundation/colors/',
			},
			{
				id: uuid(),
				name: 'Shadows',
				link: '/docs/foundation/shadows/'
			}
		]
	},
	{
		id: uuid(),
		title: 'Snippet',
		children: [
			{
				id: uuid(),
				name: 'Introduction',
				link: '/docs/snippet/introduction'
			},
			{
				id: uuid(),
				name: 'Accordions',
				link: '/docs/snippet/accordions'
			},
			{
				id: uuid(),
				name: 'Cards',
				link: '/docs/snippet/cards'
			},
			{
				id: uuid(),
				name: 'Chart',
				link: '/docs/snippet/charts'
			},
			{
				id: uuid(),
				name: 'Clients',
				link: '/docs/snippet/client-logos'
			},
			{
				id: uuid(),
				name: 'CTA',
				link: '/docs/snippet/cta'
			},
			{
				id: uuid(),
				name: 'Features',
				link: '/docs/snippet/features'
			},
			{
				id: uuid(),
				name: 'Footer',
				link: '/docs/snippet/footers'
			},
			{
				id: uuid(),
				name: 'Headers',
				link: '/docs/snippet/headers'
			},
			{
				id: uuid(),
				name: 'Hero',
				link: '/docs/snippet/hero-sections'
			},
			{
				id: uuid(),
				name: 'Image',
				link: '/docs/snippet/images'
			},
			{
				id: uuid(),
				name: 'Integrations',
				link: '/docs/snippet/integrations'
			},
			{
				id: uuid(),
				name: 'Pricing',
				link: '/docs/snippet/pricing'
			},
			{
				id: uuid(),
				name: 'Reviews',
				link: '/docs/snippet/reviews'
			},
			{
				id: uuid(),
				name: 'Slider',
				link: '/docs/snippet/sliders'
			},
			{
				id: uuid(),
				name: 'Stats',
				link: '/docs/snippet/stats'
			},
			{
				id: uuid(),
				name: 'Tables',
				link: '/docs/snippet/tables'
			},
			{
				id: uuid(),
				name: 'Team',
				link: '/docs/snippet/team'
			},
			{
				id: uuid(),
				name: 'Testimonials',
				link: '/docs/snippet/testimonials'
			},
			{
				id: uuid(),
				name: 'User Profile',
				link: '/docs/snippet/user-profile'
			},
		]

	},
	{
		id: uuid(),
		title: 'Forms',
		children: [
			{ id: uuid(), link: '/docs/forms/form-controls', name: 'Form Controls' },
			{ id: uuid(), link: '/docs/forms/form-text', name: 'Form Text' },
			{ id: uuid(), link: '/docs/forms/select', name: 'Select' },
			{ id: uuid(), link: '/docs/forms/checks-and-radios', name: 'Checks & Radios' },
			{ id: uuid(), link: '/docs/forms/range', name: 'Range' },
			{ id: uuid(), link: '/docs/forms/input-group', name: 'Input Group' },
			{ id: uuid(), link: '/docs/forms/floating-labels', name: 'Floating Labels' },
			{ id: uuid(), link: '/docs/forms/layouts', name: 'Layout' },
			{ id: uuid(), link: '/docs/forms/validation', name: 'Validation' }
		]
	},
	{
		id: uuid(),
		title: 'Components',
		children: [
			{ id: uuid(), link: '/docs/components/accordions', name: 'Accordions' },
			{ id: uuid(), link: '/docs/components/alerts', name: 'Alerts' },
			{ id: uuid(), link: '/docs/components/avatar', name: 'Avatar' },
			{ id: uuid(), link: '/docs/components/badges', name: 'Badges' },
			{ id: uuid(), link: '/docs/components/breadcrumbs', name: 'Breadcrumbs' },
			{ id: uuid(), link: '/docs/components/buttons', name: 'Buttons' },
			{ id: uuid(), link: '/docs/components/button-group', name: 'ButtonGroup' },
			{ id: uuid(), link: '/docs/components/cards', name: 'Cards' },
			{ id: uuid(), link: '/docs/components/carousels', name: 'Carousel' },
			{ id: uuid(), link: '/docs/components/close-button', name: 'Close Button' },
			{ id: uuid(), link: '/docs/components/collapse', name: 'Collapse' },
			{ id: uuid(), link: '/docs/components/dropdowns', name: 'Dropdowns' },
			{ id: uuid(), link: '/docs/components/list-group', name: 'Listgroup' },
			{ id: uuid(), link: '/docs/components/modal', name: 'Modal' },
			{ id: uuid(), link: '/docs/components/navs', name: 'Navs' },
			{ id: uuid(), link: '/docs/components/navbar', name: 'Navbar' },
			{ id: uuid(), link: '/docs/components/offcanvas', name: 'Offcanvas' },
			{ id: uuid(), link: '/docs/components/overlays', name: 'Overlays' },
			{ id: uuid(), link: '/docs/components/pagination', name: 'Pagination' },
			{ id: uuid(), link: '/docs/components/popovers', name: 'Popovers' },
			{ id: uuid(), link: '/docs/components/progress', name: 'Progress' },
			{ id: uuid(), link: '/docs/components/spinners', name: 'Spinners' },
			{ id: uuid(), link: '/docs/components/tables', name: 'Tables' },
			{ id: uuid(), link: '/docs/components/toasts', name: 'Toasts' },
			{ id: uuid(), link: '/docs/components/tooltips', name: 'Tooltips' }
		]
	},
	{
		id: uuid(),
		title: 'Tables',
		children: [
			{ id: uuid(), name: "Basic Tables", link: "/docs/tables/basic-tables" },
			{ id: uuid(), name: "Data Tables", link: "/docs/tables/datatables" },
		],
	},
];

export default NavSidebar;
