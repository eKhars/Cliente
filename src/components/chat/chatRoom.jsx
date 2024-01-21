import React, { useState } from 'react';

function ChatRoom() {
  const [messages, setMessages] = useState([
    { sender: 'Usuario1', text: 'Hola, ¿cómo estás?' },
    { sender: 'Usuario2', text: '¡Hola! Estoy bien, ¿y tú?' },
  ]);

  const handleSendMessage = (messageText) => {
  };

  return (
    <div className="flex-grow bg-gray-900 p-4 text-white">
      <div className="mb-4">
        <h1 className="text-4xl mb-2">Chat Room</h1>
        <p className="text-gray-500">¡Bienvenido al Chat!</p>
      </div>
      <div className="overflow-y-auto h-80">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-center mb-2 ${
              message.sender === 'Usuario1' ? 'justify-end' : 'justify-start'
            }`}
          >
            <span
              className={`bg-${message.sender === 'Usuario1' ? 'blue' : 'green'}-500 rounded-full p-2 mr-2`}
            >
              {message.sender}:
            </span>
            <span className="text-white">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className="w-full border border-gray-300 p-2 rounded bg-black text-white h-20"
        />
        <button
          onClick={() => handleSendMessage()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
