import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ProjectForm from "../components/ProjectForm";
import {Link} from "react-router-dom";

const Projects = () => {

  const getProjects = async () => {
    await axios.get("/projects").then((result) => {
      console.log("result: ", result);
      console.log("data: ", result.data.data);
      setData(result.data.data);
    }).catch((error) => {
      console.log("error: ", error);
    });
  }

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getProjects();
  }, [showForm]);


  return (
    <div>

      <h1>Projects</h1>

      <br/>

      <div>
        <h2>Create a project.</h2>
        {!showForm && <Button onClick={() => setShowForm(!showForm)}>Create</Button>}
        {showForm && <ProjectForm setShowForm={setShowForm}/>}
      </div>

      <br/>

      <div>
        {data && data.length > 0 ? (
            <ul>
              {data.map((project) => {
                return (
                  <li key={project["project_id"]}>
                    <Link to={{pathname: `/projects/${project["project_id"]}`, state: project}} className={"nav-link"}>{project.name}</Link>
                  </li>
                )
              })}
            </ul>
          ) :
          (<h2>No Projects found.</h2>)
        }
      </div>

    </div>
  )
}

export default Projects;