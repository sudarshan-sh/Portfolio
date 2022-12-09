import React from "react";
import "./Contact.css";
import { RiContactsBookFill } from "react-icons/ri";
import GoogleScholar from "../../img/gscholar.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import { AiOutlineCopyright } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      {/* left side */}
      <div className="awesome">
        <span style={{ fontSize: "45pt" }}>
          Contact <RiContactsBookFill style={{ fontSize: "1.5rem" }} />
        </span>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="contact_data">
        <span className="contact__subtitle">
          <h4>You can reach me at:</h4>
          <h5>Mail Id: charu.sharma@iiit.ac.in</h5>
          {/* <ul className="contact__subtitle__ul">
            <li>
              Financial Assistance Award from{" "}
              <b style={{ fontWeight: "600" }}>NeurIPS, 2020</b>.
            </li>
            <li>
              Received "Excellence in Research Award" from{" "}
              <b style={{ fontWeight: "600" }}>IIT Hyderabad, 2020</b>.
            </li>
            <li>
              Received "Certificate of Appreciation in Research" from{" "}
              <b style={{ fontWeight: "600" }}>IIT Hyderabad, 2019</b>.
            </li>
          </ul> */}

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
        </span>
      </div>

      <div className="footer">
        <AiOutlineCopyright /> <p>Charu Sharma</p>
      </div>
    </div>
  );
};

export default Contact;
