import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import './adminsAuth/Signin.css';

export class creditprocess extends Component {
  constructor(){
    super()
    this.state = {
      balance:''
    }
  }
  async componentDidMount(){
    const amount = await window.localStorage.getItem('amount')
    this.setState({balance:amount})
  }
  updateAccount(id){
    fetch(`/withdraw/${id}`, {
      method:"PUT",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        balance:this.state.balance
      })
    })
    .then( res => res.json())
    .then(res => {
      //console.log(res)
      
      if(res.message === 'withdrawal successful'){
        alert(res.message)
        window.localStorage.removeItem('acctId')
        window.localStorage.removeItem('acctName')
        window.localStorage.removeItem('acctno')
        window.localStorage.removeItem('amount')
      }
    })
    .catch(err => console.log(err))
  }
  async handleSubmit(e){
    e.preventDefault()
    this.updateAccount(this.props.match.params.id)  
  }
  handleBalance(e){
    this.setState({balance:e.target.value})
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
                style={{ margin: "0 auto" }}
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
                        value={this.state.balance}
                        onChange={this.handleBalance.bind(this)}
                      />
                    </div>
                    <button className="site-btn sb-gradients" onClick={this.handleSubmit.bind(this)}>Withdraw</button>
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
