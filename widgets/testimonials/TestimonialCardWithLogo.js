import { Image } from 'react-bootstrap'

const TestimonialCardWithLogo = ({ item }) => {
    return (
        <div className="mb-10 mb-md-0">
            <div className="mb-4">
                <Image src={item.image} alt="" />
            </div>
            <p className="fs-3 mb-5">&quot;{item.content}&quot;</p>
            <h4 className="mb-0">{item.name}</h4>
            <p>{item.designation}</p>
        </div>
    )
}

export default TestimonialCardWithLogo