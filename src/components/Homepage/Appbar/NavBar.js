import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { Link } from "react-router-dom";
function ResponsiveAppBar() {
  return _jsx(AppBar, {
    position: "static",
    style: { background: "transparent", boxShadow: "none" },
    children: _jsx(Container, {
      maxWidth: "xl",
      children: _jsxs(Toolbar, {
        disableGutters: true,
        id: "toolbar",
        children: [
          _jsx("div", {
            children: _jsx(Typography, {
              variant: "h6",
              noWrap: true,
              component: "a",
              href: "/",
              sx: {
                mr: 0,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              },
              children: _jsx("img", {
                id: "logo",
                src: "src\\assets\\jia1.jpg",
                alt: "jia",
              }),
            }),
          }),
          _jsx("div", {
            children: _jsxs(Box, {
              sx: { flexGrow: 1, display: { xs: "none", md: "flex" } },
              children: [
                _jsx(Link, {
                  to: "/projects",
                  className: "list",
                  children: _jsx(Button, {
                    sx: {
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: 17,
                      marginRight: "10px",
                    },
                    variant: "contained",
                    color: "error",
                    children: "project",
                  }),
                }),
                _jsx(Link, {
                  to: "/about",
                  className: "list",
                  children: _jsx(Button, {
                    sx: {
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: 17,
                    },
                    variant: "contained",
                    color: "error",
                    children: "about",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
export default ResponsiveAppBar;
