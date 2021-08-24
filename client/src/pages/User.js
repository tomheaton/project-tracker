import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const User = () => {

  const { state } = useLocation();
  const history = useHistory();

  return (
    <div>
      {state && state.name ? (
        <>
          <h1>User: {state["user_id"]}</h1>
          <h2>Name: {state.username}</h2>
          <Button onClick={() => history.push("/users")}>Back to Users</Button>
        </>
      ) : (
        <>
          <h1>Could not get state from path</h1>
          <Button onClick={() => history.push("/users")}>Back to Users</Button>
        </>
      )}
    </div>
  )
}

export default User;