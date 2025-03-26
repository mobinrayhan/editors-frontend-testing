
const blogContent = `<p><h4>Design Systems for Developers Geeks a modern, clean and accessibility oriented design system for developing fast and powerful web interfaces.</h4>
<br>Condimentum leo utipsum euismod feugiatn elntum sapiennonser variusmi elementum necunc elementum velitnon tortor convallis variusa placerat nequhse. 
Mauris varius ullamcorper tincidsellus egestas innisivel sollicituullam feugiate facilisis ones Suspendisse blandit sedtincinean.<br>
Mauris varius ullamcorper tincidsellus egestas innisivel sollicituullam feugiate facilisis ones velleo finibus maximus nequsese sedmattis auspendisse<u>
duimetus ullamcorper faucibuse blandit</u> sedtincinean.</p></div><br><hr><br><blockquote style="text-align: center;">
<h2 style="color: rgb(117, 79, 254);">"Failure will never overtake me if my determination to succeed is strong enough."</h2><footer>
<cite title="Source Title">Og Mandino</cite></footer></blockquote><br><hr><br><div><p>Condimentum leo utipsum euismod feugiatn elntum 
<strong>sapiennonser variusmi elementum </strong>necunc elem entum velitnon tortor convallis variusa placerat nequhse. Quis eu Lorem irure magna. 
Ex labore reprehenderit veniam irure id nostrud velit. Minim aliquip cillum laborum qui Lorem eu.</p>
<p>Sint officia nulla deserunt voluptate non amet consequat ipsum tempor. Nulla id cupidatat ipsum occaecat. Aute ad et fugiat velit sunt qui veniam labore elit ipsum commodo proident. 
Sit tempor consectetur commodo laborum mollit. Enim sint nostrud nisi in ad aliqua laboris ad non.</p></div><div><h3>Unordered Lists (Nested)</h3><br><ul><li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li><li>Integer molestie lorem at massa</li><li>Facilisis in pretium nisl aliquet</li><li>Nulla volutpat aliquam velit<ul><li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li><li>Vestibulum laoreet porttitor sem</li><li>Ac tristique libero volutpat at</li></ul></li><li>Faucibus porta lacus fringilla vel</li><li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li></ul></div><div><h3>Ordered List (Nested)</h3><ol><li>Lorem ipsum dolor sit amet</li><li>Consectetur adipiscing elit</li><li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li><li>Nulla volutpat aliquam velit<ol><li>Phasellus iaculis neque</li><li>Purus sodales ultricies</li><li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li></ol></li><li>Faucibus porta lacus fringilla vel</li><li>Aenean sit amet erat nunc</li><li>Eget porttitor lorem</li></ol></div><div><h2>Image </h2>
<p>Sint officia nulla deserunt voluptate non amet consequat ipsum tempor. Nulla id cupidatat ipsum occaecat. Aute ad et fugiat velit sunt qui veniam labore elit ipsum commodo proident. 
Sit tempor consectetur commodo laborum mollit. Enim sint nostrud nisi in ad aliqua laboris ad non.</p>
<img src="https://codescandy.com/geeks-bootstrap-5/assets/images/blog/center-img.jpg" alt=""  style="width:100%">`;

