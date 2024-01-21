import React, { useState } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    { id: 3, name: 'Usuario 3' },
  ]);

  return (
    <div>
      <div className="bg-gray-800">
        <h1 className="text-white text-4xl mb-4 text-center">Usuarios</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2 p-2 border border-blue-800 rounded bg-blue-400 hover:bg-blue-600 ">
              <a href={`/chat/${user.id}`} className="text-white">
                {user.name}
              </a>
            </li>
          ))}
          {/* <button className='mt-20'>
            <a href="/login" className="text-white bg-red-500 p-2 border rounded">
              Cerrar sesión
            </a>
          </button> */}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
