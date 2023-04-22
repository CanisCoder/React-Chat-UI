import React from "react";
import "./UserList.css";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" },
  { id: 4, name: "Emily" },
];

function UserList(props) {
  const handleUserClick = (user) => {
    props.onSelect(user);
  };

  const handleLogout = () => {
    // handle logout logic here
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserList;
