import React, { Component } from 'react'
import logo from '../../asset/img/logo.png'
export class customerheader extends Component {
  render() {
    return (
      <div style={{marginBottom:'10%'}}>
            <header className="header-section clearfix mb-5" style={{ backgroundColor: '#3f16af', color: '#f1f1f1' ,}}>
                <div className="container-fluid">
                    <a href="index.html" className="site-logo">
                        <img src={logo} alt='ok' />
                    </a>
                    <div className="responsive-bar">
                        <i className="fa fa-bars" />
                    </div>
                   
                    
                    <nav className="main-menu">
                        <ul className="menu-list">
                            <li>
                                <a href> Our Solution</a>
                            </li>
                            <li>
                                <a href>Our blog</a>
                            </li>

                            <li>
                                <a href>About Us</a>
                            </li>
                            <li>
                                <a href>Contact Us</a>
                            </li>
                            
                        </ul>
                        
                    </nav>
                </div>
            </header>
            {/* Header section end */}
      </div>
    )
  }
}

export default customerheader
