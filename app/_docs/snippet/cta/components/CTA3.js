// import widget/custom components
import { CTABecomeAnInstructor } from 'widgets';

export const CTA3 = () => {
    const title = 'Become an instructor today';
    const description = 'Instructors from around the world teach millions of students on Geeks. We provide the tools and skills to teach what you love.';
    const btntext = 'Start Teaching Today';
    const btnlink = '#';
    return (
        <CTABecomeAnInstructor
            title={title}
            description={description}
            btntext={btntext}
            btnlink={btnlink}
        />)
}

export const CTA3Code = `
// import widget/custom components
import { CTABecomeAnInstructor } from 'widgets';

export const CTA3 = () => {
    const title = 'Become an instructor today';
    const description = 'Instructors from around the world teach millions of students on Geeks. We provide the tools and skills to teach what you love.';
    const btntext = 'Start Teaching Today';
    const btnlink = '#';
    return (
        <CTABecomeAnInstructor
            title={title}
            description={description}
            btntext={btntext}
            btnlink={btnlink}
        />)
}`.trim();