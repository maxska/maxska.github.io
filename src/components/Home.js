import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/Home.css';

import TopBar from './TopBar.js';
import HomeText from './texts/HomeText.js';

const Home = () =>
{
	return(
		<div>
			<TopBar/>

			<div className="page">
				<h1>Home</h1>

				<HomeText/>
			</div>

		</div>
	)
}

export default Home;