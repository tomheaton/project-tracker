import {useState} from "react";
import {Button, Form, FormGroup} from "react-bootstrap";
import axios from "axios";

const BugsForm = ({setShowForm}) => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("submitting form");
      await axios.post("/bugs", {"title": title, "details": details}).then((result) => {
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
          <Form.Label>Title</Form.Label>
          <Form.Control type={"text"} onChange={(e) => setTitle(e.target.value)}/>
          <Form.Text>Enter a title for your bug.</Form.Text>
        </FormGroup>

        <FormGroup>
          <Form.Label>Details</Form.Label>
          <Form.Control type={"text"} onChange={(e) => setDetails(e.target.value)}/>
          <Form.Text>Enter the details for your bug.</Form.Text>
        </FormGroup>

        <Button type={"submit"}>Submit</Button>

      </Form>
    </>
  );
}

export default BugsForm;