import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
 
  return (  
 <>
  <Router>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  </Router>
  {/*  <Router>
    <Route path='/' component={<Login />} />
  </Router> */}
 </>
  );
}

export default App;
