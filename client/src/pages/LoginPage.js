import {Button, Form} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import {useState} from "react";

const LoginPage = ({setUser}) => {

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    //setUser({user_id: 1, username: "tomheaton"});
    await axios.post("/login", {username: username, password: password}).then((result) => {
      console.log("result: ", result);
      setUser(result.data.user)
    }).catch((error) => {
      console.log("error: ", error);
    }).finally(() => {
      history.push("/profile");
    });
  }

  return (
    <div className={"container"}>
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  )
}

export default LoginPage;