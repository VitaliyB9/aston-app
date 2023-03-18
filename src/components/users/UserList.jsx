import React from "react";
import UserElement from "./UserElement";

const UserList = ({ users, title }) => {
  if (!users.length) {
    return <h3>No one user</h3>;
  }
  return (
    <div>
      <h3>{title}</h3>
      {users.map((user, index) => (
        <UserElement
          user={user}
          key={user.id}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default UserList;