const BlogArticles = [
	{
		id: 1,
		blogpostimage: '/images/blog/blogpost-2.jpg',
		category: 'Courses',
		title: 'Getting started the Web App JavaScript in 2020',
		slug: 'getting-started-the-web-app-javascript-in-2020',
		details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
		authorname: 'Dustin Warren',
		authorimage: '/images/avatar/avatar-6.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 13, 2020',
		readinglength: 6,
		content: blogContent
	},
	{
		id: 2,
		blogpostimage: '/images/blog/blogpost-3.jpg',
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-7.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 3,
		blogpostimage: '/images/blog/blogpost-1.jpg',
		category: 'Tutorial',
		title: 'What is PHP Function? For Beginner’s Guide',
		slug: 'what-is-php-function-for-beginners-guide',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Lisa Menon',
		authorimage: '/images/avatar/avatar-8.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 06, 2020',
		readinglength: 8,
		content: blogContent
	},
	{
		id: 4,
		blogpostimage: '/images/blog/blogpost-4.jpg',
		category: 'Workshop',
		title: 'What is Cyber Security? A Beginner’s Guide',
		slug: 'what-is-cyber-security-a-beginners-guide',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Maria Pinto',
		authorimage: '/images/avatar/avatar-9.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 07, 2020',
		readinglength: 15,
		content: blogContent
	},
	{
		id: 5,
		blogpostimage: '/images/blog/blogpost-5.jpg',
		category: 'Tutorial',
		title: 'What is machine learning and how does it work?',
		slug: 'what-is-machine-learning-and-how-does-it-work',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Loran Sipon',
		authorimage: '/images/avatar/avatar-10.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 08, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 6,
		blogpostimage: '/images/blog/blogpost-3.jpg',
		category: 'Workshop',
		title: 'The Best DevOps Tools for Your Application Lifecycle',
		slug: 'the-best-devops-tools-for-your-application-lifecycle',
		details: 'Inventore pariatur veritatis maxime fugiat sint dolorem quas culpa officiis nemo quis!',
		authorname: 'Dustin Warren',
		authorimage: '/images/avatar/avatar-1.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 09, 2020',
		readinglength: 12,
		content: blogContent
	},
	{
		id: 7,
		blogpostimage: '/images/blog/blogpost-1.jpg',
		category: 'Company',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020-2',
		details: 'At beatae non sit dicta similique perspiciatis facilis veritatis quam. Recusandae, corrupti?',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-2.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 10, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 8,
		blogpostimage: '/images/blog/blogpost-6.jpg',
		category: 'Company',
		title: 'How to Become a Data Scientist?',
		slug: 'how-to-become-a-data-scientist',
		details: 'Nulla voluptate in facere saepe est alias et iste, accusantium sint enim!',
		authorname: 'Miron Sulla',
		authorimage: '/images/avatar/avatar-3.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 9,
		blogpostimage: '/images/blog/blogpost-1.jpg',
		category: 'Workshop',
		title: 'How to become WebDesinger?',
		slug: 'how-to-become-webdesinger-3',
		details: 'Vero expedita voluptatibus cumque sunt ullam cum natus, vitae provident debitis pariatur?',
		authorname: 'Lucy Kolin',
		authorimage: '/images/avatar/avatar-4.jpg',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 10,
		blogpostimage: '/images/blog/blogpost-2.jpg',
		category: 'Tutorial',
		title: 'Developing Agile Leadership',
		slug: 'developing-agile-leadership',
		details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
		authorname: 'Jerry Dom',
		authorimage: '/images/avatar/avatar-5.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 13, 2020',
		readinglength: 12,
		content: blogContent
	},
	{
		id: 11,
		blogpostimage: '/images/blog/blogpost-2.jpg',
		category: 'Tutorial',
		title: 'Getting started the Web App JavaScript in 2022',
		slug: 'getting-started-the-web-app-javascript-in-2022',
		details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
		authorname: 'Dustin Warren',
		authorimage: '/images/avatar/avatar-6.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 13, 2020',
		readinglength: 6,
		content: blogContent
	},
	{
		id: 12,
		blogpostimage: '/images/blog/blogpost-3.jpg',
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020-3',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-7.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 13,
		blogpostimage: '/images/blog/blogpost-4.jpg',
		category: 'Tutorial',
		title: 'What is Cyber Security? A Beginner’s Guide',
		slug: 'what-is-cyber-security-a-beginners-guide-2',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Maria Pinto',
		authorimage: '/images/avatar/avatar-9.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 07, 2020',
		readinglength: 15,
		content: blogContent
	},
	{
		id: 14,
		blogpostimage: '/images/blog/blogpost-3.jpg',
		category: 'Tutorial',
		title: 'The Best DevOps Tools for Your Application Lifecycle',
		slug: 'the-best-devops-tools-for-your-application-lifecycle-2',
		details: 'Inventore pariatur veritatis maxime fugiat sint dolorem quas culpa officiis nemo quis!',
		authorname: 'Dustin Warren',
		authorimage: '/images/avatar/avatar-1.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 09, 2020',
		readinglength: 12,
		content: blogContent
	},
	{
		id: 15,
		blogpostimage: '/images/blog/blogpost-5.jpg',
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020-4',
		details: 'At beatae non sit dicta similique perspiciatis facilis veritatis quam. Recusandae, corrupti?',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-2.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 10, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 16,
		blogpostimage: '/images/blog/blogpost-6.jpg',
		category: 'Company',
		title: 'How to Become a Data Scientist?',
		slug: 'how-to-become-a-data-scientist-2',
		details: 'Nulla voluptate in facere saepe est alias et iste, accusantium sint enim!',
		authorname: 'Miron Sulla',
		authorimage: '/images/avatar/avatar-3.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 17,
		blogpostimage: '/images/blog/blogpost-1.jpg',
		category: 'Tutorial',
		title: 'How to become WebDesinger?',
		slug: 'how-to-become-webdesinger',
		details: 'Vero expedita voluptatibus cumque sunt ullam cum natus, vitae provident debitis pariatur?',
		authorname: 'Lucy Kolin',
		authorimage: '/images/avatar/avatar-4.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 18,
		blogpostimage: '/images/blog/blogpost-3.jpg',
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020-5',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-7.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 19,
		blogpostimage: '/images/blog/blogpost-6.jpg',
		category: 'Workshop',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020-6',
		details: 'At beatae non sit dicta similique perspiciatis facilis veritatis quam. Recusandae, corrupti?',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-2.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 10, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 20,
		blogpostimage: '/images/blog/blogpost-3.jpg',
		category: 'Tutorial',
		title: 'How to Become a Data Scientist?',
		slug: 'how-to-become-a-data-scientist-3',
		details: 'Nulla voluptate in facere saepe est alias et iste, accusantium sint enim!',
		authorname: 'Miron Sulla',
		authorimage: '/images/avatar/avatar-3.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 21,
		blogpostimage: '/images/blog/blogpost-1.jpg',
		category: 'Courses',
		title: 'How to become WebDesinger?',
		slug: 'how-to-become-webdesinger-2',
		details: 'Vero expedita voluptatibus cumque sunt ullam cum natus, vitae provident debitis pariatur?',
		authorname: 'Lucy Kolin',
		authorimage: '/images/avatar/avatar-4.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 22,
		blogpostimage: '/images/blog/blogpost-5.jpg',
		category: 'Tutorial',
		title: 'How to become modern Stack Developer in 2020',
		slug: 'how-to-become-modern-stack-developer-in-2020-7',
		details: 'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: '/images/avatar/avatar-7.jpg',
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	}
];

export default BlogArticles;
