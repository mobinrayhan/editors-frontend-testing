const LevelIcon = ({ level }) => {
	if (level === 'Beginner') {
		return (
			<svg
				className="me-1 mt-n1 beginner-level"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="3" y="8" width="2" height="6" rx="1" />
				<rect x="7" y="5" width="2" height="9" rx="1" />
				<rect x="11" y="2" width="2" height="12" rx="1" />
			</svg>
		);
	}
	if (level === 'Intermediate') {
		return (
			<svg
				className="me-1 mt-n1 intermediate-level "
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="3" y="8" width="2" height="6" rx="1" />
				<rect x="7" y="5" width="2" height="9" rx="1" />
				<rect x="11" y="2" width="2" height="12" rx="1" />
			</svg>
		);
	}
	if (level === 'Advance') {
		return (
			<svg
				className="me-1 mt-n1 advance-level"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="3" y="8" width="2" height="6" rx="1" />
				<rect x="7" y="5" width="2" height="9" rx="1" />
				<rect x="11" y="2" width="2" height="12" rx="1" />
			</svg>
		);
	}
	return '';
};

export default LevelIcon;
