// import sub components
import JobSingle from './Index';

// import data files
import JobsListingData from 'data/marketing/jobs/JobsListingData';

export async function generateMetadata({ params }) {
  const data = JobsListingData.filter((blog) => blog.slug === params.slug)[0]
  return { title: data.position + ' at ' + data.company + ' | Job Single | Jobs | Geeks Nextjs Template' }
}

const Page = ({ params }) => {
  const data = JobsListingData.filter((blog) => blog.slug === params.slug)[0]
  return (<JobSingle job={data} slug={params.slug} />);
};

export default Page;
