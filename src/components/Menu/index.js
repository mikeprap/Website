import React from "react";
import "./style.css"

function SideMenu() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/about">About</a>
      <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
      
    </div>
  </div>
</nav>
</div>
    );
}

export default SideMenu;