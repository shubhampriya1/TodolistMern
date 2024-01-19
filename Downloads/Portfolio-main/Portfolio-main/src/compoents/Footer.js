import "./FooterStyle.css"
import React from 'react'
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location"> 
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div><p>XYZ Colony ,Road no-X,Patna... </p>
            <p>Bihar</p>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            9431433015</h4>
            
            </div>
            <div className="Email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            Shubhampriya513@gmail.com</h4>
            
            </div>
              </div>
        </div>
        <div className="right"> <h4>
            About the Company</h4>
            <p>
            A quick glimpse back into the website can trigger stronger 
            connections of the users with that website. An overview of 
            the most important pages/information, in the form of a shortlist of 
            links, can go a long way in further engaging the users.


            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
           
            </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
