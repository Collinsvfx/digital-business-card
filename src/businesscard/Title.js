import React from "react";
import Buttons from "./Buttons";
import About from "./About";

export default function Title() {
  return (
    <div className="title-container">
      <div>
        <h3 className="profile-name">Laura Smith</h3>
        <p className="job-title">Frontend Developer</p>
        <span className="website">
          <a href="https://www.lauracodes.com">www.lauracodes.com</a>
        </span>
        <Buttons />
        <About />
      </div>
    </div>
  );
}
