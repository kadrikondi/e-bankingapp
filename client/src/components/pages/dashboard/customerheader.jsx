import React, { Component } from 'react'
import logo from '../../asset/img/logo.png'
import {Link} from 'react-router-dom'
export class customerheader extends Component {



    async handleLogout() {
        await window.localStorage.clear()
    }
  render() {
    return (
      <div style={{marginBottom:'10%'}}>
            <header className="header-section clearfix mb-5" style={{ backgroundColor: '#3f16af', color: '#f1f1f1' ,}}>
                <div className="container-fluid">
                    <a href="index.html" className="site-logo">
                        <img src={logo} alt='ok' />
                    </a>
                    {/* <div className="responsive-bar">
                        <i className="fa fa-bars" />
                    </div> */}
                   
                    
                    <nav className="float-right">
                        <ul className>
                            
                            <Link to="/">
                                {" "}
                                <button className="btn btn-danger" onClick={this.handleLogout.bind(this)}>Sign Out</button>
                            </Link>
                            
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
