'use client';

// import sub components
import ExploreMentors from './components/ExploreMentors';
import FREETrialSession from './components/FREETrialSession';
import EasySteps from './components/EasySteps';
import TestimonialsByMentees from './components/TestimonialsByMentees';

// import widget/custom components
import { CTAMentor, HeroTypedMentors, LogosTopBrands } from 'widgets'

// import required data files
import BrandLogoList from 'data/clientlogos/BrandLogoList'
import MentorListData from 'data/marketing/mentor/MentorListData';

const Mentor = () => {
    return (
        <main>

            {/* Hero section */}
            <HeroTypedMentors
                title='Learn a new skill, launch a project, land your dream career.'
                typedBefore='1-on-1'
                typedArray={['Javascript', 'Startup', 'React', 'Marketing', 'Branding']}
                typedAfter='Mentorship'
                tags={['Frontend', 'Devops', 'UI/UX designer', 'Data Science', 'Full Stack', 'Backend', 'Data Analyst']}
                marqueeData={MentorListData}
            />

            {/* Logo section */}
            <LogosTopBrands
                title="Learn from founders/operators of top brands."
                logos={BrandLogoList} />

            {/* Explore Mentors by Category */}
            <ExploreMentors />

            {/* FREE trial session */}
            <FREETrialSession />

            {/* Easy Steps */}
            <EasySteps />

            {/* Testimonials By Mentees */}
            <TestimonialsByMentees />

            {/* Call to action  */}
            <CTAMentor />

        </main>

    )
}

export default Mentor