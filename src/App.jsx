import React from "react";
import { Home } from "@pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@components";
import { Login, Register, TermsAndConditions, ForgotPassword } from "@pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
