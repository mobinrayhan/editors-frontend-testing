// import widget/custom components
import { HeroGradient } from 'widgets';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

export const Hero5 = () => {
    return <HeroGradient
        title='Modern web apps shipped faster'
        bulletArray={['Simple to use, beautiful UI design', 'Complete complex project with ease', 'An intuitive admin app for developers']}
        buttonText='Get started for Free'
        buttonLink='#'
        hrefText='Questions? Talk to an expert'
        hrefLink='#'
        logos={LogoList2}
    />
}

export const Hero5Code = `
// import widget/custom components
import { HeroGradient } from 'widgets';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

export const Hero5Example = () => {
    return <HeroGradient
        title='Modern web apps shipped faster'
        bulletArray={['Simple to use, beautiful UI design', 'Complete complex project with ease', 'An intuitive admin app for developers']}
        buttonText='Get started for Free'
        buttonLink='#'
        hrefText='Questions? Talk to an expert'
        hrefLink='#'
        logos={LogoList2}
    />
}`.trim();