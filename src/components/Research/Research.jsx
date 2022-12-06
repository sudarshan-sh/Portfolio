import React from "react";
import "./Research.css";
import { GiArchiveResearch } from "react-icons/gi";

const About = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ fontSize: "2rem" }}>
          Research <GiArchiveResearch style={{ fontSize: "1.5rem" }} />
        </span>
        {/* <button className="button s-button">Download CV</button> */}
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <ul style={{ fontSize: "18px" }}>
          {/* 1st */}
          <li>
            Anmol Goel, Charu Sharma, Ponnurangam Kumaraguru, "An Unsupervised,
            Geometric and Syntax-aware Quantification of Polysemy",{" "}
            <b style={{ fontWeight: "600" }}>EMNLP</b>, 2022.
          </li>
          <br />
          {/* 2nd */}
          <li>
            Charu Sharma, Manohar Kaul, "Self-Supervised Few-Shot Learning on
            Point Clouds", Neural Information Processing Systems{" "}
            <b style={{ fontWeight: "600" }}>(NeurIPS)</b>, 2020.
            <a
              download=""
              target="__blank"
              href="https://arxiv.org/pdf/2009.14168.pdf"
              className="about__subtitle__link"
            >
              [pdf]
            </a>
            <a
              download=""
              target="__blank"
              href="https://github.com/charusharma1991/SSL_PointClouds"
              className="about__subtitle__link"
            >
              [code]
            </a>
          </li>
          <br />
          {/* 3rd */}
          <li>
            Charu Sharma, Manohar Kaul, "Simplicial Complex based Point
            Correspondence between Images warped onto Manifolds", European
            Conference on Computer Vision{" "}
            <b style={{ fontWeight: "600" }}>(ECCV)</b>, 2020.
            <a
              download=""
              target="__blank"
              href="https://arxiv.org/pdf/2007.02381.pdf"
              className="about__subtitle__link"
            >
              [pdf]
            </a>
            <a
              download=""
              target="__blank"
              href="https://github.com/charusharma1991/PointCorrespondence"
              className="about__subtitle__link"
            >
              [code]
            </a>
            <a
              download=""
              target="__blank"
              href="https://medium.com/@charusharma1991/simplicial-complex-based-point-correspondence-between-images-warped-onto-manifolds-a8c541d2398f"
              className="about__subtitle__link"
            >
              [blog]
            </a>
          </li>
          <br />
          {/* 4th */}
          <li>
            Charu Sharma, Jatin Chauhan, Manohar Kaul, "Learning Representations
            using Spectral-Biased Random Walks on Graphs", International Joint
            Conference for Neural Networks{" "}
            <b style={{ fontWeight: "600" }}>(IJCNN)</b>, 2020.
            <a
              download=""
              target="__blank"
              href="https://arxiv.org/pdf/2005.09752.pdf"
              className="about__subtitle__link"
            >
              [pdf]
            </a>
            <a
              download=""
              target="__blank"
              href="https://github.com/charusharma1991/LinkPred"
              className="about__subtitle__link"
            >
              [code]
            </a>
            <a
              download=""
              target="__blank"
              href="https://medium.com/swlh/spectral-biased-random-walks-on-graphs-9fd771e384ae"
              className="about__subtitle__link"
            >
              [blog]
            </a>
          </li>
          <br />
          {/* 5th */}
          <li>
            Deepak Nathani*, Jatin Chauhan*, Charu Sharma*, Manohar Kaul,
            "Learning Attention-based Embeddings for Relation Prediction in
            Knowledge Graphs", Association for Computational Linguistics
            <b style={{ fontWeight: "600" }}>(ACL)</b>, 2019. (Long paper) (*-
            Equal contribution)
            <a
              download=""
              target="__blank"
              href="https://aclanthology.org/P19-1466/"
              className="about__subtitle__link"
            >
              [pdf]
            </a>
            <a
              download=""
              target="__blank"
              href="https://github.com/deepakn97/relationPrediction"
              className="about__subtitle__link"
            >
              [code]
            </a>
            <a
              download=""
              target="__blank"
              href="https://deepakn97.github.io/blog/2019/Knowledge-Base-Relation-Prediction/"
              className="about__subtitle__link"
            >
              [blog]
            </a>
          </li>
          <br />
          {/* 6th */}
          <li>
            Charu Sharma, Deepak Nathani, Manohar Kaul, "Solving Partial
            Assignment Problems using Random Clique Complexes", International
            Conference on Machine Learning{" "}
            <b style={{ fontWeight: "600" }}>(ICML)</b>, 2018. (Long Talk)
            <a
              download=""
              target="__blank"
              href="http://proceedings.mlr.press/v80/sharma18a.html"
              className="about__subtitle__link"
            >
              [pdf]
            </a>
            <a
              download=""
              target="__blank"
              href="https://github.com/charusharma1991/RandomCliqueComplexes_ICML2018"
              className="about__subtitle__link"
            >
              [code]
            </a>
            <a
              download=""
              target="__blank"
              href="https://medium.com/@charusharma1991/graph-matching-partial-assignment-problem-using-random-clique-complexes-59aef2bf7b57"
              className="about__subtitle__link"
            >
              [blog]
            </a>
          </li>
        </ul>
        <br />
        <div className="about__service">
          <h2>Service</h2>
          <ul className="about__subtitle__ul about__ul">
            <li>
              <b> Proceedings Chair </b>
              at
              <a
                href="https://cods-comad.in/index.php"
                className="about__subtitle__link"
                target="__blank"
              >
                CoDS-COMAD 2023.
              </a>
            </li>
            <li>
              <b> Area Chair: </b>
              <p>
                {" "}
                ICLR 2022 Workshop on Geometrical and Topological Representation
                Learning{" "}
              </p>
              <a
                href="https://gt-rl.github.io/"
                className="about__subtitle__link"
                target="__blank"
              >
                GTRL
              </a>
            </li>
            <li>
              <b> Reviewer: </b>
              <p>
                TKDE'20, NeurIPS'21, 22, WACV'22, 23, AAAI'22, 23, ICLR'22,
                CVPR'22, ICML'22, TPAMI'22, ACML'21, 22
              </p>
            </li>
            <li>
              <b> Sub-Reviewer: </b>
              <p>NeurIPS'19, NeurIPS'20, EMNLP'20, AAAI'21, ICML'21</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
