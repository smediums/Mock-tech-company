import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/nav/Nav";
import GlobalStyles from "./globeStyles";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
