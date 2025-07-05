"use client";

import CourseListView from "app/(customized-theme)/courses/components/CourseListView";
import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";
import { usePathname } from "next/navigation";

export default function MyCourses({ courses }) {
  const location = usePathname();

  return (
    <ProfileLayoutWrap pathpara={location}>
      <div className="rounded-md p-4 bg-white">
        <h1>My All Courses</h1>
        <CourseListView instructors={{}} courses={courses} />
      </div>
    </ProfileLayoutWrap>
  );
}
