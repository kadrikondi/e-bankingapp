import React, { Component } from 'react'
import logo from '../../asset/img/logo.png'
import {Link} from 'react-router-dom'
export class adminheader extends Component {
    render() {
        return (
            <div style={{ marginBottom: '10%' }}>
                
                <header className="header-section clearfix mb-5" style={{ backgroundColor: 'black', color: '#f1f1f1' }}>
                    <div className="container-fluid">
                        <Link to="/adash" className="site-logo navbar-brand white" style={{ color: "white", fontFamily: "cursive" }}>
                              Ebanking system
                            {/* <img src={logo} alt='ok' /> */}
                        </Link>
                       
                        <div className="responsive-bar">
                            <i className="fa fa-bars" />
                        </div>


                        <nav className="main-menu">
                            <ul className="menu-list">
                                <li>
                                    <Link to="/adash" > Home</Link>
                                </li>
                                <li>
                                    <a href>Our blog</a>
                                </li>

                                <li>
                                    <a href>About Us</a>
                                </li>
                                <li>
                                   <Link to="/" target="_blank">
                                    customer page
                                   </Link>
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

export default adminheader
