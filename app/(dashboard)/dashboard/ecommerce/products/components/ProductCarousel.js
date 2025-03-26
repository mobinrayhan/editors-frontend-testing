// import node module libraries
import { Carousel, Image } from 'react-bootstrap';

const ProductCarousel = ({ images }) => {
  return (
    <Carousel data-bs-theme="dark">
      {images?.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <Image className="img-fluid rounded-top-md d-block w-100" src={item.image} alt="" />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default ProductCarousel