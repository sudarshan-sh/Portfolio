import React from "react";
import "./Others.css";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Others = () => {
  return (
    <div className="others" id="others">
      {/* left side */}
      <div className="awesome">
        <span style={{ fontSize: "45pt" }}>
          Others{" "}
          <MdOutlineMiscellaneousServices style={{ fontSize: "1.5rem" }} />
        </span>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="others_data">
        <span className="others__subtitle">
          <h4>Awards:</h4>
          <ul className="others__subtitle__ul">
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
            <li>
              Recipient of{" "}
              <b style={{ fontWeight: "600" }}>ICML Travel Award 2018</b>.
            </li>
            <li>
              Selected for{" "}
              <b style={{ fontWeight: "600" }}>
                Microsoft Research travel grant
              </b>{" "}
              to attend <b style={{ fontWeight: "600" }}>ICML 2018</b>.
            </li>
            <li>
              Selected for{" "}
              <b style={{ fontWeight: "600" }}>Google travel grant</b> to attend{" "}
              <b style={{ fontWeight: "600" }}>ICML 2018</b>.
            </li>
            <li>
              "2nd Prize in ArtInEx" by{" "}
              <b style={{ fontWeight: "600" }}>TCS AI Lab and NIT Calicut</b> in
              October, 2015.
            </li>
          </ul>
        </span>

        <span className="others__subtitle">
          <h4>Invited Talks:</h4>
          <ul className="others__subtitle__ul">
            <li>
            Talk on "Geometric Deep Learning for Graphs and Point Clouds" at <b style={{ fontWeight: '600' }}>IIIT Vadodara</b> (4th Nov, 2022)
            </li>
            <li>
            Talks on "Graph Representation Learning" and "Representation Learning for 3D Point Clouds" at the <b style={{ fontWeight: '600' }}>Dept. of CSE, SVNIT, Surat</b> (1-2nd Nov, 2022)
            </li>
            <li>
            Talk on "Significance of Graph Representation Learning" at the <b style={{ fontWeight: '600' }}>Department of Computer Science, Delhi University</b>  (28th September, 2022)
            </li>
            <li>
            Talk on "Knowledge Graph Representation Learning" at <b style={{ fontWeight: '600' }}>Sahaj Software</b> (28th July, 2022).
            </li>
            <li>
            Talk on "Introduction to Machine Learning for Graphs" at <b style={{ fontWeight: '600' }}>I-Srishti, I-Hub, IIIT Hyderabad</b> (3rd June, 2022).
            </li>
            <li>
            Talk on "Geometric Deep Learning for graphs and point clouds" at <b style={{ fontWeight: '600' }}>NISER Bhubaneswar</b> (11th April, 2022).
            </li>
            <li>
            Talk on "Point Cloud Representation Learning" at <b style={{ fontWeight: '600' }}>3D Vision Workshop, CVIT, IIITH</b> (June, 2021).
            </li>
            <li>Talks at <b style={{ fontWeight: '600' }}>TCS Research, IIIT Hyderabad, Mahindra University</b> (Apr, 2021).</li>
            <li>Talk on "Self-Supervised Few-Shot Learning on Point clouds" in <b style={{ fontWeight: '600' }}>IITH ACM Machine Intelligence Group (Jan, 2021) and Computer Vision Talks (Feb, 2021)</b>.</li>
            <li>Talks on Machine Learning and Deep Learning, <b style={{ fontWeight: '600' }}>Hebei Normal University, Shijiazhuang, China</b> (June-July 2019).</li>
            <li>Talk on "Introduction to Machine Learning" at one week workshop by <b style={{ fontWeight: '600' }}>J-Hub, JNTU Hyderabad</b> (30th May, 2018).</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Others;
