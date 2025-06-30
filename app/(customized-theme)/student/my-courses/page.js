"use client";

import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";
import { usePathname } from "next/navigation";

export default function MyuCourses() {
  const location = usePathname();

  return (
    <ProfileLayoutWrap pathpara={location}>
      <div>MyuCourses</div>
    </ProfileLayoutWrap>
  );
}
