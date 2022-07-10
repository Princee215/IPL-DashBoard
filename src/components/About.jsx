import React from "react";

function About() {
  return (
    <h4 style={{ color: "white", margin: "5%" }}>
      This app is created using React.js that gives us information about IPL
      from 1st to 10th season in short format, the actual data comes from{" "}
      <a href="https://www.kaggle.com/saurav9786/indian-premier-league-match-analysis">
        kaggle
      </a>
      . I have used Chart.js to draw these beautiful graphs. And different
      dependencies to bring different function.
    </h4>
  );
}

export default About;
