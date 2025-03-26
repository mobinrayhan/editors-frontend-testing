// TestimonialsSlider3 ( added with v2.0.0 )

// import node module libraries
import React, { Fragment } from 'react';
import Slider from 'react-slick';

// import sub components
import TestimonialCard3 from './TestimonialCard3';

// import data files
import { TestimonialsList } from 'data/testimonials/TestimonialsList';

const TestimonialsSlider3 = () => {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<Fragment>
			<Slider {...settings} className="pb-5 mb-5 testimonials">
				{TestimonialsList.map((item, index) => (
					<div className="item p-2" key={item.id}>
						<TestimonialCard3 key={index} item={item} />
					</div>
				))}
			</Slider>
		</Fragment>
	);
};

export default TestimonialsSlider3;
