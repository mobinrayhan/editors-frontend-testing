// import sub components
import HelpCenterGuideSingle from './Index';

// import data files
import GuidesResourcesData from 'data/marketing/help-center/GuidesResourcesData';

export async function generateMetadata({ params }) {
	const category = GuidesResourcesData.filter((category) => category.categoryslug === params.category)[0]
	const data = category.articles.find(article => article.articleslug === params.slug);
	return {
		title: data?.articletitle + ' | Geeks Nextjs help center guide',
		description: data?.articletitle + ', Geeks Nextjs help center guide'
	}
}
const Page = ({ params }) => {
	const categoryData = GuidesResourcesData.filter((category) => category.categoryslug === params.category)[0]
	return (<HelpCenterGuideSingle
		category={categoryData}
		articleslug={params.slug} />);
};

export default Page;
