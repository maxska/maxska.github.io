import './style/TopBar.css';
import MenuElement from './MenuElement.js';

const TopBar = () =>
{
	return(
		<div className="top-bar">

			<MenuElement title="Home" page=""/>

			<MenuElement title="About me" page="about"/>

			<MenuElement title="Projects" page="projects"/>

			<MenuElement title="Contact" page="contact"/>
		
		</div>
	)
}

export default TopBar;