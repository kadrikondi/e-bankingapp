import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import { Link } from "react-router-dom";

export class debitaccount extends Component {
  render() {
    return (
      <div>
        <Adminheader />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Adminsidebar />
            </div>
            <div className="col-lg-8">
              <div
                className="card mt-5"
                style={{ width: "50%", margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4>Debit Account</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Number"
                      />
                    </div>
                    <button className="site-btn sb-gradients">Check</button>
                  </div>
                </div>
              </div>

              {/* confirm customer */}

              <div
                className="card mt-5"
                style={{ width: "50%", margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4> Account Detail</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Number"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Name"
                      />
                    </div>
                    <Link to="/credit/process">
                      <button className="site-btn sb-gradients">
                        Countinue
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* customer detail */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default debitaccount;
