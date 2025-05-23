import { getUserFromServerCookie } from "./authServer";

export default async function getFetch(URL) {
  const sessionUser = await getUserFromServerCookie();

  return await (
    await fetch(URL, {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
        Cookie: `sessionToken=${sessionUser?.user?.sessionToken || ""}`,
      },
      cache: "no-store",
    })
  ).json();
}
