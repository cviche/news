import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <h2 style={{ color: "orange" }}>About This Website</h2>
        <p className="about-description">
          This website was created by Carlos Viche. The reason as to why I
          created this website is because I wanted to be informed with the
          current events going on and also to test my web development skills.
        </p>

        <h2 style={{ color: "orange" }}>My Information</h2>
        <h2>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/cviche/news"
          >
            Github Code
          </a>
        </h2>

        <h2>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/carlosviche/"
          >
            Linkedin
          </a>
        </h2>
        <h2>Email: cviche@ucsc.edu</h2>
      </div>
    </div>
  );
}

export default About;
