import { API_ENDPOINT } from "helper/global";
import { cookies } from "next/headers";
import MyCourses from ".";

export default async function MyCourseMain() {
  const sessionCookie = (await cookies()).get("userSessionToken");
  const res = await fetch(API_ENDPOINT + "/courses/user", {
    headers: {
      "x-api-key": process.env.API_KEY,
      Cookie: `userSessionToken=${sessionCookie?.value}`,
    },
  });

  const courses = await res.json();

  return <MyCourses courses={courses ?? []} />;
}
