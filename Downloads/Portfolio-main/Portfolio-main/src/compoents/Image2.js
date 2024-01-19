
import React from 'react'
import {Link } from "react-router-dom";

const Image2 = () => {
  
    return (
      <div className="Shubham">
        <div className="mask">
          <img className="into-img" alt='bgimage' src="https://img.freepik.com/free-photo/3d-render-technology-background-with-code-male-head_1048-5960.jpg?size=626&ext=jpg"/>
  
        </div>
           <div className="content">
       <p>MY WORK IS HERE!!!</p>
       <h1>Projects</h1>
      
       <div><Link to="https://github.com/shubhampriya1/TodoList5678" className="btn">Project 1</Link>
       <Link to="https://github.com/shubhampriya1/wheather-app" className="btn-light">Project 2</Link>
      
     </div>
     <h1> 
     <div> <Link to="https://github.com/shubhampriya1/Calculator" className="btn-light">Project 3</Link>
       <Link to="https://github.com/shubhampriya1/wheather-app" className="btn-dark">Project 4</Link>
</div>
     </h1>
     
      
         
      </div>
      </div>
  )
}

export default Image2
