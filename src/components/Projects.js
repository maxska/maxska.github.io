import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/Home.css'

import TopBar from './TopBar.js'
import ProjectsText from './texts/ProjectsText.js'

const Projects = () =>
{
	return(
		<div>
      
			<div className="page">
				<h1 className="heading">Projects</h1>

				<ProjectsText/>
			</div>

		</div>
	)
}

export default Projects;