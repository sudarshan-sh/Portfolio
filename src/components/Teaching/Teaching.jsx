import React from "react";
import "./Teaching.css";
import { GiTeacher } from "react-icons/gi";

const Teaching = () => {
  return (
    <div className="teaching" id="teaching">
      {/* left side */}
      <div className="awesome">
        <span style={{ fontSize: "45pt" }}>
          Teaching <GiTeacher style={{ fontSize: "1.5rem" }} />
        </span>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="teaching_data">
        <span className="teaching__subtitle">
          <h4>Graduate level courses at IIIT Hyderabad:</h4>
          <ol className="teaching__subtitle__ul">
            <li>
              Topics in Deep Learning (with a focus on Graph Representation
              Learning) (Spring 2022)
            </li>
            <li>Software Systems Development (Monsoon 2021, Monsoon 2022)</li>
            <li>SVM topic in SMAI course.</li>
          </ol>
        </span>
        {/* <br /> */}
        <span className="teaching__subtitle">
          <h4>3D Vision Summer School 2022 at IIIT Hyderabad:</h4>
          <ol className="teaching__subtitle__ul">
            <li>Volumetric and Point Cloud Representation Learning</li>
            <li>3D Deep Learning using Graphs and Meshes</li>
          </ol>
        </span>
        {/* <br /> */}
        <span className="teaching__subtitle">
          <h4>
            Machine Learning for Chemistry and Drug Design Course at IIIT
            Hyderabad:
          </h4>
          <ul className="teaching__subtitle__ul">
            <li>Lecture on "Deep Learning for (Molecular) Graphs"</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Teaching;
