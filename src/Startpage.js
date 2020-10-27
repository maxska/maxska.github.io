import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './Startpage.css'

import TopBar from './TopBar.js'

const Startpage = () =>
{
	return(
		<div>
			<TopBar/>



			<h1>Startpage</h1>


		</div>
	)
}

export default Startpage;