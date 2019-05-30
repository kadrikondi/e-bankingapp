import React, { Component } from "react";
import "../../../asset/css/loader.css";
import Sidebar from "./sidebar";
import Customerheader from "../customerheader";
import { Link } from "react-router-dom";
import '../../admin/adminsAuth/Signin.css'
import { searchDoctor } from '../../../apidata/api'
export class transfer extends Component {
  constructor() {
    super();
    this.state = {
      acct_no: "",
      amount: "",
      isLoading: false,
      search:[],
      msg:'',
      pin:''
    };
    // this.CountinueTransfer = this.CountinueTransfer.bind(this);
    this.handleAccountNo = this.handleAccountNo.bind(this);
  }

  handleAccountNo(e) {
    this.setState({ acct_no: e.target.value });
    
  }

  // handleContinueTransfer(e){
  //   e.preventDefault()
  //   var acct = document.getElementById('acct').value
  //   //const { acct_no } = this.state
    
  //   fetch('/search', {
  //     method:"POST",
  //     headers:{
  //       "Accept":"application/json",
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       acct_no:acct
  //     })
  //   })
  //   .then(res => res.json())
  //   .then( res => {
  //     this.setState({info:res})
  //   })
  //   .catch(err => console.log(err.message))
  //   //console.log(this.state.info)
  // };
  async handleSearch(e){
    e.preventDefault()
    const { acct_no } = this.state
    const search = await searchDoctor( this.state)
    alert(search)
    // if(search.info){
    //   this.setState({search:search.info, match:search.match})
    // }
    // else{
    //   this.setState({msg:search.message})
    // }
    //console.log(search.message)
  }
  handleName(e) {
    this.setState({acct_no: e.target.value})
  }
  render() {
    return (
      <div>
        <Customerheader />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8">
              <div
                className="card mt-5" 	id="signin"
                style={{  margin: "0 auto" }}
              >
                <div className="card-header dark-text text-center py-4">
                  <h4> Make Transfer </h4>
                  <div className="card-body text-center">
                    {/* <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        value={this.state.acct_no}
                        id="acct"
                        onChange={this.handleAccountNo}
                        placeholder=" Enter Recipient account Number"
                      />
                    </div> */}
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search for a doctor via name or specialization" aria-label="Search" value={this.state.acct_no} onChange={this.handleName.bind(this)}/>
                    <h1>{this.state.msg}</h1>
                      {" "}
                      {/* <button
                        className="site-btn sb-gradients"
                        onClick={this.handleContinueTransfer}
                      >
                        Continue{" "}
                      </button> */}
                       <button class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit" onClick={this.handleSearch.bind(this)}>Search</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul>
            <li></li>
            <li></li>
          </ul>
      </div>
    );
  }
}

export default transfer;
