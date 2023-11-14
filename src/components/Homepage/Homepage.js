import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Homepage.css";
import NavBar from "./AppBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Projects from "../Projects/Projects";
import About from "../About/About";
import HomepageText from "./HomepageText";
export default function Homepage() {
    return (_jsxs("div", { children: [_jsx(NavBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomepageText, {}) }), _jsx(Route, { path: "/Projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/About", element: _jsx(About, {}) })] })] }));
}
