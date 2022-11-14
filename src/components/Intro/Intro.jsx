import React from "react";
import "./Intro.css";
import GoogleScholar from "../../img/gscholar.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";

const Intro = () => {
  return (
    <div className="intro">
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
            >
              {" "}
              Machine Learning Lab
            </a>{" "}
            at{" "}
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fwww.iiit.ac.in%2F&sa=D&sntz=1&usg=AOvVaw25vdBENJIodJ2TE-Y3LwnZ"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              International Institute of Information Technology Hyderabad
            </a>{" "}
            (IIIT-H)
          </span>
        </div>
        {/* <button className="button i-button">Hire Me</button> */}
        <div className="i-icons">
          <a href="https://scholar.google.com.tw/citations?user=bftN0M0AAAAJ&hl=en&oi=sra" target="_blank"
              rel="noreferrer">
            <img src={GoogleScholar} alt="google-scholar" />
          </a>
          <a href="https://www.google.com/url?q=https%3A%2F%2Fin.linkedin.com%2Fin%2Fcharusharma1991&sa=D&sntz=1&usg=AOvVaw3ai9fOcoS5QdK-GLw-BI4b" target="_blank"
              rel="noreferrer">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fcharusharma1991&sa=D&sntz=1&usg=AOvVaw09OJBvGqAjOi9Ozr0cmtZD" target="_blank"
              rel="noreferrer">
            <img src={Twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="i-right">Right side here</div>
    </div>
  );
};

export default Intro;
