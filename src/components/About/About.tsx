import React from "react";
import "./aboutTitle.css";
import { Box } from "@mui/material";

export default function About() {
  return (
    <div>
      <div id="aboutTitle">
        <h1>My Expertise</h1>
      </div>
      <div id="threeSkills">
        <div className="skills">
          <div className="skillsInner">
            <div>Software Engineer</div>
            <div id="skillsTextSection">
              <div id="skillsTextSectionContainer">
                <div className="elementor-heading-title">
                  Experienced in both functional and OOP: Dart, Python, Java,
                  JavaScript, TypeScript.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skillsInner">
            <div>Full Stack Developer</div>
            <div id="skillsTextSection">
              <div id="skillsTextSectionContainer">
                <div className="elementor-heading-title">
                  Passionate about UI/UX. Over 4 years of development experience
                  in HTML, CSS, JS, React and NextJS frameworks.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skillsInner">
            <div>Web Designer</div>
            <div id="skillsTextSection">
              <div id="skillsTextSectionContainer">
                <div className="elementor-heading-title">
                  <p>Experienced in both functional and OOP:</p>
                  <p>Dart, Python, Java, JavaScript, TypeScript.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="htmlPictureContainer">
        <img id="htmlPicture" src="src\assets\html.png" alt="html"></img>
      </div>
      <div id="aboutMeSection">
        <div></div>
      </div>
    </div>
  );
}
