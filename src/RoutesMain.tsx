import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";

const RoutesMain = () => (
  <Routes>
    {/* render all routes here */}
    <Route path="/" element={<Home />} />
    <Route path="/:name" element={<Country />} />
  </Routes>
);

export default RoutesMain;
