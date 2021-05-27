import { useState } from 'react';

const TableRow = (props) => {
  let [showDescription, setShowDescription] = useState(false);

  const getTitle = () => {
    if (props.language === 'english') {
      return props.title;
    }
    return props.title_swe;
  };

  const getField = () => {
    // if language is not swedish return props.field
    if (props.language === 'english') {
      return props.field;
    }

    //else:
    switch (props.field) {
      case 'Mathematics':
        return 'Matematik';
      case 'Physics':
        return 'Fysik';
      case 'Programming':
        return 'Programmering';
      case 'Other':
        return 'Övrigt';
      case 'Electronics':
        return 'Elektronik';
      case 'Computers':
        return 'Datorteknik';
      default:
        return '-----';
    }
  };

  const getDescription = () => {
    if (props.language === 'english') {
      return props.description;
    }
    return props.description_swe;
  };

  const getColor = () => {
    if (props.unfinished === true) {
      return '#4ecdff';
    }

    return 'white';
  };

  return (
    <div className='table-row-container' style={{ color: getColor() }}>
      <div
        className='table-row table-row-upper'
        onClick={() => setShowDescription(!showDescription)}
        id={props.courseCode}
      >
        <div style={{ flex: '0 0 80px' }} className='table-row-element'>
          {props.courseCode}
        </div>

        <div style={{ flex: '0 0 25px' }} className='table-row-element'>
          {props.hp}
        </div>

        {props.year && (
          <div style={{ flex: '0 0 35px' }} className='table-row-element'>
            {props.year}
          </div>
        )}

        <div style={{ width: '100%' }} className='table-row-element'>
          {getTitle()}
        </div>

        <div className='table-row-element' id='field-element'>
          {getField()}
        </div>
      </div>

      {showDescription && (
        <div
          className='table-row'
          style={{
            width: '100%',
            color: 'white',
            marginTop: '5px',
            marginBottom: '20px',
          }}
        >
          {console.log(
            document
              .getElementById(props.courseCode)
              .getElementsByTagName('div')[0].style.backgroundColor
          )}

          <p style={{ margin: '0', padding: '0' }}>
            {getDescription()}

            {props.descriptionLink && props.language === 'english' && (
              <span>
                <br />
                <span style={{ color: '#fae2b4' }}>Description from</span>&nbsp;
                <a
                  href={props.descriptionLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
                .
              </span>
            )}
            {props.descriptionLink && props.language === 'swedish' && (
              <span>
                <br />
                <span style={{ color: '#fae2b4' }}>Beskrivningen kommer</span>
                &nbsp;
                <a
                  href={props.descriptionLink_swe}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  härifrån
                </a>
                .
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default TableRow;
