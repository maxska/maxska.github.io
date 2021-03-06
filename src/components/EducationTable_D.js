import TableRow from './TableRow.js';

const TableHeaderD = (props) => {
  return (
    <>
      {props.language === 'english' && (
        <div className='table-row table-row-header'>
          <div
            style={{
              flex: '0 0 80px',
              backgroundColor: '#5c707a',
              paddingTop: '5px',
              paddingBottom: '5px',
            }}
            className='table-row-element'
          >
            Course code
          </div>

          <div
            style={{ flex: '0 0 25px', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            hp
          </div>

          <div
            style={{ flex: '0 0 35px', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            Year
          </div>

          <div
            style={{ width: '100%', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            Title
          </div>

          <div
            style={{ flex: '0 0 140px', backgroundColor: '#5c707a' }}
            className='table-row-element'
            id='field-element'
          >
            Field
          </div>
        </div>
      )}
      {props.language === 'swedish' && (
        <div className='table-row table-row-header'>
          <div
            style={{ flex: '0 0 80px', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            Kurskod
          </div>

          <div
            style={{ flex: '0 0 25px', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            hp
          </div>

          <div
            style={{ flex: '0 0 35px', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            Års-kurs
          </div>

          <div
            style={{ width: '100%', backgroundColor: '#5c707a' }}
            className='table-row-element'
          >
            Kursnamn
          </div>

          <div
            style={{ flex: '0 0 140px', backgroundColor: '#5c707a' }}
            className='table-row-element'
            id='field-element'
          >
            Ämne
          </div>
        </div>
      )}
    </>
  );
};

const EducationTable_D = (props) => {
  //backgroundColor: "#505e67"

  return (
    <div className='education-table-wrapper'>
      <div className='table-description'>
        <h3 className='semester-description'>{props.table.table_period}</h3>
        <h3 className='year-description' style={{ fontSize: '16px' }}>
          {props.table.table_description}
        </h3>
      </div>

      <div className='table-row-wrapper'>
        <TableHeaderD language={props.language} />
        {props.table.courses.map((course) => {
          return (
            <TableRow
              language={props.language}
              courseCode={course.code}
              hp={course.hp}
              year={course.year}
              title={course.title}
              field={course.field}
              description={course.description}
              descriptionLink={course.description_link}
              title_swe={course.title_swe}
              description_swe={course.description_swe}
              descriptionLink_swe={course.description_link_swe}
              unfinished={course.unfinished}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationTable_D;
