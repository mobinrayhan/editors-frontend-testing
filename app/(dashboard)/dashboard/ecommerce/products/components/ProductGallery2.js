// import node module libraries
import React, { useRef, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Slider from 'react-slick';

// import hooks
import useMounted from 'hooks/useMounted';

const ProductGallery2 = () => {
    const hasMounted = useMounted();
    const [active, setActive] = useState(0)
    const carousel = useRef(null)
    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleClick = (index) => {
        carousel.current.slickGoTo(index)
        setActive(index)
    }
    const sliderImages = [
        '/images/ecommerce/product-slide-1.jpg',
        '/images/ecommerce/product-slide-2.jpg',
        '/images/ecommerce/product-slide-3.jpg',
        '/images/ecommerce/product-slide-4.jpg'
    ]
    return (
        <Row>
            <Col xs={12}>
                <div>
                    <div id="product-mw" >
                        <div id="product-iw">
                            <div className="product" id="product" >
                                {hasMounted && <Slider {...settings} ref={carousel}>
                                    {sliderImages.map((image, index) => {
                                        return (
                                            <div key={index}>
                                                <Image src={image} alt='Product 1' className='rounded-2 w-100' />
                                            </div>
                                        )
                                    })}
                                </Slider>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tools">
                    <Row className="thumbnails g-3" id="product-thumbnails" aria-label="Carousel Pagination">
                        {sliderImages.map((image, index) => {
                            return (
                                <Col key={index} xs={3} className={active === index ? 'nav-active' : ''} data-nav={index} aria-controls="product">
                                    <div className="thumbnails-img">
                                        <Image src={image} alt={'Product ' + index} className='w-100' onClick={() => handleClick(index)} />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default ProductGallery2