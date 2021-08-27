
import EducationTable from './EducationTable.js';
import EducationTableD from './EducationTable_D.js';

import MT_table from './texts/MT.json';
import other_table from './texts/other.json';
import D_table from './texts/D.json';
import AboutTexts from './texts/About_texts.json';

const hrStyle = {
  color: 'white',
  marginTop: '40px',
  marginBottom: '20px',
};

const InfoLinks = ({ infotext, link, link_swe }) => {
  return (
    <span>
      &nbsp;{infotext}&nbsp;
      <a href={link} target='_blank' rel='noopener noreferrer'>
        here
      </a>
      &nbsp;(or in Swedish&nbsp;
      <a href={link_swe}>here</a>
      ).
    </span>
  );
};

const EducationPage = ({language}) => {
  return (
    <div className='education-table-wrapper'>
      <p style={{ backgroundColor: '#14232b', padding: '10px' }}>
        {AboutTexts['hp_info'].text}
      </p>

      <p>
        {AboutTexts['MT'].text}
        <InfoLinks
          infotext={AboutTexts['MT'].infotext}
          link={AboutTexts['MT'].link}
          link_swe={AboutTexts['MT'].link_swe}
        />
        <InfoLinks
          infotext={AboutTexts['D_0'].infotext}
          link={AboutTexts['D_0'].link}
          link_swe={AboutTexts['D_0'].link_swe}
        />
      </p>

      <EducationTable table={MT_table[0]} language={language} />
      <EducationTable table={MT_table[1]} language={language} />
      <EducationTable table={MT_table[2]} language={language} />

      <hr style={hrStyle} />

      <p>{AboutTexts['other'].text}</p>

      <EducationTable table={other_table[0]} language={language} />

      <hr style={hrStyle} />

      <p>
        {AboutTexts['D'].text}
        <InfoLinks
          infotext={AboutTexts['D'].infotext}
          link={AboutTexts['D'].link}
          link_swe={AboutTexts['D'].link_swe}
        />
      </p>

      <EducationTableD table={D_table[0]} language={language} />

      {/* <p style={{ color: '#4ecdff' }}>{AboutTexts['D'].extra_info}</p> */}

      <EducationTableD table={D_table[1]} language={language} />
    </div>
  );
};

export default EducationPage;
