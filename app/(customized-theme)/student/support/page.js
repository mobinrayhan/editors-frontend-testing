"use client";

import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SupportPage() {
  const location = usePathname();

  return (
    <ProfileLayoutWrap pathpara={location}>
      <div
        className="rounded-md p-4"
        style={{
          backgroundColor: "var(--geeks-gray-200)",
        }}
      >
        <h1>Support</h1>

        <Link
          href="https://wa.me/8801324531144?text=Welcome to editors academy"
          target="_blank"
          className="p-4 rounded-3"
          style={{
            backgroundColor: "var(--geeks-gray-100)",
            display: "flex",
            gap: "10px",
          }}
        >
          <Image src={"/whatsapp.png"} height={50} width={50} />
          <div>
            <h3 className="pb-0 mb-0">Whatsapp Support</h3>
            <Link
              href="https://wa.me/8801324531144?text=Welcome to editors academy"
              target="_blank"
            >
              +8801324531144
            </Link>
          </div>
        </Link>
      </div>
    </ProfileLayoutWrap>
  );
}
