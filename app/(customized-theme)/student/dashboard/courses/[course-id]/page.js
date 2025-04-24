// import sub components
import CourseResume from "./Index";

export const metadata = {
  title: "Course Resume | Geeks Nextjs Template",
};

const Page = async ({ params }) => {
  console.log("params");
  return <CourseResume />;
};

export default Page;
