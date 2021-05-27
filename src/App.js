import { Switch, Route, HashRouter } from 'react-router-dom';

import './App.css';

import StartPage from './components/StartPage.js';
import AboutPage from './components/AboutPage.js';
import ProjectsPage from './components/ProjectsPage.js';
import ContactPage from './components/ContactPage.js';

import TopBar from './components/TopBar.js';
import BottomBar from './components/BottomBar.js';

function App() {
  return (
    <div className='content-wrapper'>
      <HashRouter basename='/'>
        <TopBar />

        <Switch>
          <Route exact path='/'>
            <StartPage />
          </Route>

          <Route path='/about/work'>
            <AboutPage />
          </Route>

          <Route path='/about'>
            <AboutPage />
          </Route>

          <Route path='/projects'>
            <ProjectsPage />
          </Route>

          <Route path='/contact'>
            <ContactPage />
          </Route>
        </Switch>

        <BottomBar />
      </HashRouter>
    </div>
  );
}

export default App;
