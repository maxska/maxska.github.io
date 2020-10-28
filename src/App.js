import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Startpage from './components/Startpage.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App()
{
	return(
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Startpage/>
					</Route>

					<Route path="/about">
						<Startpage/>
					</Route>



				</Switch>
			</Router>
		</div>
	);
}

export default App;
