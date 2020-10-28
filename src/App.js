import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Startpage from './components/Startpage.js'

function App()
{
	return(
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Startpage/>
					</Route>



				</Switch>
			</Router>
		</div>
	);
}

export default App;
