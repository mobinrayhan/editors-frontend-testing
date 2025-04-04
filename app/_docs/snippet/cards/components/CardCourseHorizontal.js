// import node module libraries
import { Container } from "react-bootstrap";

// import widget/custom components
import { CourseCard } from "widgets";

export const CardCourseHorizontal = () => {
    const data = [
        {
            id: 1,
            image: '/images/course/course-gatsby.jpg',
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            instructor_image: '/images/avatar/avatar-7.jpg',
            level: 'Intermediate',
            duration: '1h 46m',
            rating: 2.0,
            ratingby: 16500,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <CourseCard item={data[0]} viewby="list" />
            </Container>
        </section>
    )
}

export const CardCourseHorizontalCode = `
import { Container } from "react-bootstrap";
import { CourseCard } from "widgets";

export const CardCourseHorizontalExample = () => {
    const data = [
        {
            id: 1,
            image: '/images/course/course-gatsby.jpg',
            title: 'Revolutionize how you build the web',
            instructor_name: 'Jenny Wilson',
            instructor_image: '/images/avatar/avatar-7.jpg',
            level: 'Intermediate',
            duration: '1h 46m',
            rating: 2.0,
            ratingby: 16500,
            link: '#'
        }
    ]
    return (
        <section className="py-6 bg-light">
            <Container>
                <CourseCard item={data[0]} viewby="list" />
            </Container>
        </section>
    )
}
`.trim();
