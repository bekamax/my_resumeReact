import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Infa from "./components/Infa/Infa";
import Opyt from "./components/Opyt/Opyt";
import Myfoto from "./components/MyFoto/Myfoto";
import Contact from "./components/contact/Contact";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Infa />} />
        <Route path="/opyt" element={<Opyt />} />
        <Route path="/myfoto" element={<Myfoto />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
