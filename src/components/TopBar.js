import './style/TopBar.css';
import MenuElement from './MenuElement.js';

import {Link} from 'react-router-dom';
import MainLogo from './texts/images/maxska-logo.png';

const TopBar = () =>
{
	return(
		<div className="top-bar">


			<Link to="" className="logo">
				<img src={MainLogo} alt="maxska personal website"
				className="logo-img"
				style={{
					width: "200px"
				}}
				/>
			</Link>


			<div className="links">
				<MenuElement title="Home" page="" type="global"/>

				<MenuElement title="About me" page="about/work" type="global"/>

				<MenuElement title="Projects" page="projects" type="global"/>

				<MenuElement title="Contact" page="contact" type="global"/>
			</div>

		</div>
	)
}

export default TopBar;