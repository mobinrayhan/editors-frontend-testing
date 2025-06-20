// import sub components
import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import CourseResume from "./Index";

export const metadata = {
  title: "Course Resume | Geeks Nextjs Template",
};

const Page = async ({ params }) => {
  const paramsAwaited = await params;
  const slug = paramsAwaited["courses"];

  const { course } = await getFetch(`${API_ENDPOINT}/courses/${slug}`);

  const sections =
    course && (await getFetch(`${API_ENDPOINT}/courses/${course.id}/sections`));

  const splitData = paramsAwaited?.videoId?.split("-");

  console.log(
    `${API_ENDPOINT}/videos/video-otp/${slug}/${splitData[1]}/${splitData[3]}`
  );

  const videoPlayerInfo = await getFetch(
    `${API_ENDPOINT}/videos/video-otp/${slug}/${splitData[1]}/${splitData[3]}`
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
      videoInfo={videoPlayerInfo?.videoInfo}
      slug={slug}
      params={paramsAwaited}
      sections={responseAllSectionWithVideo}
    />
  );
};

export default Page;
