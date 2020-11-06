import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";

import './style/Home.css';
import './style/About.css';

import TopBar from './TopBar.js';
import AboutText from './texts/AboutText.js';


import StudentTable from "./texts/AboutText_StudentTable.js";
import WorkTable from "./texts/AboutText_WorkTable.js";
import EducationTable_MT from "./texts/AboutText_EducationTable_MT.js";
import EducationTable_distance from "./texts/AboutText_EducationTable_distance.js";
import EducationTable_D from "./texts/AboutText_EducationTable_D.js";

const About = () =>
{
	return(
		<div>

			<div className="page">
				<h1 className="heading">About</h1>

				





				<Router>
				
				<div className="inner-navbar">
					<Link to="/about/work" className="inner-navbar-element">
						Work & Student work
					</Link>

					<Link to="/about/education" className="inner-navbar-element">
						Education
					</Link>
				</div>
				
				<Switch>

					<Route path="/about/work">
						<div>
							<h2>Engagement in student organizations</h2>
							<StudentTable/>

							<h2>Work experience</h2>
							<WorkTable/>
						</div>
					</Route>

					<Route path="/about/education">
						<div>
							<h2>Education</h2>
							<p>
								So, I actually started my studies in MSc in Media Technology and Engineering, back in 2018. I stayed on this program for 1.5 years (until I realized that Computer Science would be a better fit for me). Info about MSc in Media Technology and Engineering&nbsp;
								<a href="https://liu.se/studieinfo/en/program/6cmen/4641">here</a>&nbsp;
								(or in Swedish&nbsp;
								<a href="https://liu.se/studieinfo/en/program/6cmen/4641">here</a>
								).
							</p>
							<EducationTable_MT/>

							<h2>VT 2020 --- Courses from various universities</h2>
							<EducationTable_distance/>

							<p>
								So, here's the deal. In August 2020 I actually started a different program, computer science. So in my first year of CS I take courses from both year 1 and 2 in the program, and on my second year on CS I will take only year 3 courses. This is because some of the courses I've previously taken are the same as some in year 1 and 2 in CS, therefore I don't need to take them again. Info about MSc in Computer Science and Engineering&nbsp;
								<a href="https://liu.se/studieinfo/en/program/6cddd/4617">here</a>&nbsp;
								(or in Swedish&nbsp;
								<a href="https://liu.se/studieinfo/program/6cddd/4617">here</a>
								).
							</p>
							<h2>HT 2020</h2>
							<EducationTable_D/>
						</div>
					</Route>

					</Switch>
				</Router>
				


			</div>
		</div>
	)
}

export default About;