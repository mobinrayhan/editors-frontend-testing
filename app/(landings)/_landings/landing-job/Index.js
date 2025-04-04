'use client'

import { Fragment } from 'react';

// import widget/custom components
import { HeroFindJobs, LogosTopHeadingOffset2 } from 'widgets';

// import sub components 
import LatestJobOpening from './components/LatestJobOpening';
import BrowseJobCategories from './components/BrowseJobCategories';
import HowItWorks from './components/HowItWorks';
import CustomerStories from './components/CustomerStories';
import TopCompanies from './components/TopCompanies';

// import data files
import LogoList2 from 'data/clientlogos/LogoList2';

const LandingJob = () => {
    return (
        <Fragment>

            {/* Find your dream job section */}
            <HeroFindJobs
                title='Find your dream job that you love to do.'
                description='The largest remote work community in the world. Sign up and post a job or create your developer profile.'
                totalJobs={30642}
                totalCompanies={5717}
            />

            {/* Logos section  */}
            <section className="py-8 bg-white">
                <LogosTopHeadingOffset2 limit={5} offset={1} logos={LogoList2} />
            </section>

            {/* Latest Job Opening section */}
            <LatestJobOpening />

            {/* How It Works section */}
            <HowItWorks />

            {/* Browse Category section */}
            <BrowseJobCategories />

            {/* Customer stories section */}
            <CustomerStories />

            {/* Top companies hiring section */}
            <TopCompanies />

        </Fragment>
    )
}

export default LandingJob