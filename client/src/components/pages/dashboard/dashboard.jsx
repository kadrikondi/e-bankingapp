import React, { Component } from "react";
import Customerheader from "./customerheader";
import customer from "../../asset/img/member/1.jpg";
import "../Signup/Signup.css"
import './dasb.css'
import { Link } from "react-router-dom";
import Sidebar from "./transaction/sidebar";

export class dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
    
      id:''
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
      console.log(result)
      this.setState({
        id:result.id
    }) })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Customerheader />

        <div className="container" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col-lg-4 col-md-4 ">

              <Sidebar/>
            </div>
            <div
              className="col-lg-4 col-md-4  mt-5"
             
            >
              <div className="action mt-2" style={actionStyle}>
                
                <Link to={`/balance/${this.state.id}`}> <button className="site-btn sb-gradients btn btn-lg mt-5 "> <h4 style={{ color: '#f2f2f2' }}>Check Balance</h4> </button> </Link>
              </div>

              <div className="action mt-5" style={actionStyle}> <Link to={`/profile/${this.state.id}`}><button className="site-btn sb-gradients btn btn-lg mt-5 "> <h4 style={{ color: '#f2f2f2' }}>Customer Detail</h4> </button></Link>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-4  mt-5">
              <div className="action mt-2" style={actionStyle}>
                <Link to="/ctransfer"><button className="site-btn sb-gradients btn btn-lg mt-5 "> <h4 style={{ color: '#f2f2f2' }}> Transfer Money</h4> </button></Link>
              </div>

              <div className="action mt-5" style={actionStyle}>
                <Link to={`/viewtrans/${this.state.id}`}><button className="site-btn sb-gradients btn btn-lg mt-5 "> <h4 style={{ color: '#f2f2f2' }}>View Transactions</h4> </button></Link>
              </div>
            </div>
            {/* second colume */}
          </div>
        </div>
      </div>
    );
  }
}

const liStyle = {
  display: "block"
};
const actionStyle = {
  width: "250px",
  height: "150px",
  padding: "5px",
  backgroundColor: "#3f16af",
  borderRadius: "20%",
  textAlign:"center",

 
};
export default dashboard;
