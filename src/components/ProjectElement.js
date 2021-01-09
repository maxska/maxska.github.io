
const ProjectElement = (props) =>
{
  return(
    <div className="project-element">
      <h2 style={{color: "orange", textAlign: "center"}}>{props.title}</h2>
      <h4><span style={{color: "#ffd574"}}>Made in: </span>{props.languages}</h4>

      {
        props.workInProgress
        &&
        <div style={{
          backgroundColor: "#48555c", 
          border: "1px solid orange",
          padding: "10px",
          marginRight: "25px",
          marginLeft: "25px",
          borderRadius: "5px"
        }}>
          {props.workInProgress}
        </div>
      }


      {
        props.description
        &&
        <p>
          <span style={{color: "#ffd574"}}>Description: </span>
          {props.description}
        </p>
      }

      <p>
        <a href={props.repo}>GitHub repo</a>
      </p>
      
      {
        props.liveDemo 
        &&
        <a href={props.liveDemo}>Live demo of this project</a>
      }

      {
        props.image 
        &&
        <img 
        src={props.image} 
        alt={props.title + " image"}
        style={{
          display: "block",
          width: "200px",
          margin: "auto",
          padding: "5px"
        }}
        />
      }

    </div>
  )
}

export default ProjectElement;