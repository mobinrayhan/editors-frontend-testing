// import sub components
import CourseSingle from "./Index";

export const metadata = {
  title: "Course | Editors Academy",
  description: "Course details page",
};

const Page = async ({ params }) => {
  const awaitedParams = await params;
  return <CourseSingle params={awaitedParams} />;
};

export default Page;
