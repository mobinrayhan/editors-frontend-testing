// import widget/custom components
import { HeroTypedMentors } from 'widgets';

// import required data files
import MentorListData from 'data/marketing/mentor/MentorListData';

export const Hero1 = () => {
    return <HeroTypedMentors
        title='Learn a new skill, launch a project, land your dream career.'
        typedBefore='1-on-1'
        typedArray={['Javascript', 'Startup', 'React', 'Marketing', 'Branding']}
        typedAfter='Mentorship'
        tags={['Frontend', 'Devops', 'UI/UX designer', 'Data Science', 'Full Stack', 'Backend', 'Data Analyst']}
        marqueeData={MentorListData}
    />
}

export const Hero1Code = `
// import widget/custom components
import { HeroTypedMentors } from 'widgets';

// import required data files
import MentorListData from 'data/marketing/mentor/MentorListData';

export const Hero1Example = () => {
    return <HeroTypedMentors
        title='Learn a new skill, launch a project, land your dream career.'
        typedBefore='1-on-1'
        typedArray={['Javascript', 'Startup', 'React', 'Marketing', 'Branding']}
        typedAfter='Mentorship'
        tags={['Frontend', 'Devops', 'UI/UX designer', 'Data Science', 'Full Stack', 'Backend', 'Data Analyst']}
        marqueeData={MentorListData}
    />
}`.trim();