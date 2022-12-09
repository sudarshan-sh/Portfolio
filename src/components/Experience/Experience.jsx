import React from 'react'
import './Experience.css'
import { MdOutlineWork } from 'react-icons/md'

const Experience = () => {
  return (
    <div className="experience" id='experience'>
      {/* left side */}
      <div className="awesome">
      <span style={{ fontSize: "45pt" }}>
          Experience <MdOutlineWork style={{ fontSize: "1.5rem" }} />
        </span>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="experience_data">
        <ol className="exp__subtitle__ul">
          <li>Research visit to <b style={{ fontWeight: '600' }}> Hebei Normal University, Shijiazhuang, China</b> (May 2019 - July 2019)</li>
          <li>
            Course TA
            <ul className='course_list'>
              <li>CS3563: Introduction to DBMS-II (Spring 2017, 2018, 2019, 2020, 2021)</li>
              <li>CS3550: Introduction to DBMS-I (Fall 2017, 2018, 2019, 2020)</li>
              <li>CS5420: Big Data Indexing Strategies (Fall 2017)</li>
              <li>Data Structures Lab (Fall 2016)</li>
            </ul>
          </li>
          <li>
          Junior Software Engineer, <b style={{ fontWeight: '600' }}>Indian Institute of Technology, Bombay</b> (Jul 2013 - Jul 2014)
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience