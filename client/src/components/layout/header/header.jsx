import React, { Component } from "react";
import logo from "../../asset/img/logo.png";
import {Link} from "react-router-dom"

export class header extends Component {
  render() {
    return (
      <div>
        
        {/* Header section */}
        <header className="header-section clearfix " style={{ backgroundColor:'#3f16af',padding:"10px 5px" ,marginBottom:"100px"}}>
          <div className="container-fluid">
            <a href="/" className="site-logo navbar-brand white" style={{color:"white", fontFamily:"cursive"}}>
              {/* <img src={logo} alt="ok" /> */}
              E-banking 
              {/* <h4 style={{color:"white", margin:"0px", padding:"0px"}}>Ebanking system</h4> */}
            </a>
            <div className="responsive-bar">
              <i className="fa fa-bars" />
            </div>
           
            <Link to='/signup' className="site-btn" style={{ color: '#ffffff' }}>
              Sign Up Free
            </Link>

          </div>
        </header>
      </div>
    );
  }
}

export default header;
