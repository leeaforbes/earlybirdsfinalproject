import "./HelpScreen.scss"
import helpscreen from './data/images/helpscreen.png';

const HelpScreen = () => {

	return (
		<div className='help-modal'>
			<img src={helpscreen} alt='helpscreen'/>
		</div>
	)
};

export default HelpScreen;