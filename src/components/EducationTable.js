import TableRow from './TableRow.js';

const TableHeader = ({ language }) => {
  const extraStyle =
    language === 'english'
      ? {
          paddingTop: '5px',
          paddingBottom: '5px',

          flex: '0 0 80px',
          backgroundColor: '#5c707a',
        }
      : {
          flex: '0 0 80px',
          backgroundColor: '#5c707a',
        };

  const translations = {
    'Course code': 'Kurskod',
    'hp': 'hp',
    'Title': 'Kursnamn',
    'Field': 'Område',
  };
  const getTranslation = (word) => {
    return language === 'english' ? word : translations[word];
  };

  return (
    <>
      <div className='table-row table-row-header'>
        <div style={extraStyle} className='table-row-element'>
          <span>{getTranslation('Course code')}</span>
        </div>

        <div
          style={{ flex: '0 0 25px', backgroundColor: '#5c707a' }}
          className='table-row-element'
        >
          {getTranslation('hp')}
        </div>

        <div
          style={{ width: '100%', backgroundColor: '#5c707a' }}
          className='table-row-element'
        >
          {getTranslation('Title')}
        </div>

        <div
          style={{ flex: '0 0 140px', backgroundColor: '#5c707a' }}
          className='table-row-element'
          id='field-element'
        >
          {getTranslation('Field')}
        </div>
      </div>
    </>
  );
};

const EducationTable = ({ table, language }) => {
  //backgroundColor: "#505e67"

  return (
    <div className='education-table-wrapper'>
      <div className='table-description'>
        <h3 className='semester-description'>{table.table_period}</h3>
        <h3 className='year-description'>{table.table_description}</h3>
      </div>

      <div className='table-row-wrapper'>
        <TableHeader language={language} />
        {table.courses.map((course) => {
          return (
            <TableRow
              language={language}
              courseCode={course.code}
              hp={course.hp}
              title={course.title}
              field={course.field}
              description={course.description}
              descriptionLink={course.description_link}
              title_swe={course.title_swe}
              description_swe={course.description_swe}
              descriptionLink_swe={course.description_link_swe}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationTable;
