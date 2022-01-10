import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
