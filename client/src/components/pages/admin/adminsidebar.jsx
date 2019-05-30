import React, { Component } from "react";
import { Link } from "react-router-dom";
// import customer from "../../../asset/img/member/1.jpg";
export class sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
      sname:'',
      email:'',
      lname:'',
      id:''
    }
  }
  async componentDidMount(){
    const token = await JSON.parse(localStorage.getItem('atoken'));
    fetch('/admindetails', {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`
      }
        
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      this.setState({
        sname:result.sname,
        lname:result.lname,
        email:result.email,
        id:result.id
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
            backgroundColor: "#f1f1f1",
            // #3f16af
            padding: "0px 10px  200px 10px ",
            textAlign: "center"
          }}
        >
          <li
            className="list-group-item mt-5"
            style={{ backgroundColor: "black", display: "block" }}
          >
            <Link to="/adash" style={liStyle}>
              <p style={{ color: "white", fontSize: "1.5em" ,boxShadow:'3px 3px  20px gray' }}> Admin Dashboard</p>
            </Link>
          </li>
          <img
            className="img-circle"
            // src={customer}
            alt=""
            style={{
              width: "40%",
              padding: "1px 30px",
              borderRadius: "45%",
              margin: "10px"
            }}
          />
          <h3>{this.state.sname.toUpperCase()} {this.state.lname.toUpperCase()}</h3>
          <ul className="list-group mt-5 text-center">
            <li className="list-group-item">
              <Link to="/newcus" style={liStyle}>
                New Customers
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/alltrans" style={liStyle}>
                Transaction
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/credit" style={liStyle}>
                Credit account
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="debit" style={liStyle}>
                Withdrawal
              </Link>
            </li>
            <li className="list-group-item ">
              <Link to="/rcustomer" style={liStyle}>
                Registered Customers
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/complains" style={liStyle}>
                Complains / Comments
              </Link>
            </li>

            <li className="list-group-item ">
              <Link to="/acontrol" style={liStyle}>
                Close Account
              </Link>
            </li>

            <li className="list-group-item mt-3 ">
              <Link to="/asignup" style={liStyle}>
             Add New Admin
              </Link>
            </li>
          </ul>
          <Link to="/asignin">
            {" "}
            <button className="site-btn btn sb-gradients mt-5" onClick={this.handleLogout.bind(this)}>Sign Out</button>
          </Link>
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
