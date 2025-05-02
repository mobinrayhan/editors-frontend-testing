// import sub components
import getFetch from "helper/getFetch";
import CourseResume from "./Index";

export const metadata = {
  title: "Course Resume | Geeks Nextjs Template",
};

const Page = async ({ params }) => {
  const slug = params["courses"];
  // const [isOpen, setOpen] = useState(false);
  // const [YouTubeURL] = useState("JRzWRZahOVU");
  console.log(params);
  const { course } = await getFetch(
    `https://api.editors.academy/courses/${slug}`
  );

  const sections =
    course &&
    (await getFetch(
      `https://api.editors.academy/courses/${course.id}/sections`
    ));

  const instructorData = await getFetch(
    `https://api.editors.academy/courses/${course.id}/instructor`
  );
  // const instructorData = await resInstructor.json();
  const responseAllSectionWithVideo = await Promise.all(
    sections?.success === false || course === undefined
      ? []
      : sections?.courseSections?.map(async (section) => {
          const sectionVideoData = await getFetch(
            `https://api.editors.academy/courses/${course.id}/${section.id}/videos`
          );
          const sectionAssignmentData = await getFetch(
            `https://api.editors.academy/courses/${course.id}/${section.id}/assignments`
          );
          const sectionResourcesData = await getFetch(
            `https://api.editors.academy/courses/${course.id}/${section.id}/resources`
          );

          return {
            ...sectionVideoData,
            ...sectionAssignmentData,
            ...sectionResourcesData,
            ...section,
          };
        })
  );

  return <CourseResume slug={slug} sections={responseAllSectionWithVideo} />;
};

export default Page;
