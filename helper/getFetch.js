export default async function getFetch(URL) {
  console.log("====================================");
  console.log(URL);
  console.log("====================================");
  return await (
    await fetch(URL, {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    })
  ).json();
}
