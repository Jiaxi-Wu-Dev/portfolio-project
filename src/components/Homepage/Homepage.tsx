
import "./Homepage.css";
import NavBar from "./AppBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Projects from "../Projects/Projects";
import About from "../About/About";
import HomepageText from "./HomepageText";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomepageText />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

