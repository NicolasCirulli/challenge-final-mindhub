import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Game from "./pages/Game";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/game" element={<Game/>}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="profile" element={<Profile/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
