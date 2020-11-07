import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';

import {useLocation} from 'react-router-dom';
import MenuElement from './MenuElement';



const About = () =>
{
	let activeTab;

	const setActiveTab = (page) => 
	{
		activeTab = page;

		document.getElementById(page).classList.add("dynamic-style")
		document.getElementsByClassName(page + "-outer").classList.add("invisible")

		let otherPage = page === "work" ? "education" : "work";
		document.getElementById(otherPage).classList.remove("dynamic-style");
		document.getElementsByClassName(otherPage + "-outer").classList.remove("invisible")
	}

	return(
		<div>

			<div className="page">
				<h1 className="heading" className="inner-navbar-title">About me</h1>

				<Router>
					
					<div className="inner-navbar">

						{/*
						<Link to="/about/work" className="inner-navbar-element dynamic-style" id="work" onClick={() => setActiveTab("work")}>
							Work & Student work
						</Link>
						*/}


						<MenuElement title="Work & Student work" page="about/work" type="local"/>

						<MenuElement title="Education" page="about/education" type="local"/>

						{/*
						<Link to="/about/education" className="inner-navbar-element" id="education" onClick={() => setActiveTab("education")}>
							Education
						</Link>
						*/}

					</div>

				
					<AboutText/>

				</Router>
				


			</div>
		</div>
	)
}

export default About;