import { Button, Typography } from "@mui/material";
import "./Homepage.css";
import LinksParticles from "../LinksParticles";

export default function HomepageText() {
  return (
    <div>
      <LinksParticles />
      <div id="homepage">
        <div id="text">
          <Typography
            variant="h1"
            sx={{
              mr: 0,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <h1 id="intro">Hello! My name is Jiaxi!</h1>
          </Typography>
          <Typography
            sx={{
              mr: 0,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",

              color: "black",
              textDecoration: "none",
            }}
          >
            <h2 className="info">
              I am a Full Stack Developer with over 4 years of professional
              experience.
            </h2>
          </Typography>
          <Typography
            sx={{
              mr: 0,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",

              color: "black",
              textDecoration: "none",
            }}
          >
            <h2 className="info">
              Passionate about building elegant applications and digital
              experiences.
            </h2>
          </Typography>
          <Button variant="contained" color="error">
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
