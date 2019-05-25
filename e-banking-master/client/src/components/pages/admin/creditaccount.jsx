import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import { Link } from "react-router-dom";

export class creditaccount extends Component {
  constructor(){
    super()
    this.state = {
      acct_no:'',
      users:[],
      acct:""
    }
  }
  componentDidMount(){
    
  }
  handleCheck(e){
    e.preventDefault()
    fetch('/search', {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        acct_no:this.state.acct_no
      })
    })
    .then(res => res.json())
    .then( res => {
     
        this.setState({users:res.info, acct:res.acct})
        //.getElementsByClassName("btn").style.visibility = 'visible'
  
      
    })
    .catch(err => console.log(err))
  }
  handleAcct(e){
    this.setState({acct_no:e.target.value})
  }
  
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
                  <h4>Credit Account</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Number"
                        value={this.state.acct_no}
                        onChange={this.handleAcct.bind(this)}
                      />
                    </div>
                    <button className="site-btn sb-gradients" onClick={this.handleCheck.bind(this)}>Check</button>
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
                        value={this.state.users.acct_no}
                        //onChange={this.handle}
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Name"
                        value={this.state.users.fname}
                        readOnly
                        //onChange={this.handleName.bind(this)}
                      />
                    </div>
                    <Link to={`/debit/process/${this.state.acct}`}>
                      <button className="site-btn sb-gradients" id="btn">
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

export default creditaccount;
