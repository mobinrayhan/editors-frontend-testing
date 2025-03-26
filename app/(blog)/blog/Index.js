'use client'

// import sub components
import BlogArticlesListing from './components/BlogArticlesListing';

// import custom components
import SubscribeNewsroom from 'components/SubscribeNewsroom';

const BlogListing = () => {
	const title = 'Geeks Newsroom';
	const description = 'Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque.';

	return (
		<main>

			{/*  Page header subscribe newsroom */}
			<SubscribeNewsroom title={title} description={description} />

			{/* Blog article listing  */}
			<BlogArticlesListing />

		</main>
	);
};

export default BlogListing;
