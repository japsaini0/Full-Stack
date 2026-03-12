import React from "react";
import myImage from "../assets/Me0.jpg";

function Header() {
  return (
    <header>
      <h1>Welcome to my Portfolio</h1>
      <hr />

      <h2>About Me</h2>

      <div className="onee">
        <img src={myImage} alt="Japjit Singh" height="150" />

        <p>
          I am a 2nd-year B.Tech Computer Science and Engineering student at Chandigarh University, passionate about exploring the world of technology and problem-solving. My interests span web development, programming in C++, Java, and Python, and building efficient solutions through algorithms and data structures. I enjoy learning new concepts, experimenting with projects, and continuously improving my skills to prepare for a career in software development and emerging fields like AI and Web3.
        </p>
      </div>
    </header>
  );
}

export default Header;