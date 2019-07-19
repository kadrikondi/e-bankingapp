import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import './adminsAuth/Signin.css'

export class debitprocess extends Component {
  constructor(){
    super()
    this.state = {
      balance:'',
      sender:'',
      isLoading:false

    }
  }
  async componentDidMount(){
    const amount = await window.localStorage.getItem('amount')
    const sender = await window.localStorage.getItem('sender')
    this.setState({balance:amount, sender:sender})
  }
  updateAccount(id){
    this.setState({isLoading:true})
    fetch(`/acctamt/${id}`, {
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
      this.setState({isLoading:false})
      if(res.message === 'account updated'){
        alert(res.message)
        window.localStorage.removeItem('acctId')
        window.localStorage.removeItem('acctName')
        window.localStorage.removeItem('acctno')
        window.localStorage.removeItem('amount')
        window.localStorage.removeItem('sender')
      }
    })
    .catch(err => {
      this.setState({isLoading:false})
      console.log(err)})
  }
  async handleSubmit(e){
    e.preventDefault()
    this.updateAccount(this.props.match.params.id)  
  }
  handleSender(e){
    this.setState({sender:e.target.value})
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
                style={{  margin: "0 auto" }}
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
                        readOnly
                      />
                                            <input
                        className="form-control"
                        type="hidden"
                        name=""
                        id=""
                        placeholder="sender"
                        value={this.state.sender}
                        onChange={this.handleSender.bind(this)}
                      
                      />
                    </div>

                    {/* <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Sender name"
                      />
                    </div> */}

                    
                    <button className="site-btn sb-gradients" onClick={this.handleSubmit.bind(this)}>Credit
                    {this.state.isLoading ? (
                    <div id="signuploading" ></div>
                  ) : (<div></div>)}
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

export default debitprocess;
