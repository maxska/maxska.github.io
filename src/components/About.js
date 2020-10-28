import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/Startpage.css'

import TopBar from './TopBar.js'

const About = () =>
{
	return(
		<div>
			<TopBar/>
      
			<div className="page">
				<h1>About</h1>

				<p className="text">
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
					text text text text text text text text text
				</p>
			</div>



		</div>
	)
}

export default About;