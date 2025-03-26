/***************************
Component : DotBadge
****************************

Availalble Parameters

bg        : Optional ( default = primary ), possible bg options are, primary, light-primary, secondary,  light-secondary etc...
className : Optional ( default = me-2 )

*/

// import node module libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-bootstrap';

const DotBadge = (props = { className: 'me-2', bg: 'light-primary' }) => {
	return (
		<span className={props.className}>
			<Badge bg={props.bg} className="badge-dot"></Badge> {props.children}
		</span>
	);
};

DotBadge.propTypes = {
	bg: PropTypes.string,
	className: PropTypes.string
};

export default DotBadge;
