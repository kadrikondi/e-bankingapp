import React, { Component } from "react";
import logo from "../../asset/img/logo.png";
import appstore from "../../asset/img/appstore.png";
import playstore from "../../asset/img/playstore.png";
import {Link} from 'react-router-dom'
export class footer extends Component {
  render() {
    return (
      <div>
        {/* Footer section */}
        <footer className="footer-section">
          <div className="container">
            <div className="row spad">
              <div className="col-md-6 col-lg-6 footer-widget">
                {/* <img src={logo} className="mb-4" alt="" /> */}
                <h4 style={{ margin:"8px"}}>Ebanking system</h4>
                <p>
                  Our service is flexible and easy to use. bank with us and grow your investment. &hearts;
                </p>
                {/* <Link to='asignin'><button style={{cursor:"pointer"}}>Sign in As admin</button></Link>  */}
                <span> <br></br>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This project is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <Link to="/asignup"> Yakub Kabiru</Link>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </span>
              </div>
              
                            <div className="col-md-6 col-lg-6 footer-widget pl-lg-5 pl-3">
                <h5 className="widget-title">Follow Us</h5>
                <div className="social">
                  <a href className="facebook">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href className="google">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href className="instagram">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
                  <a href>
                    <img src={appstore} alt className="mr-2" />
                  </a>
                  <a href>
                    <img src={playstore} alt />
                  </a>
                </div>
                <div className="col-lg-8 text-center text-lg-right">
                  <ul className="footer-nav">
                    <li>
                      <a href>DPA</a>
                    </li>
                    <li>
                      <a href>Terms of Use</a>
                    </li>
                    <li>
                      <a href>Privacy Policy </a>
                    </li>
                    <li>
                      <a href>support@kabiru-ebank.herokuapp.com</a>
                    </li>
                    <li>
                      <a href>(124) 35985569</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
