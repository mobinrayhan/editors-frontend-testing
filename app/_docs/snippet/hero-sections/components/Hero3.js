// import widget/custom components
import { HeroAcademy } from "widgets";

export const Hero3 = () => {
  return (
    <HeroAcademy
      bulletArray={["Most trusted education platform"]}
      title="Grow your skills and advance career"
      description="Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-className universities and companies."
      buttonText="Join Free Now"
      buttonLink="#"
      youTubeVideoID="JRzWRZahOVU"
    />
  );
};

export const Hero3Code = `
// import widget/custom components
import { HeroAcademy } from 'widgets';

export const Hero3Example = () => {
    return <HeroAcademy
        bulletArray={['Most trusted education platform']}
        title='Grow your skills and advance career'
        description='Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-className universities and companies.'
        buttonText='Join Free Now'
        buttonLink='#'
        youTubeVideoID='JRzWRZahOVU' />
}`.trim();
