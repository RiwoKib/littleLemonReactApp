import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Menu from "./routes/Menu";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path="/menu" element = {<Menu />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </>
  );
}

export default App;
