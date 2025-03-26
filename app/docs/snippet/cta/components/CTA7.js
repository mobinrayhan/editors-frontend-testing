// import widget/custom components
import { CTAButton } from 'widgets';

export const CTA7 = () => {
    const title = 'Join the Geeks team & shape the future of design';
    const description = 'If you’re passionate and ready to dive in, we’d love to meet you. We’re committed to supporting our employee professional development and well-being.';
    const btntext = 'View opportunities';
    const btnlink = '#';
    return (
        <CTAButton
            title={title}
            description={description}
            btntext={btntext}
            btnlink={btnlink}
        />
    )
}

export const CTA7Code = `
// import widget/custom components
import { CTAButton } from 'widgets';

export const CTA7Example = () => {
    const title = 'Join the Geeks team & shape the future of design';
    const description = 'If you’re passionate and ready to dive in, we’d love to meet you. We’re committed to supporting our employee professional development and well-being.';
    const btntext = 'View opportunities';
    const btnlink = '#';
    return (
        <CTAButton
            title={title}
            description={description}
            btntext={btntext}
            btnlink={btnlink}
        />
    )
}`.trim();