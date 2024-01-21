import React, { useState } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    { id: 3, name: 'Usuario 3' },
  ]);

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 p-4 w-1/6">
        <h1 className="text-white text-4xl mb-4 text-center">Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2 p-2 border border-blue-800 rounded bg-blue-400 hover:bg-blue-600">
              <a href={`/chat/${user.id}`} className="text-white">
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
