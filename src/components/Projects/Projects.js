import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-ignore
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./projects.css";
import { data } from "./projectsData";
import { Link } from "react-router-dom";
export default function Projects() {
    return (_jsxs("div", { children: [_jsx("div", { id: "projectsContainer", children: _jsxs("div", { id: "projects", children: [_jsx("h1", { children: " Projects" }), _jsx("hr", { id: "line" })] }) }), _jsx(Grid, { container: true, spacing: { xs: 2, md: 6 }, columns: { xs: 4, sm: 10, md: 15 }, alignItems: "center", justifyContent: "center", children: data.map((product, key) => (_jsx(Grid, { xs: 2, sm: 4, md: 4, children: _jsx(Link, { to: product.url, children: _jsx(Card, { sx: { maxWidth: 345 }, children: _jsxs(CardActionArea, { children: [_jsx(CardMedia, { component: "img", height: "140", image: product.picture, alt: product.alt, url: product.url }), _jsxs(CardContent, { children: [_jsx(Typography, { gutterBottom: true, variant: "h5", component: "div", children: product.title }), _jsxs(Typography, { variant: "body2", color: "text.secondary", children: [_jsx("div", { children: product.details }), _jsxs("div", { children: [" ", product.tools] })] })] })] }) }) }) }, key))) })] }));
}
