import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Projects, Header, Contact, About } from "./containers";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Header />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
