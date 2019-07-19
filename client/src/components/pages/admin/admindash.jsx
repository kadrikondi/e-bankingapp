import React, { Component } from "react";
import Adminheader from "./adminheader";
import Adminsidebar from "./adminsidebar";
import { Link } from "react-router-dom";

export class admindash extends Component {
  render() {
    return (
      <div>
        <Adminheader />
        <div className="container">
                <p id="date"></p>
                <p id="time"></p> 
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <Adminsidebar />
            </div>

            <div className="col-lg-4 col-md-4 mt-5" >
              <div className="action mt-2" style={actionStyle}>
                <Link to="/newcus">
                  {" "}
                  <button className="site-btn sb-gradients btn btn-lg mt-3 ">
                    {" "}
                    <h4 style={{ color: "#f2f2f2" }}>New Customer</h4>{" "}
                  </button>{" "}
                </Link>
              </div>

              <div className="action mt-5" style={actionStyle}>
                {" "}
                <Link to="/credit">
                  <button className="site-btn sb-gradients btn btn-lg mt-3 ">
                    {" "}
                    <h4 style={{ color: "#f2f2f2" }}>Credit</h4>{" "}
                  </button>
                </Link>
              </div>

              <div className="action mt-5" style={actionStyle}>
                <Link to="/acontrol">
                  <button className="site-btn sb-gradients btn btn-lg mt-3 ">
                    {" "}
                    <h4 style={{ color: "#f2f2f2" }}>Admin Controls</h4>{" "}
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4  mt-5">
              <div className="action mt-2" style={actionStyle}>
                <Link to="/viewtrans">
                  <button className="site-btn sb-gradients btn btn-lg mt-3 ">
                    {" "}
                    <h4 style={{ color: "#f2f2f2" }}> All transactions</h4>{" "}
                  </button>
                </Link>
              </div>

              <div className="action mt-5" style={actionStyle}>
                <Link to="/debit">
                  <button className="site-btn sb-gradients btn btn-lg mt-3 ">
                    {" "}
                    <h4 style={{ color: "#f2f2f2" }}>Debit</h4>{" "}
                  </button>
                </Link>
              </div>
              <div className="action mt-5" style={actionStyle}>
                <Link to="/rcustomer">
                  <button className="site-btn sb-gradients btn btn-lg mt-3 ">
                    {" "}
                    <h4 style={{ color: "#f2f2f2" }}>
                      Registered Account
                    </h4>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const actionStyle = {
  width: "250px",
  height: "110px",
  padding: "0px",
  backgroundColor: "#3f16af",
  borderRadius: "20%",
  textAlign: "center"
};




// window.onload = setInterval(clock, 1000);

// function clock() {
//     var d = new Date();

//     var date = d.getDate();

//     var month = d.getMonth();
//     var montharr = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     month = montharr[month];

//     var year = d.getFullYear();

//     var day = d.getDay();
//     var dayarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     day = dayarr[day];

//     var hour = d.getHours();
//     var min = d.getMinutes();
//     var sec = d.getSeconds();

//     document.getElementById("date").innerHTML = day + " " + date + " " + month + " " + year;
//     document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
// }
export default admindash;
