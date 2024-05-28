import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you could also add the chatbot's reply
  };

  return (
    <div className="chat-window flex-fill">
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
