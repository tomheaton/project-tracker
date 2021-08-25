import axios from "axios";
import {useEffect, useState} from "react";
import {Button, Spinner} from "react-bootstrap";
import ProjectForm from "../components/ProjectForm";
import ProjectCard from "../components/ProjectCard";


const ProjectsPage = ({user}) => {

  const getProjects = async () => {
    await axios.get("/projects").then((result) => {
      console.log("result: ", result);
      setData(result.data.projects);
    }).catch((error) => {
      console.log("error: ", error);
    });
  }

  const [data, setData] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getProjects();
  }, [showForm]);

  const content = () => {
    if (!data) {
      return (<Spinner animation="border" role="status"/>);
    }

    if (data && data.length === 0) {
      return (<h2>No Projects found.</h2>);
    }

    if (data && data.length > 0) {
      return (
        <ul>
          {data.map((project) => {
            return (<ProjectCard key={project["project_id"]} project={project} user={user}/>);
          })}
        </ul>
      );
    }
  }

  return (
    <div className={"container"}>
      <h1>Projects</h1>
      <br/>
      <div>
        { user && <>
          <h2>Create a project.</h2>
          {!showForm && <Button onClick={() => setShowForm(!showForm)}>Create</Button>}
          {showForm && <ProjectForm setShowForm={setShowForm} user={user}/>}
        </>}
      </div>
      <br/>
      <div>
        {content()}
      </div>

    </div>
  )
}

export default ProjectsPage;