import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from 'react';

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';


import {useLocation} from 'react-router-dom';
import MenuElement from './MenuElement';


import StudentWorkTable from "./StudentWorkTable.js";
import WorkTable from "./WorkTable.js";
import './style/AboutText.css';

import EducationTable from "./EducationTable.js";
import EducationTable_D from "./EducationTable_D.js";


import MT_table from "./texts/MT.json";
import other_table from "./texts/other.json";
import D_table from "./texts/D.json";
import AboutTexts from "./texts/AboutTexts.json";



const InfoLinks = (props) =>
{
	return (
		<span>
			&nbsp;{props.infotext}&nbsp;
			<a href={props.link}>here</a>&nbsp;
			(or in Swedish&nbsp;
			<a href={props.link_swe}>here</a>
			).
		</span>
	)
}


const About = () =>
{

	let [language, setLanguage] = useState("english");

	const switchLanguage = () => 
	{
		if (language === "english")
		{
			setLanguage("swedish");
		}
		else
		{
			setLanguage("english");
		}
	}


	

	return(
		<div>
			<div className="page" style={{maxWidth: "600px"}}>

				<div className="heading-wrapper">

					<h1 className="heading inner-navbar-title">About me</h1>

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



					<Switch>

						<Route path="/about/work">
							<div>
								<h2>Engagement in student organizations</h2>
								<StudentWorkTable language={language}/>

								<h2>Work experience</h2>
								<WorkTable language={language}/>
							</div>
						</Route>




						<Route path="/about/education">
							<div className="education-table-wrapper">

								<p style={{backgroundColor: "#14232b", padding: "10px"}}>
									{AboutTexts["hp_info"].text}
								</p>

								<p>
									{AboutTexts["MT"].text}
									<InfoLinks infotext={AboutTexts["MT"].infotext} link={AboutTexts["MT"].link} link_swe={AboutTexts["MT"].link_swe}/>
								</p>
								

								<EducationTable table={MT_table[0]} language={language}/>
								
								<EducationTable table={MT_table[1]} language={language}/>

								<EducationTable table={MT_table[2]} language={language}/>


								<hr style={{color: "white", marginTop: "40px", marginBottom: "20px"}}/>
								

								<p>
									{AboutTexts["other"].text}
								</p>

								<EducationTable table={other_table[0]} language={language}/>
								

								<hr style={{color: "white", marginTop: "40px", marginBottom: "20px"}}/>

								<p>
									{AboutTexts["D"].text}
									<InfoLinks infotext={AboutTexts["D"].infotext} link={AboutTexts["D"].link} link_swe={AboutTexts["D"].link_swe}/>
								</p>

								<p style={{color: "#4ecdff"}}>
									{AboutTexts["D"].extra_info}
								</p>

								<EducationTable_D table={D_table[0]} language={language}/>


							</div>
						</Route>

					</Switch>

				</HashRouter>

			</div>
		</div>
	)
}

export default About;