import React, { Component } from 'react'
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import './adminsAuth/Signin.css'

export default class withdrawalTransaction extends Component {
    constructor(){
        super()
        this.state = {
          acct_no:'',
          phone:'',
          amount:'',
          acct:"",
          acct_name:'',
          userId:''
        }
      }
      async componentDidMount(){
        const userId = await window.localStorage.getItem('userId')
        const acct_name = await window.localStorage.getItem('acctName')
        const acctno = await window.localStorage.getItem('acctno')
        this.setState({userId:userId, acct_name:acct_name, acct_no:acctno})
      }
      createTransaction(id){
          fetch(`/transaction/new/${id}`, {
              method:"POST",
              headers:{
                  "Accept":"application/json",
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  acct_name:this.state.acct_name,
                  acct_no:this.state.acct_no,
                  amount:this.state.amount,
                  phone:this.state.phone
              })
          })
          .then(res => res.json())
          .then(res => {
              var id = window.localStorage.getItem('acctId')
              if(res.message === 'Transaction was successful'){
                window.localStorage.setItem('amount', this.state.amount)
                this.props.history.push(`/credit/process/${id}`)
              }
          })
          .catch(err => console.log(err))
      }
      handleTransact(e){
          e.preventDefault()
          this.createTransaction(this.props.match.params.id)
      }
      handleAcctName(e){
          this.setState({acct_name:e.target.value})
      }
      handleAcctNo(e){
        this.setState({acct_no:e.target.value})
     }
     handlePhone(e){
        this.setState({phone:e.target.value})
    }
    
    handleAmount(e){
        this.setState({amount:e.target.value})
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
                  <h4>Transaction details</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Account Number"
                        value={this.state.acct_no}
                        onChange={this.handleAcctNo.bind(this)}
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
                        onChange={this.handleAcctName.bind(this)}
                      />
                    </div>
                    
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmount.bind(this)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                        placeholder="phone number"
                        value={this.state.phone}
                        onChange={this.handlePhone.bind(this)}
                      />
                    </div>
                    <button className="site-btn sb-gradients" onClick={this.handleTransact.bind(this)}>Check</button>
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
