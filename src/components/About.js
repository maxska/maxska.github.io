import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';

const About = () =>
{
	return(
		<div>

			<div className="page">
				<h1 className="heading">About 1</h1>

				<Router>
				
					<div className="inner-navbar">
						<Link to="/about/work" className="inner-navbar-element">
							Work & Student work
						</Link>

						<Link to="/about/education" className="inner-navbar-element">
							Education
						</Link>
					</div>
				
					<AboutText/>

				</Router>
				


			</div>
		</div>
	)
}

export default About;