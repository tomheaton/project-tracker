import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Profile = ({user}) => {

  const history = useHistory();

  const deleteAccount = async () => {
    await axios.delete(`/user/${user.user_id}`).then((result) => {
      console.log("result: ", result);
    }).catch((error) => {
      console.log("error: ", error);
    }).finally(() => {
      history.push("/home");
    });
  }

  return (
    <div>
      <h1>Profile</h1>

      <Button variant={"danger"} onClick={deleteAccount}>Delete Account</Button>
    </div>
  )
}

export default Profile;