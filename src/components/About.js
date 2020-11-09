import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';

import {useLocation} from 'react-router-dom';
import MenuElement from './MenuElement';



const About = () =>
{

	let [language, setLanguage] = useState("english");

	const switchLanguage = () => 
	{
		alert("Switching from " + language);

		console.log(1)

		if (language === "english")
		{
			setLanguage("swedish")
		}
		else
		{
			setLanguage("english")
		}

		console.log(2)
	}

	return(
		<div>

			<div className="page" style={{maxWidth: "600px"}}>
				<h1 className="heading" className="inner-navbar-title">About me</h1>

				<div className="language-switch" onClick={() => switchLanguage()}>
					CHANGE LANGAUGE
				</div>

				<Router>
					
					<div className="inner-navbar">
						
						<MenuElement title="Work & Student work" page="about/work" type="local"/>

						<MenuElement title="Education" page="about/education" type="local"/>

					</div>

				
					<AboutText language={language}/>

				</Router>
				


			</div>
		</div>
	)
}

export default About;