// import node module libraries
import Link from 'next/link';

// import sub components
import LevelIcon from './LevelIcon';

// import widget/custom components
import { GKTippy }  from 'widgets';

const LevelIconWithTooltip = ({ level }) => {
	if (level === 'Beginner' || level === 'Intermediate' || level === 'Advance') {
		return (
			<GKTippy content={level} >
				<Link href="#"><LevelIcon level={level} /></Link>
			</GKTippy>
		);
	} else {
		return '';
	}
};
export default LevelIconWithTooltip;
