// Section : Image Gallery Section
// Style : Justified with round images

// import node module libraries
import { Image } from 'react-bootstrap';

const JustifiedGallery = ({ images }) => {
	return (
		<section className="gallery mb-12">
			{images.map((item, index) => {
				return (
					<figure
						className={`gallery__item gallery__item--${item.id} mb-0`}
						key={index}
					>
						<Image
							src={item.image}
							alt="Gallery image 1"
							className="gallery__img rounded-3"
						/>
					</figure>
				);
			})}
		</section>
	);
};

export default JustifiedGallery;
