import './style/BottomBar.css';

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