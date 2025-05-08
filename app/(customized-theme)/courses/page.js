// import sub components
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import CourseFilterPage from "./Index";

export const metadata = {
  title: "Courses | Editors Academy",
  description: "Courses offered by Editors Academy",
};

const Page = () => {
  return (
    <>
      <CourseFilterPage />
    </>
  );
};

export default Page;
