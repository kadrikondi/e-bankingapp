import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
export class creditprocess extends Component {
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
                  <h4> Credit account Process</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter amount"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Sender name"
                      />
                    </div>

                    <div className="balance">
                      <p>Balance:</p>
                    </div>
                    <button className="site-btn sb-gradients">Credit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default creditprocess;
