import {useHistory} from "react-router-dom";
import axios from "axios";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

const ProfilePage = ({user, setUser}) => {

  const history = useHistory();
  const [bio, setBio] = useState(user.bio);

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

  const updateSettings = async () => {
    await axios.put(`/users/${user["user_id"]}`, {bio: bio}).then((result) => {
      console.log("result: ", result);
    }).catch((error) => {
      console.log("error: ", error);
    }).finally(() => {
      handleUserUpdate();
    });
  }

  const handleUserUpdate = async () => {
    await axios.get(`/users/${user["user_id"]}`).then((result) => {
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
      <h1>Profile</h1>
      <h2>{user.username}</h2>
      <p>Bio: {user.bio}</p>
      <br/>
      <div>
        <Form>
          <FloatingLabel controlId="bio" label="Bio" className="mb-3">
            <Form.Control defaultValue={user.bio} as="textarea" placeholder="Create a bio here." maxLength={255} onChange={(e) => setBio(e.target.value)}/>
          </FloatingLabel>
          {(user.bio !== bio) && <Button onClick={updateSettings}>Save</Button>}
        </Form>
      </div>
      <br/>
      <Button variant={"danger"} onClick={deleteAccount}>Delete Account</Button>
    </div>
  )
}

export default ProfilePage;