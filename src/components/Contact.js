import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/Home.css'

import TopBar from './TopBar.js'
import ContactText from './texts/ContactText.js'

const Contact = () =>
{
	return(
		<div>
      
			<div className="page">
				<h1 className="heading">Contact</h1>

				<ContactText/>
				
			</div>



		</div>
	)
}

export default Contact;