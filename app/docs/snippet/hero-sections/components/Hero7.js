// import widget/custom components
import { HeroFormRight } from 'widgets';

export const Hero7 = () => {
    return <HeroFormRight
        title='Become a Vanilla JavaScript Developer'
        description='In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.'
        hours={4}
        videos={12}
        enrolled={10234}
        buttonText='Watch Preview'
        buttonLink='#'
    />
}

export const Hero7Code = `
// import widget/custom components
import { HeroFormRight } from 'widgets';

export const Hero7Example = () => {
    return <HeroFormRight
        title='Become a Vanilla JavaScript Developer'
        description='In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.'
        hours={4}
        videos={12}
        enrolled={10234}
        buttonText='Watch Preview'
        buttonLink='#'
    />
}`.trim();