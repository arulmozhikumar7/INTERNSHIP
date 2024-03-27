import React from "react";
import { Home, About } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@components";
import { TermsAndConditions, Contact } from "@pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
