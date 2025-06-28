// import sub components
import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import { notFound } from "next/navigation";
import CourseSingle from "./Index";

export async function generateMetadata({ params }) {
  const slug = (await params)["course-single"];
  const { course } = await getFetch(`${API_ENDPOINT}/courses/${slug}`);

  if (!course) {
    notFound();
  }

  const title = course.title || "Course | Editors Academy";
  const description =
    course.description || "Learn from expert-led courses on Editors Academy.";
  const image = course.thumbnail || "/default-thumbnail.png";
  const url = `https://editors.academy/courses/${course.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    metadataBase: new URL("https://editors.academy"),
    alternates: {
      canonical: url,
    },
  };
}

const Page = async ({ params }) => {
  const awaitedParams = await params;
  return <CourseSingle params={awaitedParams} />;
};

export default Page;
