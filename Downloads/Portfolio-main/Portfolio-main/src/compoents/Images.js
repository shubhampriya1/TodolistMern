import "./ImagesStyles.css";
  
import React from 'react'
// import suru from "../assets/suru";
import {Link } from "react-router-dom";
const Images = () => {
  return (
    <div className="Shubham">
      <div className="mask">
        <img className="into-img" alt="bgimage" src="https://static.wixstatic.com/media/6a8144_22740e10ac68489b8f4cb684040abf04~mv2.jpg/v1/fill/w_1892,h_1275,al_c,q_90,enc_auto/6a8144_22740e10ac68489b8f4cb684040abf04~mv2.jpg"/>

      </div>
         <div className="content">
     <p>HI ,I M SHUBHAM PRIYA</p>
     <h1>React Developer</h1>
        
        <div>
     <Link to="/Project" className="btn">Project</Link>
     <Link to="/Contact" className="btn-light">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default Images
