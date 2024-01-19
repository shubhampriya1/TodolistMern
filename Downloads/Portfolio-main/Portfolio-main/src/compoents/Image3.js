
import React from 'react'

import {Link } from "react-router-dom";

const Image2 = () => {
  
    return (
      <div className="Shubham">
        <div className="mask">
          <img className="into-img" alt='bgimage' src="https://media.istockphoto.com/id/1469706455/photo/business-woman-computer-seo-work-and-coding-of-young-employee-with-crypto-and-glasses-digital.jpg?s=1024x1024&w=is&k=20&c=MUwj294ES8VwY5vf6RlbNd8ypD3FQLz4wXMjgDXue2c="/>
          
        </div>
        <div className="content">
       <h1>Who Am i?</h1>
       <h4> Hello,I am Shubham priya ,</h4>
       <h4> B-Tech 3rd year Student</h4>
       <div className='textpadding'/>
       
      
       <div><Link to="https://drive.google.com/file/d/1hcIzqg6iuBzKYoVjMD4qM_iN1wcUJyRc/view?usp=drive_link" className="btn">Resume</Link>
     
     </div>
     
      </div>
      </div>
      
  )
}

export default Image2
