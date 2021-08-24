import {useState} from "react";
import {Button, Form, FormGroup} from "react-bootstrap";
import axios from "axios";

const ProjectForm = ({setShowForm}) => {

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("submitting form");
      await axios.post("/projects", {"name": name}).then((result) => {
        console.log("result: ", result);
      }).catch((error) => {
        console.log("error", error);
      }).finally(() => {
        setShowForm(false);
      });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>Project Name</Form.Label>
          <Form.Control type={"text"} onChange={(e) => setName(e.target.value)}/>
          <Form.Text>This will be the name of your project.</Form.Text>
        </FormGroup>

        <Button type={"submit"}>Submit</Button>

      </Form>
    </>
  );
}

export default ProjectForm;