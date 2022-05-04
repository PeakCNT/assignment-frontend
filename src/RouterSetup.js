import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";

const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
