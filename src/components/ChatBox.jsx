import React, { useState } from "react";
import "./ChatBox.css";

function ChatBox(props) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message) {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-box-container">
      <div className="chat-box">
        <h2 className="chat-header">{props.user.name}</h2>
        <div className="message-container">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === "me" ? "sent" : "received"}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input type="text" placeholder="Type your message..." value={message} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <button className="send-button" onClick={handleSend}>Send</button>
          <button className="upload-button">Upload</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
