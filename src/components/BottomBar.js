import './style/BottomBar.css';
import MenuElement from './MenuElement.js';

import {Link, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import BottomBarText from "./texts/BottomBarText.js";

const BottomBar = () =>
{
	return(
		<div className="bottom-bar">

			<p style={{marginRight: "50px"}}>Website designed and created by maxska</p>

			<BottomBarText/>

		</div>
	)
}

export default BottomBar;