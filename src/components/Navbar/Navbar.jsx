import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Charu Sharma</div>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{ listStyleType: 'none' }}>
                    <li>About</li>
                    <li>Research</li>
                    <li>Training</li>
                    <li>Experience</li>
                    <li>Others</li>
                    {/* <li>Contact</li> */}
                </ul>
            </div>
            <button className="button n-button">Contact</button>
        </div>
    </div>
  )
}

export default Navbar