import "./App.css";
import LinksParticles from "./components/LinksParticles";
import Homepage from "./components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  );
}

export default App;
