// import node module libraries
import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker
} from "react-simple-maps";

// Import required data files
import WorldMap from 'data/dashboard/WorldMap';

const MapChart = () => {

	const markers = [
		{ markerOffset: 50, name: 'United Kingdom', coordinates: [-11.6368, 53.613] },
		{ markerOffset: 50, name: 'India', coordinates: [79.7276105, 20.7504374] },
		{ markerOffset: 50, name: 'United States', coordinates: [-104.657039, 37.2580397] },
		{ markerOffset: 50, name: 'Australia', coordinates: [126.2092761, -25.0304388] }
	];

	return (
		<ComposableMap>
			<Geographies geography={WorldMap}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							fill="#dee2e8"
						/>
					))
				}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				<Marker key={name} coordinates={coordinates}>
					<circle r={10} fill="#754ffe" stroke="#c5b7fc" strokeWidth={5} />
					<text
						textAnchor="middle"
						y={markerOffset}
						style={{ fontFamily: 'system-ui', fontSize: '20px', fill: '#5D5A6D' }}
					>
						{name}
					</text>
				</Marker>
			))}
		</ComposableMap>
	);
};

export default MapChart;
