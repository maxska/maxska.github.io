import { Switch, Route, HashRouter } from 'react-router-dom';
import { useState } from 'react';
import MenuElement from './MenuElement';
import StudentWorkTable from './StudentWorkTable.js';
import WorkTable from './WorkTable.js';
import EducationPage from "./EducationPage.js"
import './style/StartPage.css';
import './style/AboutPage.css';
import './style/About_text.css';

const AboutPage = () => {
  const [language, setLanguage] = useState('english');

  const switchLanguage = () => {
    if (language === 'english') setLanguage('swedish');
    else setLanguage('english');
  };

  return (
    <>
      <div className='page' style={{ maxWidth: '600px' }}>
        <div className='heading-wrapper'>
          <h1 className='heading inner-navbar-title'>About me</h1>

          <span className='temp-button' onClick={() => switchLanguage()}>
            Change language in
            <br />
            the tables below
          </span>
        </div>

        <HashRouter>
          <div className='inner-navbar'>
            <MenuElement
              title='Education'
              page='about/education'
              type='local'
            />

            <MenuElement
              title='Student life &amp; Work'
              page='about/work'
              type='local'
            />
          </div>

          <Switch>
            <Route path='/about/work'>
              <div>
                <h2>Engagement in student organizations</h2>
                <StudentWorkTable language={language} />

                <h2>Work experience</h2>
                <WorkTable language={language} />
              </div>
            </Route>

            <Route path='/about/education'>
              <EducationPage language={language}/>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </>
  );
};

export default AboutPage;
