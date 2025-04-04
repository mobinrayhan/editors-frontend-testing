// import node module libraries
import { Container } from 'react-bootstrap';

// import widget/custom components
import { CourseSlider } from 'widgets';

export const Slider1 = () => {
    return (
        <section className='p-4 bg-light'>
            <Container className='pt-8'>
                <CourseSlider />
            </Container>
        </section>
    )
}

export const Slider1Code = `
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget/custom components
import { CourseSlider } from 'widgets';

export const Slider1Example = () => {
    return (
        <section className='p-4 bg-light'>
            <Container className='pt-8'>
                <CourseSlider />
            </Container>
        </section>
    )
}
`.trim();