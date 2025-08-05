// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import Share from "./pages/Share";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </Router>
  );
};

export default App;
