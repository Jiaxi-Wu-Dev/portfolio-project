import React from "react";
import "./Homepage.css";
import Typography from "@mui/material/Typography";
import NavBar from "./Appbar/NavBar";
import Button from "@mui/material/Button";
import { Route, Routes } from "react-router-dom";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import HomepageText from "./HomepageText";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomepageText />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
