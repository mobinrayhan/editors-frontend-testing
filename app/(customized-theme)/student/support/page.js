"use client";

import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";
import { usePathname } from "next/navigation";

export default function SupportPage() {
  const location = usePathname();

  return (
    <ProfileLayoutWrap pathpara={location}>
      <div>SupportPage</div>
    </ProfileLayoutWrap>
  );
}
