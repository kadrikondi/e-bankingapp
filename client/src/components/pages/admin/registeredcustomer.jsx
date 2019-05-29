import React, { Component } from "react";
import Adminheader from "./adminheader";
import Sidebar from "./adminsidebar";
import { getRegistered } from '../../apidata/api'
import moment from 'moment'

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
        <Adminheader />

        <div className ="containe">
          <div className="row">
            <div className="col-lg-2.5">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <table className=" mt-5 table table-striped table-bordered table-hover table-condensed">
                <tr>
                  <th>S/N</th>
                  <th>FirstName</th>
                  <th>LastName</th>

                  <th> Phone no</th>
                  <th>Email</th>
                  <th>IDcard No</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Address</th>
                  <th>city</th>
                  <th>State</th>
                  <th>pass</th>
                  
                </tr>
                {this.state.users.map( (user, index) => {
                  return <tr>
                  <td>{index+1}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.id_card}</td>
                  <td>{user.gender}</td>
                  <td>{moment(user.bdate).format('DD/MM/YYYY')}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td><button className="btn btn-success">modify</button></td>
                </tr>
                })}
                
                
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default registeredcustomer;
