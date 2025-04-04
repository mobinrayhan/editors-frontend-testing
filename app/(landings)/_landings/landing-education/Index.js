'use client';

// import node module libraries
import React, { useEffect } from 'react'

// import sub components
import ExploreSkillCourses from './components/ExploreSkillCourses';
import BuildingSkills from './components/BuildingSkills';
import LearnLatestSkills from './components/LearnLatestSkills';
import UpcomingWebinars from './components/UpcomingWebinars';
import EducationFeaturesWithBullets from './components/EducationFeaturesWithBullets';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

// import widget/custom components
import { CTAStartLearning, HeroEducationRightImage, LogosTopHeading3 } from 'widgets';

const LandingEducation = () => {
    useEffect(() => {
        document.body.className = 'bg-white';
    });

    const title = 'Let’s find the right course for you!';
    const subtitle = '…and achieve their learning goals. With our expert tutors, your goals are closer than ever!';
    const btntext = 'Start learning';
    const btnlink = '#';

    return (
        <main>

            {/*  learn today hero section */}
            <HeroEducationRightImage
                headingPart1='Learn today’s most in-'
                headingPart2='demand-skills'
                description='Classes & Courses website template to start creating your stunning website. All templates are fully customizable.'
                bulletArray={['No credit card required', 'Customer service 24/7', 'No setup fee', 'Cancel any time']}
                buttonText='Explore Online Courses'
                buttonLink='#'
            />

            {/*  trusted */}
            <LogosTopHeading3
                title="TRUSTED BY OVER 12,500 GREAT TEAMS"
                logos={LogoList2}
                limit={5}
            />

            {/*  Explore skill courses */}
            <ExploreSkillCourses />

            {/*  Building strong foundational skills */}
            <BuildingSkills />

            {/*  Learn latest Skills */}
            <LearnLatestSkills />

            {/*  Features With Bullets */}
            <hr className="my-0 bg-transparent text-white" />
            <EducationFeaturesWithBullets />

            {/*  upcoming webinars */}
            <UpcomingWebinars />

            {/*  call to action start learning */}
            <CTAStartLearning
                title={title}
                subtitle={subtitle}
                btntext={btntext}
                btnlink={btnlink}
            />

        </main>
    )
}

export default LandingEducation