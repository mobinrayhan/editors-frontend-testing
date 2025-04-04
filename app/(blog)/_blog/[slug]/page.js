// import sub components
import BlogArticleSingle from './Index';

// import data files
import BlogArticlesList from 'data/blog/blogArticlesData';

export async function generateMetadata({ params }) {
	const data = BlogArticlesList.filter((blog) => blog.slug === params.slug)[0]
	return { title: data.title + ' | Geeks Nextjs Template' }
}

const Page = ({ params }) => {
	const data = BlogArticlesList.filter((blog) => blog.slug === params.slug)[0]
	return (<BlogArticleSingle item={data} />);
};

export default Page;
