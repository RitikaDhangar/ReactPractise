import React from "react";
import Signup from "./Auth/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Navbarcode from "./nav/Navbarcode";
import Login from "./Auth/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Navbarcode/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/signup" element={<Signup/>}  />
      <Route path="/login" element={<Login/>}  />
      </Routes>
    </BrowserRouter>
  );
};

export default App;