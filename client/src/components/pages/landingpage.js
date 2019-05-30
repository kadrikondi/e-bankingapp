import React, { Component } from 'react'
import laptop from '../asset/img/laptop.png'
import   {Link} from 'react-router-dom'
import Customerheader from './dashboard/customerheader';




export class landingpage extends Component {
  render() {
    return (
      <div>
        {/* <Customerheader/> */}
         {/* Hero section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h2>Banking  With <span>Us</span> <br />Increase Your investment</h2>
              <h4>Use modern banking technologies save your money</h4>
              <form className="hero-subscribe-from">
             <Link to='/signup'> < button className = "site-btn sb-gradients" > Register With us </button>  </Link>
              <Link to='/signin'>  <button className="site-btn sb-gradients mt-3">Sign in</button>
              </Link>
              </form>
            </div>
            <div className="col-md-6">
              <img src={laptop} className="laptop-image" alt="laptop" />
            </div>
          </div>
        </div>
      </section>
      {/* Hero section end */}
      </div>
    )
  }
}

export default landingpage
