import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "./App.css";

import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

import TopBar from './components/TopBar.js';
import BottomBar from './components/BottomBar.js';

function App()
{
	return(
		<div className="content-wrapper">
			
			<Router>

					<TopBar/>

					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>

						<Route path="/about/work">
							<About/>
						</Route>

						<Route path="/about">
							<About/>
						</Route>

						<Route path="/projects">
							<Projects/>
						</Route>

						<Route path="/contact">
							<Contact/>
						</Route>
					</Switch>
				
				<BottomBar/>
				

			</Router>

		</div>
	);
}

export default App;
