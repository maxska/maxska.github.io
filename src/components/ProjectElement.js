const ProjectElement = ({
  title,
  languages,
  repo,
  liveDemo,
  description,
  workInProgress,
  image,
}) => {
  return (
    <div className='project-element'>
      <h2 style={{ color: '#e4b271', textAlign: 'center', fontWeight: '900' }}>
        {title}
      </h2>
      <div style={{ fontWeight: '900' }}>
        <span style={{ color: '#e4b271' }}>Made in: </span>
        {languages}
      </div>

      {workInProgress && (
        <div
          style={{
            border: '1px solid #e4b271',
            padding: '10px',
            marginRight: '25px',
            marginLeft: '25px',
            marginTop: '15px',
            marginBottom: '15px',
            borderRadius: '5px',
          }}
        >
          {workInProgress}
        </div>
      )}

      {description && (
        <p>
          <span style={{ color: '#e4b271', fontWeight: '900' }}>
            Description:{' '}
          </span>
          {description}
        </p>
      )}

      <a href={repo} target='_blank' rel='noopener noreferrer'>
        <span
          style={{
            border: '1px solid #e4b271',
            color: '#e4b271',
            fontWeight: '500',

            padding: '3px',
            margin: '5px',
            borderRadius: '4px',
            display: 'inline-block',
          }}
        >
          GitHub repo
        </span>
      </a>

      {liveDemo && (
        <a href={liveDemo} target='_blank' rel='noopener noreferrer'>
          <span
            style={{
              border: '1px solid #e4b271',
              color: '#e4b271',
              fontWeight: '500',

              padding: '3px',
              margin: '5px',
              borderRadius: '4px',
              marginBottom: '10px',
              display: 'inline-block',
            }}
          >
            Live demo
          </span>
        </a>
      )}

      {image && (
        <img
          src={image}
          alt={title + ' image'}
          style={{
            display: 'block',
            width: '250px',
            margin: 'auto',
            padding: '5px',
          }}
        />
      )}
    </div>
  );
};

export default ProjectElement;
