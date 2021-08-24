import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const UsersPage = () => {

  const getUsers = async () => {
    await axios.get("/users").then((result) => {
      console.log("result: ", result);
      setData(result.data.users);
    }).catch((error) => {
      console.log("error: ", error);
    });
  }

  const [data, setData] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const content = () => {
    if (!data) {
      return (<Spinner animation="border" role="status"/>);
    }

    if (data && data.length === 0) {
      return (<h2>No Users found.</h2>);
    }

    if (data && data.length > 0) {
      return (
        <ul>
          {data.map((user) => {
            return (
              <li key={user["user_id"]}>
                <Link to={{pathname: `/users/${user["user_id"]}`, state: user}} className={"nav-link"}>{user.username}</Link>
              </li>
            )
          })}
        </ul>
      );
    }
  }

  return (
    <div className={"container"}>
      <h1>Users</h1>
      <br/>
      <div>
        {content()}
      </div>
    </div>
  )
}

export default UsersPage;