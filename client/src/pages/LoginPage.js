import {Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const LoginPage = ({setUser}) => {

  const history = useHistory();

  const handleLogin = () => {
    setUser({user_id: 1, username: "tomheaton"});
    history.push("/profile");
  }

  return (
    <div className={"container"}>
      <h1>Login</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default LoginPage;