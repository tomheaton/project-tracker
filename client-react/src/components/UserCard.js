import {Link} from "react-router-dom";

const UserCard = ({user}) => {

  return (
    <div className={"user-card"}>
      <Link to={{pathname: `/users/${user["user_id"]}`, state: user}} className={"nav-link"}>
        <h2>{user.username}</h2>
        <p>{user.bio || "no bio found"}</p>
      </Link>
    </div>
  );
}

export default UserCard;