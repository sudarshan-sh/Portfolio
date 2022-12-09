import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Charu Sharma</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Research
              </Link>
            </li>
            <li>
              <Link to="teaching" spy={true} smooth={true}>
                Teaching
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="others" spy={true} smooth={true}>
                Others
              </Link>
            </li>
            {/* <li>Contact</li> */}
          </ul>
        </div>
        <button className="button n-button">
          <Link to="contact" spy={true} smooth={true}>
          Contact
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
