import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Diyor from "./Pages/Diyor";
import Axror from "./Pages/Axror";
import Isroil from "./Pages/Isroil";
import Ramazon from "./Pages/Ramazon";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diyor" element={<Diyor />} />
        <Route path="/axror" element={<Axror />} />
        <Route path="/isroil" element={<Isroil />} />
        <Route path="/ramazon" element={<Ramazon />} />
      </Routes>
    </div>
  );
}

export default App;
