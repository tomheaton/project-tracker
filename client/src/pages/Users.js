import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

  const getUsers = async () => {
    await axios.get("/users").then((result) => {
      console.log("result: ", result);
      console.log("data: ", result.data.data);
      setData(result.data.data);
    }).catch((error) => {
      console.log("error: ", error);
    });
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>

      <h1>Users</h1>

      <br/>

      <div>
        {data && data.length > 0 ? (
          <ul>
            {data.map((user) => {
              return (
                <li key={user["user_id"]}>
                  <Link to={{pathname: `/users/${user["user_id"]}`, state: user}} className={"nav-link"}>{user.username}</Link>
                </li>
              )
            })}
          </ul>
        ) :
          (<h2>No Users found.</h2>)
        }
      </div>

    </div>
  )
}

export default Users;