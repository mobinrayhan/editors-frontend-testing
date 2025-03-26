// import node module libraries
import { Container } from "react-bootstrap";

// import widget/custom components
import { BlogCardFullWidth } from "widgets";

export const HorizontalCardWithImage = () => {
    const data = [
        {
            id: 1,
            blogpostimage: '/images/blog/blogpost-2.jpg',
            category: 'Courses',
            title: 'Getting started the Web App JavaScript in 2020',
            slug: 'getting-started-the-web-app-javascript-in-2020',
            details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
            authorname: 'Dustin Warren',
            authorimage: '/images/avatar/avatar-6.jpg',
            postedon: 'September 13, 2020',
            readinglength: 6
        }
    ];
    return (
        <section className="py-6 bg-light">
            <Container>
                <BlogCardFullWidth item={data[0]} />
            </Container>
        </section>
    )
}

export const HorizontalCardWithImageCode = `
import { Container } from "react-bootstrap";
import { BlogCardFullWidth } from "widgets";

export const HorizontalCardWithImageExample = () => {
    const data = [
        {
            id: 1,
            blogpostimage: '/images/blog/blogpost-2.jpg',
            category: 'Courses',
            title: 'Getting started the Web App JavaScript in 2020',
            slug: 'getting-started-the-web-app-javascript-in-2020',
            details: 'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
            authorname: 'Dustin Warren',
            authorimage: '/images/avatar/avatar-6.jpg',
            postedon: 'September 13, 2020',
            readinglength: 6
        }
    ];
    return (
        <section className="py-6 bg-light">
            <Container>
                <BlogCardFullWidth item={data[0]} />
            </Container>
        </section>
    )
}
`.trim();
