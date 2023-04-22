import React, { useState } from "react";
import UserList from "./components/UserList";
import ChatBox from "./components/ChatBox";
import { PayRequest, ShowOrder } from "./components/RightPane";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleLogout = () => {
    // handle logout logic here
  };

  return (
    <div className="App">
      <div className="left-pane">
        <UserList onSelect={handleUserSelect} />
       
      </div>
      <div className="middle-pane">
        {selectedUser ? <ChatBox user={selectedUser} /> : <p>Select a user to start chatting</p>}
      </div>
      <div className="right-pane">
        <PayRequest />
        <ShowOrder />
      </div>
    </div>
  );
}

export default App;
