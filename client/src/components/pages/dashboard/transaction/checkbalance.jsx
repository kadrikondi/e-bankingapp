import React, { Component } from "react";
import Customerheader from "../customerheader";
import Sidebar from "./sidebar";
import {getBalance} from '../../../apidata/api'

export class checkbalance extends Component {
  constructor(){
    super()
    this.state ={
      balance:''
    }
  }
  async componentDidMount(){
    const balance = await getBalance(this.props.match.params.id)
    this.setState({balance:balance.account[0].balance})
  }
  render() {
    return (
      <div>
        <Customerheader />

        <div className="container mt-5">
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">

             <Sidebar/>
                
              </div>
            <div className="col-lg-8  col-md-8 col-sm-8 mt-5">
              {" "}
              <div className="balance" style={balanceStyle}>
                <p
                  className="text-center text-light"
                  style={{ fontWeight: "bold" }}
                >
                  Your Accout balance
                </p>
                <h2 style={{ color: "#f1f1f1", padding: "20px" }}>
                  {" "}
                  <del>N</del> {this.state.balance}
                </h2>
                {/* <h5 style={{ color: "#f1f1f1"}}>Fifity Million Naira</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const balanceStyle = {
  width: "80%",
  height: "80%x",
  padding: "10px",
  backgroundColor: "#3f16af",
  borderRadius: "20%",
  textAlign: "center",
  marginTop:'40px',
  color: "#ffffff"
};
export default checkbalance;
