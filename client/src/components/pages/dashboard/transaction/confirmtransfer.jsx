import React, { Component } from "react";
import Customerheader from "../customerheader";
import Sidebar from "./sidebar";
import '../../Signup/Signup.css'
import '../../admin/adminsAuth/Signin.css'

export class confirmtransfer extends Component {
  constructor(){
    super()
    this.state ={
      fund:'',
      sender:'',
      receiver:'',
      fname:'',
      amt:'',
      pin:'',
      isloading:false
    }
    this.handleTransact = this.handleTransact.bind(this)
  }
  async componentDidMount(){
    const token = await JSON.parse(localStorage.getItem('token'));
    fetch('/userdetails', {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
      }
        
    })
    .then(res => res.json())
    .then(result => {
      //console.log(result)
      this.setState({
        sender:result.acct,
        fname:result.acct_name
    }) })
    .catch(err => console.log(err))
  }
  handleSender(e){
    this.setState({sender: e.target.value})

  }
  handleReceiver(e){
    this.setState({receiver:e.target.value})
  }
  handlePin(e){
      this.setState({pin:e.target.value})
  }
  handleFund(e){
    this.setState({fund: e.target.value})
  }
  handleAcctName(e){
      this.setState({fname:e.target.value})
  }
  handleSend(e){
    e.preventDefault()
    //console.log(this.state.pin)
    this.setState({isloading:true})
    fetch('/fund', {
      method:'PUT',
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        fund: this.state.fund,
        pin:this.state.pin,
        sender: this.state.sender,
        receiver: this.state.receiver
      })
    })
    .then( res => res.json())
    .then( res => {
        if(res.message === 'success'){
            this.handleTransact()
        }
        else{
          this.setState({isloading:false})
            alert(res.message)
        }
        
    })
    .catch( err => console.log(err))
  }
  handleTransact(e) {
      //e.preventDefault()
    fetch('/new', {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        amount:document.getElementById('amt').value,
        acct_name:document.getElementById('fname').value,
        recipient_acct:document.getElementById('receiver').value

      })

    })
    .then( res => res.json())
    .then( res => console.log(res))
    .catch(err => console.log(err))
  }
  amountChange(){
    this.setState({amt:this.state.fund})
  
  }
  render() {
    return (
      <div>
                <Customerheader />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 ">
                            <Sidebar />
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-8">


              <div className="card" id="signin"style={{ margin: "60px auto" }}>
                                <div className="card-header dark-text text-center py-4">
                                    <h4> Transfer Process</h4>
                                    <div className="card-body text-center">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="hidden"
                                                name=""
                                                id=""
                                                placeholder="Account Number"
                                                value={this.state.sender}
                                                onChange={this.handleSender.bind(this)}
                                                readOnly
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name=""
                                                id=""
                                                title="enter receiver account number"
                                                placeholder="Receiver Account Number"
                                                value={this.state.receiver}
                                                onChange={this.handleReceiver.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name=""
                                                id=""
                                                title="enter amount to transfer"
                                                placeholder="Amount"
                                                value={this.state.fund}
                                                onChange={this.handleFund.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name=""
                                                id=""
                                                title="create security at the sidebar"
                                                placeholder="Security Pin"
                                                value={this.state.pin}
                                                onChange={this.handlePin.bind(this)}
                                            />
                                        </div>
                                    {/* transaction pager */}
                                    {/* <h4>Transaction</h4> */}
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="hidden"
                                                name=""
                                                id="amt"
                                                placeholder="Amount"
                                                value={this.state.fund}
                                                onChange={this.amountChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="hidden"
                                                name=""
                                                id="receiver"
                                                placeholder="Recipient Acct no"
                                                value={this.state.receiver}
                                                onChange={this.handleReceiver.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="hidden"
                                                name=""
                                                id=""
                                                placeholder="transaction type"
                                                value="debit"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="hidden"
                                                name=""
                                                id="fname"
                                                placeholder="transaction type"
                                                value={this.state.fname}
                                                onChange={this.handleAcctName.bind(this)}
                                            />
                                        </div>
            
                                        <button className="site-btn sb-gradients" onClick={this.handleSend.bind(this)}>Send
                                        
                                        {this.state.isloading ? (
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

export default confirmtransfer;
