import './style/StartPage.css';

import './style/ProjectsText.css';
import ProjectsTexts from './texts/Projects_texts.json';
import ProjectElement from './ProjectElement.js';

const ProjectsPage = () => {
  return (
    <div>
      <div className='page'>
        <h1 className='heading'>Projects</h1>

        <p>{ProjectsTexts['info']}</p>

        {ProjectsTexts['projects'].map((project) => (
          <ProjectElement
            title={project.title}
            languages={project.languages}
            repo={project.repo}
            liveDemo={project.liveDemo}
            description={project.description}
            workInProgress={project.workInProgress}
            imageLink={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
