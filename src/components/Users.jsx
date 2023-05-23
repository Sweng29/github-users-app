import React, { useEffect, useState } from "react";
import User from "./User";

const URL = "https://api.github.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(URL);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <section>
      <h1>Github Top Users</h1>
      <div className="grid-container">
        {users.map((user) => {
          return (
            <div className="grid-item">
              <User key={user.login} {...user} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Users;
