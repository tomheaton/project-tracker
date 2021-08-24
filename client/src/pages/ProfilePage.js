import {useHistory} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";

const ProfilePage = ({user, setUser}) => {

  const history = useHistory();

  const deleteAccount = async () => {
    await axios.delete(`/users/${user["user_id"]}`).then((result) => {
      console.log("result: ", result);
    }).catch((error) => {
      console.log("error: ", error);
    }).finally(() => {
      setUser(null);
      history.push("/home");
    });
  }

  return (
    <div className={"container"}>
      <h1>Profile</h1>

      <Button variant={"danger"} onClick={deleteAccount}>Delete Account</Button>
    </div>
  )
}

export default ProfilePage;