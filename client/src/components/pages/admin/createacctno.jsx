import React, { Component } from 'react'
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import '../../asset/css/loader.css'
import { Link } from "react-router-dom";
import './adminsAuth/Signin.css'
//import {generateAccountNumber} from '../../apidata/api'

export default class createacctno extends Component {
    constructor(){
        super()
        this.state ={
            acct_no:'',
            isloading: false
        }
    }
    handleGenerator(e){

        e.preventDefault()
        fetch('/generate', {
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            //console.log(res)
            
            this.setState({acct_no:res.acct_no})
  
        })
        .catch(err =>{ 
         
          console.log(err)})
    }
    acctUpdate(id){
      this.setState({isloading:true})
        fetch(`/acctno/${id}`, {
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
          this.setState({isloading:false})
            alert(res.message)
            console.log(res.message)
        })
        .catch(err => {
          this.setState({isloading:false})
          console.log(err)
        })
    }
    handleUpdate(e){
        e.preventDefault()
        this.acctUpdate(this.props.match.params.id)
        
    }
    handleAcct(e){
        this.setState({acct_no: e.target.value})
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
                className="card mt-5 " id="signin"
                style={{ margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4>Generate Account Number</h4>
                  <div className="card-body text-center">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="hidden"
                        name=""
                        id=""
                        placeholder="Account Number"
                        value={this.state.acct_no}
                      />
                    </div>
                    <button className="site-btn sb-gradients" onClick={this.handleGenerator.bind(this)}>Generate here</button>
                   
                  </div>
                </div>
              </div>

              {/* confirm customer */}

              <div
                className="card mt-5" id="signin"
                style={{  margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4>Update user account</h4>
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
                        readonly
                      />
                    </div>

                    
                    
                      <button className="site-btn sb-gradients" id="sb-gradients" onClick={this.handleUpdate.bind(this)}>
                        Countinue
                        {this.state.isloading===true ?( <div id="signuploading" >loading</div>):null
                  }
                      </button>
                    
                  </div>
                </div>
              </div>

              {/* customer detail */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
