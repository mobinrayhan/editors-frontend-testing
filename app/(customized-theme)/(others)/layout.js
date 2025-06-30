import { getUserFromServerCookie } from "helper/authServer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

export default async function OtherLayout({ children }) {
  const sessionUser = await getUserFromServerCookie();

  return (
    <>
      <NavbarDefault sessionUser={sessionUser} />
      {children}
    </>
  );
}
