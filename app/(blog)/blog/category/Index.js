'use client'

// import node module libraries
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

// import sub components
import BlogListing3Col from '../components/BlogListing3Col';

// import custom components
import SubscribeNewsroom from 'components/SubscribeNewsroom';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

const BlogCategory = () => {
	const title = 'Tutorial';
	const description = 'Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque.';
	return (
		<Fragment>

			{/*  Page header subscribe newsroom */}
			<SubscribeNewsroom title={title} description={description} />

			{/* Blog article listing in three columns layout  */}
			<section className="pb-12 bg-white">
				<Container>
					<BlogListing3Col articles={BlogArticlesList} />
				</Container>
			</section>

		</Fragment>
	);
};

export default BlogCategory;
