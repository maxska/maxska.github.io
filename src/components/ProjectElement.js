const ProjectElement = (props) => {
	return (
		<div className='project-element'>
			<h2 style={{ color: "#e4b271", textAlign: "center" }}>{props.title}</h2>
			<h4>
				<span style={{ color: "#e4b271" }}>Made in: </span>
				{props.languages}
			</h4>

			{props.workInProgress && (
				<div
					style={{
						border: "1px solid orange",
						padding: "10px",
						marginRight: "25px",
						marginLeft: "25px",
						borderRadius: "5px",
					}}
				>
					{props.workInProgress}
				</div>
			)}

			{props.description && (
				<p>
					<span style={{ color: "#e4b271" }}>Description: </span>
					{props.description}
				</p>
			)}

			<p>
				<a href={props.repo} target='_blank' rel='noopener noreferrer'>
					GitHub repo
				</a>
			</p>

			{props.liveDemo && (
				<a href={props.liveDemo} target='_blank' rel='noopener noreferrer'>
					Live demo of this project
				</a>
			)}

			{props.image && (
				<img
					src={props.image}
					alt={props.title + " image"}
					style={{
						display: "block",
						width: "250px",
						margin: "auto",
						padding: "5px",
					}}
				/>
			)}
		</div>
	);
};

export default ProjectElement;
