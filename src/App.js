import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Menu from "./routes/Menu"; 
import About from "./routes/About"; 
import {Route, Routes} from "react-router-dom";
import OrderOnline from "./routes/OrderOnline"; 
import Login from "./routes/Login"; 

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/menu" element = {<Menu />}/>
        <Route path="/about" element = {<About />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/order-online" element = {<OrderOnline />}/>
        <Route path = "/login" element = {<Login />}/>
      </Routes>
    </>
  );
}

export default App;
