import React from "react";
import { Home, About } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@components";
import {
  Login,
  Register,
  TermsAndConditions,
  ForgotPassword,
  Contact,
} from "@pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
