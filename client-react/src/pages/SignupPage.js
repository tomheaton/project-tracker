import {useHistory} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

const SignupPage = ({setUser}) => {

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password === passwordRepeat) {
      await axios.post("/signup", {username: username, password: password}).then((result) => {
        console.log("result: ", result);
        setUser(result.data.user)
      }).catch((error) => {
        console.log("error: ", error);
      }).finally(() => {
        history.push("/login");
      });
    } else {
      alert("Passwords do not match!");
    }
  }

  return (
    <div className={"container"}>
      <h1>Signup</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordRepeat">
          <Form.Label>Password (repeat)</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPasswordRepeat(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Signup</Button>
      </Form>
    </div>
  )
}

export default SignupPage;