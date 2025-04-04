'use client'

// import node module libraries
import { Fragment } from 'react';

// import sub components
import HeroCollage from './components/HeroCollage';
import CareerPositions from './components/CareerPositions';

const CareerList = () => {
	return (
		<Fragment>
			<main>

				{/* hero with collage */}
				<HeroCollage />

				{/* career positions */}
				<CareerPositions />

			</main>
		</Fragment>
	);
};

export default CareerList;
