import React from 'react';
import './MessageItem.css';

const MessageItem = ({ message }) => {
  return (
    <div className={`message-item ${message.sender}`}>
      <div className="message-content">{message.text}</div>
    </div>
  );
};

export default MessageItem;
