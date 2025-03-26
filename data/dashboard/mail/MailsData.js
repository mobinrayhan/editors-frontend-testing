import { v4 as uuid } from 'uuid';

const description = `<div class="mt-6">
<p style="margin-bottom:3px">
  <b>Hello Lesile Alexander</b>,
</p>
<p>Ullamco deserunt commodo esse deserunt deserunt quis
  eiusmod. Laborum sint excepteur non sit eiusmod sunt
  voluptate ipsum nisi ullamco magna. Lorem consectetur
  est dolor minim exercitation deserunt quis duis fugiat
  ipsum
  incididunt non. <span class="text-dark">Anim aute ipsum
    cupidatat</span>nisi occaecat quis sit nisi labore
  labore dolore do. Pariatur veniam culpa
  quis veniam nisi exercitation veniam ut. </p>
<p>Quis do sint proident fugiat ad. Nunc at magna vitae
  dolor maximus placerat. Nam quis arcu sodales, eleifend
  ex vitae,
  pellentesque ligula. Nunc ut tristique <a href="#">nisi,
    id ullamcorper justo.</a></p>
<p>The generated Lorem Ipsum is therefore always free from
  repetition, injected humour, or non-characteristic words
  etc.Quisque imperdiet mauris turpis, sed malesuada metus
  elementum dictum. Vestibulum hendrerit malesuada
  elementum. </p>
<p class="mb-0">Proin elementum, sem in ornare sodales,
  dui purus lobortis mi, ut iaculis lacus enim in dolor.
  In velit sapien, dignissim accumsan nibh eu, eleifend
  luctus metus. Quisque egestas nisl in enim hendrerit, at
  vestibulum turpis tincidunt.</p>
<div class="mt-6">
  <p class="mb-0">Cheers!</p>
  <p class="text-dark font-weight-bold mb-0">Leslie
    Alexander</p>                      </div>
</div>`;
const MailsData = [
	{
		id: 1,
		user: 'Material UI',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-1.jpg',
		title:
			'Start working on Material UI Design layouts encourage consistency across platforms, environments, and screen sizes by using uniform elements and spacing.',
		description: description,
		date: 'March 22, 2022',
		time: '10:49 pm',
		badge: 'Important',
		star: true,
		read: false,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 2,
		user: 'Search Console',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-2.jpg',
		title:
			'New Mobile Usability issues detected for site To fix this error, make sure the pages use relative width and position values for CSS elements, and make sure images can scale as well. ',
		description: description,
		date: 'March 22, 2022',
		time: '2:02 am',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 3,
		user: 'Indie Hackers',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-3.jpg',
		title:
			'Get conversions by sampling product features in your blog amet consectetur adipisicing elit. Quibusdam aut soluta repellendus culpa voluptatibus quam rerum dignissimos minus repellat? Aliquid eius commodi maiores tempora',
		description: description,
		date: 'March 22, 2022',
		time: '4:02 am',
		badge: 'Social',
		star: true,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 4,
		user: 'LinkedIn',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-4.jpg',
		title:
			'See Jitu and other people s connections, experience lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque beatae nisi illo consequatur omnis reprehenderit iste porro, praesentium animi..',
		description: description,
		date: 'May 2, 2021',
		time: 'May 12',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 5,
		user: 'Bootstrap Themes',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-5.jpg',
		title:
			'[Bootstrap Themes] New order (89153)! You ve received the following consectetur adipisicing elit. Sequi sed dolor repellat reprehenderit officia est sint cupiditate esse error quo dolore, non ab voluptates',
		description: description,
		date: 'May 2, 2021',
		time: 'May 2',
		badge: '',
		star: true,
		read: false,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 6,
		user: 'Dribbble',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-6.jpg',
		title:
			'NEW two week crash course: Grow Your Creative Business lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis excepturi nihil earum exercitationem. Deserunt expedita nostrum illum facilis incidunt delectus veniam!',
		description: description,
		date: 'Apr 30, 2021',
		time: 'Apr 30',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 7,
		user: 'Mailchimp Account',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-7.jpg',
		title:
			'Weekly account summary from Mailchimp. Here are your weekly stats ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sunt aliquam, molestiae sapiente eos error quam maxime distinctio ea, aut eveniet libero!.',
		description: description,
		date: 'Apr 22, 2022',
		time: 'Apr 22',
		badge: '',
		star: true,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 8,
		user: 'Anita , me 2',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-8.jpg',
		title:
			"theme js files aren't working. Hello anita, I think you need to use amet consectetur adipisicing elit. At ea nesciunt eos quod, amet culpa veritatis maxime odit. Doloribus facilis, omnis totam nisi nulla voluptatem. ...",
		description: description,
		date: 'Apr 20, 2022',
		time: 'Apr 20',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 9,
		user: 'Substack Blog',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-9.jpg',
		title:
			'Introducing Substack Local, for a new generation of local news lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis hic minima architecto, quasi suscipit.',
		description: description,
		date: 'Apr 12, 2022',
		time: 'Apr 12',
		badge: 'Promotions',
		star: true,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 10,
		user: 'Google Analytics',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-10.jpg',
		title:
			'Remember to set up today for the future of Google Analytics sit amet consectetur adipisicing elit. Repellendus, asperiores veritatis. Reiciendis optio ex nisi, odit id atque ipsum iusto obcaecati earum.',
		description: description,
		date: 'Mar 31, 2022',
		time: 'Mar 31',
		badge: '',
		star: false,
		read: false,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 11,
		user: 'YouTube',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-11.jpg',
		title:
			'New comment on Designing The Perfect Accordion UI Design in Figma" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe at in excepturi quos ipsam atque odit.',
		description: description,
		date: 'Feb 24, 2022',
		time: 'Feb 24',
		badge: '',
		star: true,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 12,
		user: 'Twitter',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-12.jpg',
		title:
			'@getcodescandy, check out the notifications you have on Twitter Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe at in excepturi quos ipsam atque odit.',
		description: description,
		date: 'Feb 20, 2022',
		time: 'Feb 20',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 13,
		user: 'Material UI',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-1.jpg',
		title:
			'Start working on Material UI Design layouts encourage consistency across platforms, environments, and screen sizes by using uniform elements and spacing.',
		description: description,
		date: 'March 22, 2022',
		time: '10:49 pm',
		badge: 'Important',
		star: true,
		read: false,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 14,
		user: 'Search Console',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-2.jpg',
		title:
			'New Mobile Usability issues detected for site To fix this error, make sure the pages use relative width and position values for CSS elements, and make sure images can scale as well. ',
		description: description,
		date: 'March 22, 2022',
		time: '2:02 am',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 15,
		user: 'Indie Hackers',
		email: 'info@material-ui.com',
		avatar: '/images/avatar/avatar-3.jpg',
		title:
			'NEW two week crash course: Grow Your Creative Business lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis excepturi nihil earum exercitationem. Deserunt expedita nostrum illum facilis incidunt delectus veniam!',
		description: description,
		date: 'March 22, 2022',
		time: '4:02 am',
		badge: 'Social',
		star: true,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	},
	{
		id: 16,
		user: 'LinkedIn',
		email: 'hello@example.com',
		avatar: '/images/avatar/avatar-4.jpg',
		title:
			'Remember to set up today for the future of Google Analytics sit amet consectetur adipisicing elit. Repellendus, asperiores veritatis. Reiciendis optio ex nisi, odit id atque ipsum iusto obcaecati earum.',
		description: description,
		date: 'May 2, 2021',
		time: 'May 12',
		badge: '',
		star: false,
		read: true,
		hidden: false,
		archive: false,
		is_checked: false,
		attachments: [
			{
				id: uuid(),
				fileType: 'jpg',
				fileSize: '15.54 KB',
				icon: 'thumbnail',
				fileName: 'image-thumbnail.jpg'
			},
			{
				id: uuid(),
				fileType: 'pdf',
				fileSize: '15.54 KB',
				icon: 'pdf',
				fileName: 'document.pdf'
			}
		]
	}
];

export default MailsData;
