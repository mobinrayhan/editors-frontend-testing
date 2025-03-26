// import widget/custom components
import { HeroEducationRightImage } from 'widgets';

export const Hero2 = () => {
    return <HeroEducationRightImage
        headingPart1='Learn today’s most in-'
        headingPart2='demand-skills'
        description='Classes & Courses website template to start creating your stunning website. All templates are fully customizable.'
        bulletArray={['No credit card required', 'Customer service 24/7', 'No setup fee', 'Cancel any time']}
        buttonText='Explore Online Courses'
        buttonLink='#'
    />
}

export const Hero2Code = `
// import widget/custom components
import { HeroEducationRightImage } from 'widgets';

export const Hero2Example = () => {
    return <HeroEducationRightImage
        headingPart1='Learn today’s most in-'
        headingPart2='demand-skills'
        description='Classes & Courses website template to start creating your stunning website. All templates are fully customizable.'
        bulletArray={['No credit card required', 'Customer service 24/7', 'No setup fee', 'Cancel any time']}
        buttonText='Explore Online Courses'
        buttonLink='#'
    />
}`.trim();