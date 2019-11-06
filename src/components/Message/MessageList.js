import React from "react";
import "./MessageList.css";

export default function MessageList(props) {
  const messages = props.messages;

  return (
    <div className="messageDiv">
      {messages.length &&
        messages.map(message => (
          <p className="msg" key={message.id}>
            Id: {message.senderId} <br />
            Says: {message.message}
          </p>
        ))}
      {!messages && <p>Loading...</p>}
    </div>
  );
}
