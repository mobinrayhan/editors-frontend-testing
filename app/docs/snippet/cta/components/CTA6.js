// import widget/custom components
import { CTA2Buttons } from 'widgets';

export const CTA6 = () => {
    return (
        <section className='bg-light'>
            <CTA2Buttons
                title="Join more than 1 million learners worldwide"
                description="Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier."
                btntext1="Start Learning for Free"
                btnlink1="/authentication/sign-up"
                btntext2="Geeks for Business"
                btnlink2="/authentication/sign-up"
            />
        </section>
    )
}

export const CTA6Code = `
// import widget/custom components
import { CTA2Buttons } from 'widgets';

export const CTA6Example = () => {
    return (
        <section className='bg-light'>
            <CTA2Buttons
                title="Join more than 1 million learners worldwide"
                description="Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier."
                btntext1="Start Learning for Free"
                btnlink1="/authentication/sign-up"
                btntext2="Geeks for Business"
                btnlink2="/authentication/sign-up"
            />
        </section>
    )
}`.trim();