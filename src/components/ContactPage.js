import './style/StartPage.css';

import ContactText from './texts/Contact_text.js';

const ContactPage = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contact</h1>

      <ContactText />
    </div>
  );
};

export default ContactPage;
