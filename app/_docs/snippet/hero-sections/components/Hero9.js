// import widget/custom components
import { HeroHeader } from 'widgets';

export const Hero9 = () => {
    return <HeroHeader
        title='Welcome to Geeks UI Learning Application'
        description='Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.'
        buttonText1='Browse Courses'
        buttonLink1='/marketing/courses/course-filter-page/'
        buttonText2='Are You Instructor?'
        buttonLink2='/authentication/sign-in/'
    />
}

export const Hero9Code = `
// import widget/custom components
import { HeroHeader } from 'widgets';

export const Hero9Example = () => {
    return <HeroHeader
        title='Welcome to Geeks UI Learning Application'
        description='Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.'
        buttonText1='Browse Courses'
        buttonLink1='/marketing/courses/course-filter-page/'
        buttonText2='Are You Instructor?'
        buttonLink2='/authentication/sign-in/'
    />
}`.trim();