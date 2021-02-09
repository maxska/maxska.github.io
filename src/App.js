import {Switch, Route, HashRouter} from 'react-router-dom';

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
			
			<HashRouter basename="/">

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
				

			</HashRouter>

		</div>
	);
}

export default App;
