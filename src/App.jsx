import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import DesignSection from "./components/Design/Design";
import Data from "./components/Datas/Data";
import Home from "./components/Home/Home";
import FuncD from "./components/FuncD/FuncD";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termekek" element={<Items />} />
          <Route path="/funkciok" element={<FuncD />} />
          <Route path="/adat" element={<Data/>} />
          <Route path="/dizajn" element={<DesignSection />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
