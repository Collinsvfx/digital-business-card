import React from "react";
import EmailImg from "../images/email.svg";
import LinkedinImg from "../images/linkedin.svg";

export default function Buttons() {
  return (
    <div className="sm-links">
      <a href="mailto:email@collinsvfx@gmail.com" className="email-link">
        <img alt="" src={EmailImg} className="email-img" />
        <span className="email-text">Email</span>
      </a>
      <a
        href="https://www.linkedin.com/in/collinsmogbolu/"
        className="linkedin-link"
      >
        <img alt="" src={LinkedinImg} className="linked-img" />
        <span className="linkedin-text">LinkedIn</span>
      </a>
    </div>
  );
}
