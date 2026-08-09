import './style/StartPage.css';
import StartPageText from './personal-website-texts/StartPage_text.js';

const StartPage = () => {
  return (
    <>
      <div className='page' style={{ marginTop: '40px' }}>
        <StartPageText />
      </div>
    </>
  );
};

export default StartPage;
