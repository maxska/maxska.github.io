import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/Home.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';

const About = () =>
{
	return(
		<div>
			<TopBar/>

			<div className="page">
				<h1>About</h1>

				<AboutText/>
			</div>
		</div>
	)
}

export default About;