import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";

function App() {
 
  return (  
 <>
  <Router>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Chat />} />
    </Routes>

  </Router>
  {/*  <Router>
    <Route path='/' component={<Login />} />
  </Router> */}
 </>
  );
}

export default App;
