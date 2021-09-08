import axios from "axios";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import UserCard from "../components/UserCard";

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
            return (<UserCard key={user["user_id"]} user={user}/>);
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