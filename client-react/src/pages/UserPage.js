import {useHistory, useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";

const UserPage = () => {

  const { state } = useLocation();
  const history = useHistory();

  return (
    <div className={"container"}>
      {state && state.username ? (
        <>
          <h1>User ID: {state["user_id"]}</h1>
          <h2>Username: {state.username}</h2>
        </>
      ) : (
        <>
          <h1>Could not get state from path</h1>
        </>
      )}
      <Button onClick={() => history.push("/users")}>Back to Users</Button>
    </div>
  )
}


export default UserPage;