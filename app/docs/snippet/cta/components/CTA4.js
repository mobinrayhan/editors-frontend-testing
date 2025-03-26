// import widget/custom components
import { CTAFreeTrial } from 'widgets';

export const CTA4 = () => {
    const title = 'Just try it out! You’ll fall in love';
    const subtitle = 'Get things done';
    const description = 'Designed for modern companies looking to launch a simple, premium and modern website and apps.';
    const btntext = 'Try For Free';
    const btnlink = '#';
    return (
        <CTAFreeTrial
            title={title}
            description={description}
            subtitle={subtitle}
            btntext={btntext}
            btnlink={btnlink}
        />)
}

export const CTA4Code = `
// import widget/custom components
import { CTAFreeTrial } from 'widgets';

export const CTA4Example = () => {
    const title = 'Just try it out! You’ll fall in love';
    const subtitle = 'Get things done';
    const description = 'Designed for modern companies looking to launch a simple, premium and modern website and apps.';
    const btntext = 'Try For Free';
    const btnlink = '#';
    return (
        <CTAFreeTrial
            title={title}
            description={description}
            subtitle={subtitle}
            btntext={btntext}
            btnlink={btnlink}
        />)
}`.trim();