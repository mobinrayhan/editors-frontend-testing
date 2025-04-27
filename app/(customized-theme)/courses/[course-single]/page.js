// import sub components
import CourseSingle from "./Index";

export const metadata = {
  title: "Course Single | Geeks Nextjs Template",
};

const Page = ({ params }) => {
  return <CourseSingle params={params} />;
};

export default Page;
