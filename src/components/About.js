import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';

import {useLocation} from 'react-router-dom';
import MenuElement from './MenuElement';

import EngFlag from './texts/images/eng-flag.png';
import SweFlag from './texts/images/swe-flag.png';

const About = () =>
{
	let dynamicFlag = {
		backgroundImage: `url(${EngFlag})`
	}

	let [language, setLanguage] = useState("english");

	let [languageText, setLanguageText] = useState("ENG");

	let [backImg, setBackImg] = useState("url(" + EngFlag + ")");



	const switchLanguage = () => 
	{
		console.log(1)

		console.log("=====================test======================")

		if (language === "english")
		{
			setLanguage("swedish")
			
			//document.getElementById("language-switch").style.backgroundImage = `url(${EngFlag})`;
			setBackImg(`url(${EngFlag})`)

			setLanguageText("ENG");
		}
		else
		{
			setLanguage("english")

			//document.getElementById("language-switch").style.backgroundImage = `url(${SweFlag})`;
			//setBackImg(`url(${SweFlag})`)

			setBackImg(`url(${SweFlag})`)

			setLanguageText("SWE");

			//document.getElementById("language-switch").forceUpdate();
		}

		console.log(2)
	}




	return(
		<div>
			<div className="page" style={{maxWidth: "600px"}}>

				<div className="heading-wrapper">

					<h1 className="heading" className="inner-navbar-title">About me</h1>

					<span 
					className="temp-button" 
					onClick={() => switchLanguage()}>
						Change language in<br/>the tables below
					</span>

				</div>
				


				<HashRouter>
					
					<div className="inner-navbar">
						
						<MenuElement title="Work &amp; Student work" page="about/work" type="local"/>

						<MenuElement title="Education" page="about/education" type="local"/>

					</div>

				
					<AboutText language={language}/>

				</HashRouter>

			</div>
		</div>
	)
}

export default About;