import React, { Component } from "react";
import Adminheader from "./adminheader";
import Sidebar from "./adminsidebar";
import {Link} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

export class newcustomer extends Component {
  constructor(){
    super()
    this.state = {
      users:[],
      id:''
    }
  }
  componentDidMount(){
    fetch('/newusers', {
      headers:{
        "Accept":"application/json"
      }
    })
    .then( res => res.json())
    .then( res => {
      this.setState({users: res.info})
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate() {
    fetch('/newusers', {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ users: res.info })
        // console.log(res.info[0])
      })
      .catch(err => console.log(err))
  }
  
  async handleDelete(e){
    e.preventDefault()
    var id = document.getElementById('delete').value
    fetch('/del/user', {
      method:"DELETE",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        id:id
      })
    })
    .then(res => res.json())
    .then( res => {
      alert(res.message)
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Adminheader />

        <div className="containe">
          <div className="row">
            <div className="col-lg-2.5 ">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <table className=" mt-5 table table-striped table-bordered table-hover table-condensed">
                <tr>

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
                  <th>user photo</th>
                  <th>id photo</th>
                  <th>Nepa bill</th>
                  <th>signature</th>
                  <th>Confirm</th>


                  <th>Delete</th>


                </tr>
               
                {this.state.users.map((user, index) => {
                 return <tr key={index}>
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
                   <td className="ok"> <a href={user.photo}><img src={user.photo} alt="user_photo"
                     style={{
                       width: "100%",

                       borderRadius: "10px",

                     }} alt="" /></a></td>

                   <td className="mt-3"> <a href={user.id_photo}><img src={user.id_photo} alt="card_photo"
                     style={{
                       width: "100%",
                       height: "auto",

                       borderRadius: "10px",

                     }} alt="" /></a></td>


                   <td className="mt-3"> <a href={user.bill}><img src={user.bill} alt="bill_photo"
                     style={{
                       width: "100%",

                       borderRadius: "10px",

                     }} alt="" /></a></td>

                   <td className="mt-3"> <a href={user.signature}><img src={user.signature} alt="photo"
                     style={{
                       width: "100%",

                       borderRadius: "10px",

                     }} alt="" /></a></td>
                  
                  <td><Link to={`/create/acctno/${user._id}`}><button className="btn btn-success">confirm</button></Link></td>


                  <td><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Del</button></td>
                  <td><input type="hidden" id="delete" value={user._id}/></td>

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

export default newcustomer;
