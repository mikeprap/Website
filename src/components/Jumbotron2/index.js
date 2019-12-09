import React from "react";
import './style.css'
import Photo from '../Images/mike.jpg'



function Jumbotron2() {
  return (
  <div className="jumbotron">
    <div className="container">
      <h1 className="title">
        Michael Praplaski
      </h1>
      <h2 className="subtitle">
        Full Stack Web Developer
      </h2>
      <image src ={Photo}/>
    </div>
  </div>
);
}

export default Jumbotron2;