import React, { useEffect, useState } from "react";
import UserService from "../API/UserService";
import ButtonPost from "../components/buttons/ButtonPost";
import UserList from "../components/users/UserList";
import { useFetch } from "../hooks/useFetch";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [fetchPosts, setLoad, postErr] = useFetch(async () => {
    const result = await UserService.getUsers();
    setUsers(result.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <ButtonPost onClick={fetchPosts}>Get Users</ButtonPost>
      {postErr && <h3>It`s Error: {postErr}</h3>}
      {setLoad ? (
        <h3>Loading...</h3>
      ) : (
        <UserList
          users={users}
          title={"User`s List"}
        />
      )}
    </div>
  );
};

export default Users;
