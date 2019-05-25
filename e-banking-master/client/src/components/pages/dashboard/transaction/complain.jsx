import React, { Component } from "react";
import Customerheader from "../customerheader";
import Sidebar from "./sidebar";

export class complain extends Component {
  render() {
    return (
      <div>
        <Customerheader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div className="card mt-5" style={{ margin: "0 auto" }}>
                <div className="card-header dark-text text-center py-4">
                  <h4>Enqury/Complaint</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <p>kindly send us your enquery we reply you shortly</p>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="type your enquery"
                      />
                    </div>
                    <button
                      className="site-btn sb-gradients"
                      onClick={this.handleContinueTransfer}
                    >
                      Sende{" "}
                    </button>
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

export default complain;
