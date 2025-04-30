export default async function getFetch(URL) {
  return await (
    await fetch(URL, {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    })
  ).json();
}
