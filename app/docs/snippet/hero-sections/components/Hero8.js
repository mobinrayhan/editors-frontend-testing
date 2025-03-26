// import widget/custom components
import { HeroTypedCourses } from 'widgets';

export const Hero8 = () => {
    return <HeroTypedCourses
        typedBefore='Build Better'
        typedArray={['Skills', 'Products', 'Teams', 'Future']}
        description='Build skills with courses Join Geeks to watch, play, learn, make, and discover, uscipit esi viimentum laoreet non et odio.'
        bulletArray={['30,000 online courses', 'Expert instruction', 'Lifetime access']}
        buttonText1='View Plans'
        buttonLink1='#'
        buttonText2='Try for Free'
        buttonLink2='#'
    />
}

export const Hero8Code = `
// import widget/custom components
import { HeroTypedCourses } from 'widgets';

export const Hero8Example = () => {
    return <HeroTypedCourses
        typedBefore='Build Better'
        typedArray={['Skills', 'Products', 'Teams', 'Future']}
        description='Build skills with courses Join Geeks to watch, play, learn, make, and discover, uscipit esi viimentum laoreet non et odio.'
        bulletArray={['30,000 online courses', 'Expert instruction', 'Lifetime access']}
        buttonText1='View Plans'
        buttonLink1='#'
        buttonText2='Try for Free'
        buttonLink2='#'
    />
}`.trim();