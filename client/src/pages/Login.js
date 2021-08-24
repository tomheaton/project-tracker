import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Login = ({setUser}) => {

  const history = useHistory();

  const handleLogin = () => {
    setUser({user_id: 1, username: "tomheaton"});
    history.push("/profile");
  }

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login;