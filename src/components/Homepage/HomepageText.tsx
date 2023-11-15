import { Button, Typography } from "@mui/material";
import "./Homepage.css";
import LinksParticles from "../LinksParticles";
import { Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkUrl from "@mui/material/Link";
import FeedIcon from "@mui/icons-material/Feed";

export default function HomepageText() {
  return (
    <div>
      <LinksParticles />

      <div id="homepage">
        <div id="socialMediaButtonGroup">
          <LinkUrl href="https://www.linkedin.com/in/jiaxiwu/">
            <Button
              sx={{
                mr: 0,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",

                color: "black",
                textDecoration: "none",
              }}
              className="socialButtons"
              value="list"
              aria-label="list"
            >
              <LinkedInIcon />
            </Button>
          </LinkUrl>
          <LinkUrl href="https://github.com/wu-jiaxi">
            <Button
              sx={{
                mr: 0,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",

                color: "black",
                textDecoration: "none",
              }}
              className="socialButtons"
              value="module"
              aria-label="module"
            >
              <GitHubIcon />
            </Button>
          </LinkUrl>
          <LinkUrl
            href={
              "https://docs.google.com/document/d/1gJEK8LmemI9pBrT2frS62Pwt86Rw3nEg/edit?usp=sharing&ouid=112681058268360632929&rtpof=true&sd=true"
            }
          >
            <Button
              sx={{
                mr: 0,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",

                color: "black",
                textDecoration: "none",
              }}
              className="socialButtons"
            >
              <FeedIcon />
            </Button>
          </LinkUrl>
        </div>
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
              I am a Front End Developer with over 4 years of professional
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
          <Link to="/projects" className="list" id="projectText">
            <Button variant="contained" color="error">
              Projects
            </Button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
