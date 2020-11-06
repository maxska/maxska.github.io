import './style/TopBar.css';
import MenuElement from './MenuElement.js';

import {Link, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const TopBar = () =>
{
	return(
		<div className="top-bar">

			<Link to="/" className="logo">
				maxska
			</Link>

			<div className="links">
				<MenuElement title="Home" page=""/>

				<MenuElement title="About me" page="about/work"/>

				<MenuElement title="Projects" page="projects"/>

				<MenuElement title="Contact" page="contact"/>
			</div>

		</div>
	)
}

export default TopBar;