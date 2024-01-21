import React from 'react';
import Dashboard from "../components/chat/dashboard.jsx";
import ChatRoom from "../components/chat/chatRoom.jsx";

function Chat() {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-800 p-4">
        <Dashboard />
      </div>
      <div className="flex-grow bg-gray-900 p-4">
        <ChatRoom />
      </div>
    </div>
  );
}

export default Chat;
