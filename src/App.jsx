import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Diyor from "./Pages/Diyor";
import Axror from "./Pages/Axror";
import Isroil from "./Pages/Isroil";
import Ramazon from "./Pages/Ramazon";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diyor" element={<Diyor />} />
        <Route path="/axror" element={<Axror />} />
        <Route path="/isroil" element={<Isroil />} />
        <Route path="/ramazon" element={<Ramazon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;