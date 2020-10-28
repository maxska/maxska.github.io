import './style/TopBar.css';
import MenuElement from './MenuElement.js';

const TopBar = () =>
{
	return(
		<div className="top-bar">
			<MenuElement title="Start"/>

			<MenuElement title="About"/>

			<MenuElement title="Projects"/>

			<MenuElement title="Contact"/>
		
		</div>
	)
}

export default TopBar;