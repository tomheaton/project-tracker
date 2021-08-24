import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {

  return (
    <div className={"project-card"}>
      <Link to={{pathname: `/projects/${project["project_id"]}`, state: project}} className={"nav-link"}>
        <h2>{project.name}</h2>
        <p>{project.description || "no description found"}</p>
        <Link to={"/home"}>
          {project["owner_id"] || "project not owned by anyone"}
        </Link>
      </Link>
    </div>
  );
}

export default ProjectCard;