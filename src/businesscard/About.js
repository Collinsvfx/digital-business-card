import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="">
        <h3 className="about-text">About</h3>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          faucibus nunc id turpis pellentesque suscipit. Curabitur bibendum.
          Pellentesque eu purus id velit tincidunt blandit a quis nisi
        </p>
      </div>
      <div className="">
        <h3 className="interest-text">Interests</h3>
        <p className="interest-paragraph">
          Sed a nunc semper, pulvinar odio ac, cursus felis. Pellentesque eu
          purus id velit tincidunt blandit a quis nisi. Nulla blandit
          condimentum nunc ac scelerisque. Fusce aliquet commodo tempus.
        </p>
      </div>
    </div>
  );
}
