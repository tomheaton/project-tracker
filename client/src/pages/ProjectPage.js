import {Link, useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import {Button, Tab, Tabs} from "react-bootstrap";
import {useState} from "react";

const ProjectPage = () => {

  const { state } = useLocation();
  const history = useHistory();
  const [name, setName] = useState("");

  const renameProject = async () => {
    if (name === "") {
      return alert("name cannot be empty!");
    }
    await axios.put(`/projects/${state["project_id"]}`, {"name": name}).then((result) => {
      console.log("result: ", result);
    }).catch((error) => {
      console.log("error: ", error);
    }).finally(() => {
      history.push("/projects");
    });
  }

  const deleteProject = async () => {
    await axios.delete(`/projects/${state["project_id"]}`).then((result) => {
      console.log("result: ", result);
    }).catch((error) => {
      console.log("error: ", error);
    }).finally(() => {
      history.push("/projects");
    });
  }

  return (
    <div className={"container"}>
      {state && state.name ? (
        <>
          <h1>Project: {state["project_id"]}</h1>
          <h2>Name: {state.name}</h2>
          <br/>
          <div>
            <Link to={{pathname: `/projects/${state["project_id"]}/bugs`, state: state}}>
              <Button>Bugs</Button>
            </Link>
            <Button onClick={renameProject}>Rename</Button>
            <input onChange={(e) => setName(e.target.value)} placeholder={"enter new name"}/>
            <Button variant={"danger"} onClick={deleteProject}>Delete</Button>
          </div>
          <br/>
        </>
      ) : (
        <>
          <h1>Could not get state from path</h1>
        </>
      )}
      <Button onClick={() => history.push("/projects")}>Back to Projects</Button>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          <p>one</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>two</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>three</p>
        </Tab>
      </Tabs>
    </div>
  )
}

export default ProjectPage;