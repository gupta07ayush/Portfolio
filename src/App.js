import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
}

export default App;