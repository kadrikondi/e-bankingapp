import React, { Component } from "react";
import logo from "../../asset/img/logo.png";
import {Link} from "react-router-dom"

export class header extends Component {
  render() {
    return (
      <div>
        
        {/* Header section */}
        <header className="header-section clearfix " style={{ backgroundColor:'#3f16af',padding:"10px 5px" ,marginBottom:"60px"}}>
          <div className="container-fluid">
            <a href="/" className="site-logo">
              {/* <img src={logo} alt="ok" /> */}
              <h4 style={{color:"white"}}>Ebanking system</h4>
            </a>
            <div className="responsive-bar">
              <i className="fa fa-bars" />
            </div>
           
            <Link to='/signup' className="site-btn" style={{ color: '#ffffff' }}>
              Sign Up Free
            </Link>
            <nav className="main-menu">
              <ul className="menu-list" style={{color:'#ffffff'}}>
                <li>
                  <a href>Solution</a>
                </li>
                <li>
                  <a href>Features</a>
                </li>
                <li>
                  <a href>News</a>
                </li>
                <li>
                  <a href>About</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default header;
