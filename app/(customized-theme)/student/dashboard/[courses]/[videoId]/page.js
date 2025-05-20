// import sub components
import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import CourseResume from "./Index";

export const metadata = {
  title: "Course Resume | Geeks Nextjs Template",
};

const Page = async ({ params }) => {
  const slug = (await params)["courses"];

  const { course } = await getFetch(`${API_ENDPOINT}/courses/${slug}`);

  const sections =
    course && (await getFetch(`${API_ENDPOINT}/courses/${course.id}/sections`));

  const instructorData = await getFetch(
    `${API_ENDPOINT}/courses/${course.id}/instructors`
  );
  // const instructorData = await resInstructor.json();
  const responseAllSectionWithVideo = await Promise.all(
    sections?.success === false || course === undefined
      ? []
      : sections?.courseSections?.map(async (section) => {
          const sectionVideoData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/${section.id}/videos`
          );
          const sectionAssignmentData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/${section.id}/assignments`
          );
          const sectionResourcesData = await getFetch(
            `${API_ENDPOINT}/courses/${course.id}/${section.id}/resources`
          );

          return {
            ...sectionVideoData,
            ...sectionAssignmentData,
            ...sectionResourcesData,
            ...section,
          };
        })
  );

  return (
    <CourseResume
      slug={slug}
      params={params}
      sections={responseAllSectionWithVideo}
    />
  );
};

export default Page;
