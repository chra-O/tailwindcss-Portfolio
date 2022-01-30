import "./App.css";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Cetification from "./Page/Certification";
import Contact from "./Page/Contact";

import Work from "./Page/Work";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cetification" element={<Cetification />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certification" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
