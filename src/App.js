import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GlobalStyles } from "./helpers/styles/globalStyles";
import Landing from "./pages/Landing/Landing";

export default function App() {
  return (
    <div>
      <GlobalStyles />

      <Header />

      <Landing />

      <Footer />
    </div>
  );
}
