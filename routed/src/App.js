import React from "react";
import { BrowserRouter,Route, Routes, Link } from "react-router-dom";


import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Soda from "./Soda";
import Soup from "./Soup";
import Chips from "./Chips";
import NavBar from "./NavBar";

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = {<VendingMachine />} />
        <Route path="/Candy" element = {<Candy />} />
        <Route path="/Soda" element = {<Soda />} />
        <Route path="/Chips" element = {<Chips />} />
        <Route path="/Soup" element = {<Soup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
