import React, { Component } from "react";
import Adminheader from "./adminheader";
import Sidebar from "./adminsidebar";
import { getRegistered } from '../../apidata/api'
import moment from 'moment'
import {Link} from "react-router-dom"

export class registeredcustomer extends Component {
  constructor(){
    super()
    this.state = {
      users:[]
    }
  }
  async componentDidMount(){
    const users = await getRegistered()
    this.setState({users:users.info})
    console.log(users)
  }
  render() {
    return (
      <div>
        <Adminheader style={{width:"100%"}}/>

        <div className ="container">
          <div className="row">
            <div className="col-lg-2.5 col-md-2.2">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-9">
              <table className=" mt-5 table table-striped table-bordered table-hover table-condensed">
                <tr>
                  <th>S/N</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                   <th>Acct_No</th>
                  <th> Phone no</th>
                  <th>Email</th>
                  <th>IDcard No</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Address</th>
                  <th>city</th>
                  <th>State</th>
                  <th>user photo</th>
                  <th>id photo</th>
                  <th>Nepa bill</th>
                  <th>signature</th>
               
                  
                </tr>
                {this.state.users.map( (user, index) => {
                  return <tr>
                  <td>{index+1}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.acct_no}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.id_card}</td>
                  <td>{user.gender}</td>
                  <td>{moment(user.bdate).format('DD/MM/YYYY')}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                    <td className="ok"> <a href={user.photo}><img src={user.photo} alt="photo"
                      style={{
                        width: "100%",

                        borderRadius: "10px",

                      }} alt="" /></a></td>

                    <td className="mt-3"> <a href={user.id_photo}><img src={user.id_photo} alt="photo"
                      style={{
                        width: "100%",
                        height:"auto",

                        borderRadius: "10px",

                      }} alt="" /></a></td>


                    <td className="mt-3"> <a href={user.bill}><img src={user.bill} alt="photo"
                      style={{
                        width: "100%",

                        borderRadius: "10px",

                      }} alt="" /></a></td>

                    <td className="mt-3"> <a href={user.signature}><img src={user.signature} alt="photo"
                      style={{
                        width: "100%",

                        borderRadius: "10px",

                      }} alt="" /></a></td>
                
                </tr>
                })}
                
                
                {/* <tr><th>user photo</th>
                  <th>id photo</th>
                  <th>Nepa bill</th>
                  <th>signature</th>
                  </tr>
                {this.state.users.map((user, index) => {
                  return <tr key={index}>

                    <td className="ok"><img src={user.photo} alt="photo"
                      style={{
                        width: "100%",
                  
                        borderRadius: "10px",

                      }} alt="" /></td>

                    <td className="mt-3"><img src={user.id_photo} alt="photo"
                      style={{
                        width: "100%",
                       
                        borderRadius: "10px",

                      }} alt="" /></td>
                    <td className="mt-3"><img src={user.bill} alt="bill"
                      style={{
                        width: "100%",

                        borderRadius: "10px",

                      }} alt="" /></td>




                    <td className="mt-3"><img src={user.signature} alt="photo"
                      style={{
                        width: "100%",
                 
                        borderRadius: "10px",

                      }} alt="" /></td>
                  </tr>
                })} */}

              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default registeredcustomer;
