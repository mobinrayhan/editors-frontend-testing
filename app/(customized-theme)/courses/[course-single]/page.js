// import sub components
import CourseSingle from "./Index";

export const metadata = {
  title: "Course | Editors Academy",
  description: "Course details page",
};

// export async function generateMetadata({ params }) {
//   const slug = params["Course-single"];

//   // You can fetch course data here if needed:
//   // const course = await getCourseById(courseId);

//   return {
//     title: `Course: ${slug} | Editors Academy`,
//     description: `Details for course ${slug}`,
//   };
// }

const Page = ({ params }) => {
  return <CourseSingle params={params} />;
};

export default Page;
