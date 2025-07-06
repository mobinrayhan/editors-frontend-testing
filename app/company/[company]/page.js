import { notFound } from "next/navigation";
import AboutJames from "widgets/company/AboutJp";

export default async function Company({ params }) {
  const { company } = await params;

  switch (company) {
    case "about-james-prince":
      return <AboutJames />;

    default:
      return notFound();
  }
}
