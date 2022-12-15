import React from "react";
import Twitter from "../images/twitter (2).png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Github from "../images/github.png";

export default function SocialMedia() {
  return (
    <div className="sm-holder">
      <div className="social-media-container">
        <img alt="" src={Twitter} />
        <img alt="" src={Facebook} />
        <img alt="" src={Instagram} className="instagram" />
        <img alt="" src={Github} />
      </div>
    </div>
  );
}
