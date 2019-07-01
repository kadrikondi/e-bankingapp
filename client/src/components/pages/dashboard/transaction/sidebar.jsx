import React, { Component } from "react";
import { Link } from "react-router-dom";
import customer from "../../../asset/img/member/1.jpg";

export class sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
      fname:'',
      photo:'',
      lname:'',
      id:'',
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
      this.setState({
        fname:result.fname,
        lname:result.lname,
        id:result.id,
        acct:result.acct,
        photo:result.photo
    }) })
    .catch(err => console.log(err))
  }
  async handleLogout(){
    await window.localStorage.clear()
  }
  render() {
    return (
      <div>
        <div
          className=""
          style={{
            backgroundColor: "#f2f2f2",
            // #3f16af
            padding: "0px 10px  200px 10px ",
            textAlign: "center"
          }}
        >
          <li
            className="list-group-item mt-5"
            style={{ backgroundColor: "#3f16af", display: "block" }}
          >
            <Link to="/cdash" style={liStyle}>
              <p style={{ color: "white", fontSize: "1.5em" }}>Dashboard</p>
            </Link>
          </li>
          <img
            className="img-circle"
            src={this.state.photo}
            alt="customerphoto"
            style={{
              width: "40%",
              padding: "1px 20px",
              borderRadius: "45%",
              margin: "10px"
            }}
          />
          <h3>{this.state.fname.toUpperCase()} {this.state.lname.toUpperCase()}</h3>
          <ul className="list-group mt-5 text-center">
            <li className="list-group-item">
              <Link to="/ctransfer" style={liStyle}>
                Make transfer
              </Link>
            </li>
            <li className="list-group-item">
              <Link to={`/balance/${this.state.id}`} style={liStyle}>
                Check Balance
              </Link>
            </li>
            <li className="list-group-item">
              <Link to={`/viewtrans/${this.state.id}`} style={liStyle}>
                View transactions
              </Link>
            </li>
            <li className="list-group-item">
              <Link to={`/profile/${this.state.id}`} style={liStyle}>
               User Profile 
              </Link>
            </li>
            <li className="list-group-item ">
              <Link to={`/changepin/${this.state.acct}`} style={liStyle}>
                Create Pin 
              </Link>
            </li>
            <li className="list-group-item ">
              <Link to="/conplain" style={liStyle}>
                Make enquery / complain
              </Link>
            </li>
          </ul>
          {/* <Link to="/">
            {" "}
            <button className="site-btn btn btn-danger mt-5" onClick={this.handleLogout.bind(this)}>Sign Out</button>
          </Link> */}
        </div>

        <div />
      </div>
    );
  }
}
const liStyle = {
  display: "block"
};

export default sidebar;
