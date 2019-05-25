import React, { Component } from "react";
import logo from "../../asset/img/logo.png";
import appstore from "../../asset/img/appstore.png";
import playstore from "../../asset/img/playstore.png";
export class footer extends Component {
  render() {
    return (
      <div>
        {/* Footer section */}
        <footer className="footer-section">
          <div className="container">
            <div className="row spad">
              <div className="col-md-6 col-lg-3 footer-widget">
                <img src={logo} className="mb-4" alt="" />
                <p>
                  our service is flexible and easy to use. bank with us and grow
                  your investment
                </p>
                <span>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This project is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="/" target="_blank">
                    Kabiru
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </span>
              </div>
              <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
                <h5 className="widget-title">Resources</h5>
                <ul>
                  <li>
                    <a href="#">How to Buy Coin</a>
                  </li>
                  <li>
                    <a href="#">Coin Overview</a>
                  </li>
                  <li>
                    <a href="#">Blog News</a>
                  </li>
                  <li>
                    <a href="#">How to Sell Coin</a>
                  </li>
                  <li>
                    <a href="#">Purchase Theme</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
                <h5 className="widget-title">Quick Links</h5>
                <ul>
                  <li>
                    <a href="#">Network Stats</a>
                  </li>
                  <li>
                    <a href="#">Block Explorers</a>
                  </li>
                  <li>
                    <a href="#">Governance</a>
                  </li>
                  <li>
                    <a href="#">Exchange Markets</a>
                  </li>
                  <li>
                    <a href="#">Get Theme</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
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
                      <a href>support@company.com</a>
                    </li>
                    <li>
                      <a href>(123) 456-7890</a>
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
