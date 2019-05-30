import React, { Component } from "react";
import Customerheader from "../customerheader";
import Sidebar from "./sidebar";
import '../../admin/adminsAuth/Signin.css'

export class complain extends Component {
  constructor(){
    super()
    this.state = {
      text:'',
      phone:'',
      from:'',
      acct:''
    }
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
      var fname = result.fname
      var lname = result.lname
      var name = fname + ' ' + lname
      this.setState({
        from:name,
        phone:result.phone,
        acct:result.acct,
        photo:result.photo
    }) })
    .catch(err => console.log(err))
  }
  handleSubmit(e){
    e.preventDefault()
    fetch('/complain', {
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        from:this.state.from,
        text:this.state.text,
        phone:this.state.phone,
        acct:this.state.acct
      })

    })
    .then(res => res.json())
    .then(res => {
      alert(res.message)
    })
    .catch(err => console.log(err))
  }
  handleFrom(e){
    this.setState({from:e.target.value})
  }
  handleText(e){
    this.setState({text:e.target.value})
  }
  handlePhone(e){
    this.setState({phone:e.target.value})
  }
  handleAcct(e){
    this.setState({acct:e.target.value})
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

            <div className="col-lg-8 col-md-8 col-md-8 col-sm-8">
              <div className="card mt-5" id="signin" style={{ margin: "0 auto" }}>
                <div className="card-header dark-text text-center py-4">
                  <h4>Enqury/Complain</h4>
                  <div className="card-body text-center">
                  <div className="form-group">
                      <input
                        className="form-control"
                        type="hidden"
                        name=""
                        value={this.state.from}
                        id="acct"
                        onChange={this.handleFrom.bind(this)}
                        placeholder="acct name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="hidden"
                        name=""
                        value={this.state.acct}
                        id="acct"
                        onChange={this.handleAcct.bind(this)}
                        placeholder="Account number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="hidden"
                        name=""
                        value={this.state.phone}
                        id="acct"
                        onChange={this.handlePhone.bind(this)}
                        placeholder="phone"
                      />
                    </div>

                    <div className="form-group">
                      <p>kindly send us your enquery we reply you shortly</p>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="@Enquiry and Complain"
                        value={this.setState.text}
                        onChange={this.handleText.bind(this)}
                      />
                    </div>
                    <button
                      className="site-btn sb-gradients"
                      onClick={this.handleSubmit.bind(this)}
                    >
                      Send{" "}
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

export default complain;
