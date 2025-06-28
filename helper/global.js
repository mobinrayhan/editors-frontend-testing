export const API_ENDPOINT = process.env.API_LINK;

export const cookieConfig = {
  // httpOnly: process.env.NODE_ENV === "development" ? false : true,
  secure: true,
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
  domain: ".editors.academy",
};
