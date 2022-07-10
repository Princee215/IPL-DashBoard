import React from "react";
import Body from "./Body";
import Bootstrap from "./Bootstrap";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Bootstrap />
        <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
