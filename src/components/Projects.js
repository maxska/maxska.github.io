import './style/Home.css';

import "./style/ProjectsText.css";
import ProjectsTexts from "./texts/Projects_texts.json";
import ProjectElement from "./ProjectElement.js"


const Projects = () =>
{
	return(
		<div>
      
			<div className="page">
				<h1 className="heading">Projects</h1>

				<p>
					{ProjectsTexts["info"]}
				</p>

				{
					ProjectsTexts["projects"].map(project => {
						return (
							<ProjectElement 
							title={project.title}
							languages={project.languages}
							repo={project.repo}
							liveDemo={project.liveDemo}
							description={project.description}
							workInProgress={project.workInProgress}
							photo={project.photo}
							/>
						);
					})
				}
			</div>

		</div>
	)
}

export default Projects;