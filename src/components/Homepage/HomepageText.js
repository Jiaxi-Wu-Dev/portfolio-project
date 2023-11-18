import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Typography } from "@mui/material";
import "./Homepage.css";
import LinksParticles from "../LinksParticles";
import { Link } from "react-router-dom";
export default function HomepageText() {
    return (_jsxs("div", { children: [_jsx(LinksParticles, {}), _jsx("div", { id: "homepage", children: _jsxs("div", { id: "text", children: [_jsx(Typography, { variant: "h1", sx: {
                                mr: 0,
                                display: { xs: "flex", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "black",
                                textDecoration: "none",
                            }, children: _jsx("h1", { id: "intro", children: "Hello! My name is Jiaxi!" }) }), _jsx(Typography, { sx: {
                                mr: 0,
                                display: { xs: "flex", md: "flex" },
                                fontFamily: "monospace",
                                color: "black",
                                textDecoration: "none",
                            }, children: _jsx("h2", { className: "info", children: "I am a Full Stack Developer with over 4 years of professional experience." }) }), _jsx(Typography, { sx: {
                                mr: 0,
                                display: { xs: "flex", md: "flex" },
                                fontFamily: "monospace",
                                color: "black",
                                textDecoration: "none",
                            }, children: _jsx("h2", { className: "info", children: "Passionate about building elegant applications and digital experiences." }) }), _jsx(Link, { to: "/projects", className: "list", id: "projectText", children: _jsx(Button, { variant: "contained", color: "error", children: "Projects" }) })] }) })] }));
}
