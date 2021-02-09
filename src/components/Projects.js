import './style/Home.css';

import "./style/ProjectsText.css";
import ProjectsTexts from "./texts/Projects_texts.json";
import ProjectElement from "./ProjectElement.js"

import thumbnail_calculator from "./texts/images/thumbnail_calculator.png";
import thumbnail_gradecalc from "./texts/images/thumbnail_gradecalc.png";
import thumbnail_organization from "./texts/images/thumbnail_organization.png";
import thumbnail_unitconverter from "./texts/images/thumbnail_unitconverter.png";
import thumbnail_separatorgenerator from "./texts/images/thumbnail_separatorgenerator.png";

// temporary solution for images:
let images = {
	image_calculator: thumbnail_calculator,
	image_gradecalc: thumbnail_gradecalc,
	image_organization: thumbnail_organization,
  image_unitconverter: thumbnail_unitconverter,
  image_separatorgenerator: thumbnail_separatorgenerator
}

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
							image={images[project.image]}
							/>
						);
					})
				}
			</div>

		</div>
	)
}

export default Projects;