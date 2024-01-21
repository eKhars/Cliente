import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Chat from "./pages/chat.jsx";

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
