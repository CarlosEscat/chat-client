import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

export default function Users(props) {
  const users = props.users;

  return (
    <div className="userDiv">
      {users.length &&
        users.map(user => (
          <Link to={{ pathname: "/conversation", aboutProps: { user } }}>
            <p className="user" key={user.id}>
              {user.id} {user.name}
            </p>
          </Link>
        ))}
      {!users && <p>Loading...</p>}
    </div>
  );
}
