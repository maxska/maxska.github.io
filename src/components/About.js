import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';

import {useLocation} from 'react-router-dom';



const About = () =>
{
	const setActiveTab = (page) => 
	{
		document.getElementById(page).classList.add("dynamic-style")

		let otherPage = page === "work" ? "education" : "work";
		document.getElementById(otherPage).classList.remove("dynamic-style");
	}

	return(
		<div>

			<div className="page">
				<h1 className="heading">About 1</h1>

				<Router>
				
					<div className="inner-navbar">
						<Link to="/about/work" className="inner-navbar-element" id="work" onClick={() => setActiveTab("work")}>
							Work & Student work
						</Link>

						<Link to="/about/education" className="inner-navbar-element" id="education" onClick={() => setActiveTab("education")}>
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