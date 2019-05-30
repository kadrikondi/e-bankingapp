import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import { Link } from "react-router-dom";
import './adminsAuth/Signin.css'

export class creditaccount extends Component {
  constructor(){
    super()
    this.state = {
      acct_no:'',
      users:[],
      acct:"",
      acct_name:'',
      userId:''
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
        var  fname = res.info.fname
        var lname = res.info.lname
        var acct_name = fname + ' ' + lname
        //console.log(res.info)
        window.localStorage.setItem('acctId', res.acct)
        window.localStorage.setItem('acctName', acct_name)
        window.localStorage.setItem('acctno', res.info.acct_no)
        this.setState({users:res.info, acct:res.acct, acct_name:acct_name})
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
                className="card mt-5" id="signin"
                style={{  margin: "0 auto" }}
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
                className="card mt-5" id="signin"
                style={{  margin: "0 auto" }}
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
                        value={this.state.acct_name}
                        readOnly
                        //onChange={this.handleName.bind(this)}
                      />
                    </div>
                    <Link to={`/new/transaction/${this.state.users._id}`}>
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
