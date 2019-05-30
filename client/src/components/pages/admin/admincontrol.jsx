import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import { Link } from "react-router-dom";

export class closeaccount extends Component {
  constructor(){
    super()
    this.state = {
      acct_no:'',
      name:''
    }
  }
  componentDidMount(){
    document.getElementById('inf').style.display ='none'
  }
  handleFind(e){
    e.preventDefault()
    fetch('/close', {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        acct_no:this.state.acct_no
      })
    })
    .then( res => res.json())
    .then( res => {
      this.setState({name:res.info})
      document.getElementById('inf').style.display ='block'
      //console.log(res)
    })
    .catch( err => console.log(err))
  }
  handleAcct(e){
    this.setState({acct_no:e.target.value})
  }
  handleAccounDel(){
    fetch('/del/account', {
      method:"DELETE",
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
      console.log(res.message)
    })
    .catch(err => console.log(err))
  }
  handleDelete(e){
    e.preventDefault()
    fetch('/del/user', {
      method:"DELETE",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:this.state.name._id
      })
    })
    .then(res => res.json())
    .then( res => {
      alert(res.message)
      this.handleAccounDel()
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Adminheader />
        <div className="containe">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm3">
              <Adminsidebar />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div
                className="card mt-5"
                style={{ width: "50%", margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4>Account closing</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Number "
                        value={this.state.acct_no}
                        onChange={this.handleAcct.bind(this)}
                      />
                    </div>
                    <button className="site-btn sb-gradients" onClick={this.handleFind.bind(this)}>Check</button>
                  </div>
                </div>
              </div>

              {/* confirm customer */}

              <div
                className="card mt-5"
                style={{ width: "50%", margin: "0 auto" }}
                id="inf"
              >
                <div className="card-header dark-text text-center py-4">
                  <h4> {this.state.name.acct_name} account details</h4>
                  <div className="card-body text-center">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Firstname:&nbsp;</strong>{this.state.name.fname}</li>
                    <li className="list-group-item"><strong>Lastname:&nbsp;</strong>{this.state.name.lname}</li>
                    <li className="list-group-item"><strong>Account Number:&nbsp;</strong>{this.state.name.acct_no}</li>
                    <li className="list-group-item"><strong>Email:&nbsp;</strong>{this.state.name.email}</li>
                    <li className="list-group-item"><strong>Phone:&nbsp;</strong>{this.state.name.phone}</li>
                    <input type="hidden" value={this.state.name._id}/>
                  </ul>
                    
                      <button className="site-btn sb-gradients" onClick={this.handleDelete.bind(this)}>
                        close Account
                      </button>
                    
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

export default closeaccount;
