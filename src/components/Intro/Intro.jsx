import React from "react";
import "./Intro.css";
import GoogleScholar from "../../img/gscholar.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import CharuImg from "../../img/Charusharma.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Charu Sharma</span>
          <span>
            Assistant Professor in{" "}
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fmll.iiit.ac.in%2F&sa=D&sntz=1&usg=AOvVaw1hzLTzgLauaM2EHBiy2c1w"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "18px", color: "#788097", fontWeight: 100 }}
            >
              {" "}
              Machine Learning Lab
            </a>{" "}
            at{" "}
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fwww.iiit.ac.in%2F&sa=D&sntz=1&usg=AOvVaw25vdBENJIodJ2TE-Y3LwnZ"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "18px", color: "#788097", fontWeight: 100 }}
            >
              {" "}
              International Institute of Information Technology Hyderabad
            </a>{" "}
            (IIIT-H)
          </span>
        </div>
        {/* <button className="button i-button">Hire Me</button> */}
        <div className="i-icons">
          <a
            href="https://scholar.google.com.tw/citations?user=bftN0M0AAAAJ&hl=en&oi=sra"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GoogleScholar} alt="google-scholar" />
          </a>
          <a
            href="https://www.google.com/url?q=https%3A%2F%2Fin.linkedin.com%2Fin%2Fcharusharma1991&sa=D&sntz=1&usg=AOvVaw3ai9fOcoS5QdK-GLw-BI4b"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a
            href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fcharusharma1991&sa=D&sntz=1&usg=AOvVaw09OJBvGqAjOi9Ozr0cmtZD"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={CharuImg} alt="charuImg" className="charuImg" />
        {/* <img src={glassesimoji} alt="glass emoji" /> */}
        <div style={{ top: "-8%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Assistant" txt2="Professor" />
        </div>
        {/* <div style={{ top: "17rem", left: "0rem" }}>
          <FloatingDiv image={Thumbup} txt1="Best" txt2="Professor" />
        </div> */}
        {/* Blur */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
