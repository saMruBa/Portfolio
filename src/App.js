import React from "react";

import Home from "./components/Home/Home";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Popup from "./components/Ui/Popup";

function App() {
  return (
    <div>
      <HeaderNav />
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* <Popup /> */}
    </div>
  );
}

export default App;
