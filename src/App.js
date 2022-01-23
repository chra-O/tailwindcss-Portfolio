import "./App.css";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Cetification from "./Page/Certification";
import Contact from "./Page/Contact";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cetification" element={<Cetification />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
