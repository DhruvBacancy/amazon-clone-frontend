import { Route, Routes } from "react-router-dom";
import Login from "./components/user entry/Login";
import Register from "./components/user entry/Register";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
