import { Link } from "react-router-dom";

const ProjectCard = ({project, user}) => {

  return (
    <div className={"project-card"}>
      <Link to={{pathname: `/projects/${project["project_id"]}`, state: project}} className={"nav-link"}>
        <h2>{project.name}</h2>
        <p>{project.description || "no description found"}</p>
        {/*TODO: fix this user link*/}
        <Link to={{pathname: `/users/${user["user_id"]}`, state: user}} className={"nav-link"}>
          {project["owner_id"] || "project not owned by anyone"}
        </Link>
      </Link>
    </div>
  );
}

export default ProjectCard;