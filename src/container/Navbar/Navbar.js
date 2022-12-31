import React from "react";
import "./Navbar.scss";
import * as SiIcon from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="navs">
      <div className="navs-container container-fluid">
        <h3>وب گیم</h3>
        <div className="navs-container__links">
          <a href="" target={"_blank"}>
            <SiIcon.SiInstagram size={30} />
          </a>
          <a href="https://github.com/sohseyedi-web/GameApp" target={"_blank"}>
            <SiIcon.SiGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sohseyedi/" target={"_blank"}>
            <SiIcon.SiLinkedin size={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
