import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
