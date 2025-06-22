// import widget/custom components
import { HeroHeader } from "widgets";

export const Hero9 = () => {
  return (
    <HeroHeader
      title="Unlock Your Creative Potential with Editors Academy"
      description="Join a dynamic learning hub where industry experts guide you through hands-on courses in editing, filmmaking, and digital content creation — built for modern learners, entrepreneurs, and creatives."
      buttonText1="Browse Courses"
      buttonLink1="/marketing/courses/course-filter-page/"
      buttonText2="Are You Instructor?"
      buttonLink2="/authentication/sign-in/"
    />
  );
};

export const Hero9Code = `
// import widget/custom components
import { HeroHeader } from 'widgets';

export const Hero9Example = () => {
    return <HeroHeader
        title='Unlock Your Creative Potential with Editors Academy'
        description='Join a dynamic learning hub where industry experts guide you through hands-on courses in editing, filmmaking, and digital content creation — built for modern learners, entrepreneurs, and creatives.'
        buttonText1='Browse Courses'
        buttonLink1='/marketing/courses/course-filter-page/'
        buttonText2='Are You Instructor?'
        buttonLink2='/authentication/sign-in/'
    />
}`.trim();
