import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { Link } from "react-router-dom";
import brandPicture from "../../Projects/pictures/jia1.jpg";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters id="toolbar">
          <div>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 0,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              <img id="logo" src={brandPicture} alt="jia"></img>
            </Typography>
          </div>
          <div>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/projects" className="list">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: 17,
                    marginRight: "10px",
                  }}
                  variant="contained"
                  color="error"
                >
                  project
                </Button>
              </Link>

              <Link to="/about" className="list">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: 17,
                  }}
                  variant="contained"
                  color="error"
                >
                  about
                </Button>
              </Link>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
