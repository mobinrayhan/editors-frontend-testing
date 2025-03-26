// import node module libraries
import { Container } from 'react-bootstrap';

// import widget/custom components
import { ProfileCover } from 'widgets';

export const UserProfile6 = () => {
    const dashboardData = {
        avatar: '/images/avatar/avatar-1.jpg',
        name: 'Jenny Wilson',
        username: '@Jennywilson',
        linkname: 'Create New Course',
        link: '/marketing/instructor/add-new-course/',
    };
    return (
        <section className="py-3 bg-light rounded-3">
            <Container fluid>
                <ProfileCover dashboardData={dashboardData} />
            </Container>
        </section>
    )
}

export const UserProfile6Code = `
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget/custom components
import { ProfileCover } from 'widgets';

export const UserProfile6Example = () => {
    const dashboardData = {
        avatar: '/images/avatar/avatar-1.jpg',
        name: 'Jenny Wilson',
        username: '@Jennywilson',
        linkname: 'Create New Course',
        link: '/marketing/instructor/add-new-course/',
    };
    return (
        <section className="py-3 bg-light rounded-3">
            <Container fluid>
                <ProfileCover dashboardData={dashboardData} />
            </Container>
        </section>
    )
}`.trim();