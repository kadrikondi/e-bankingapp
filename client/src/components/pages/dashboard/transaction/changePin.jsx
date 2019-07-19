import React, { Component } from 'react'
import Sidebar from "./sidebar";
import Customerheader from "../customerheader";
import '../../admin/adminsAuth/Signin.css'

export default class changePin extends Component {
    constructor(){
        super()
        this.state = {
            pin:'',
            message:''
        }
    }
    updatePin(acct_no){
        var pin = document.getElementById("acct").value
        fetch(`/changepin/${acct_no}`, {
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                pin:pin
            })
        })
        .then( res => res.json())
        .then( res => {
          this.setState({message:res.message})
            console.log(res)
        })
        .catch( err => console.log(err))
    }
    handleSubmit(e){
        e.preventDefault()
        this.updatePin(this.props.match.params.acct_no)
    }
    handlePin(e){
        this.setState({pin:e.target.pin})
    }
  render() {
    return (
      <div>
        <Customerheader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Sidebar />
            </div>

            <div className="col-lg-8 col-md-8 col-sm-8">
              <div
                className="card mt-5"
                style={{ width: "50%", margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4> Create Pin </h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name=""
                        value={this.state.pin}
                        id="acct"
                        onChange={this.handlePin.bind(this)}
                        placeholder=" Create 4 digit pin"
                      />
                    </div>
                   
                      {" "}
                      {/* <button
                        className="site-btn sb-gradients"
                        onClick={this.handleContinueTransfer}
                      >
                        Continue{" "}
                      </button> */}
                    <div>{this.state.message}</div>
                       <button class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit"
                        onClick={this.handleSubmit.bind(this)}
                        >Create pin</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
