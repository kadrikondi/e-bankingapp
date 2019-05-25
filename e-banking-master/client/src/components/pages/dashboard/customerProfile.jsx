import React, { Component } from 'react'
import Customerheader from './customerheader';
import Sidebar from './transaction/sidebar';
// import {Link} from 'react-router-dom'
 import user from '../../asset/img/member/1.jpg'
 import {getBalance} from '../../apidata/api'
export class customerProfile extends Component {
  constructor(){
    super()
    this.state = {
      user:""
    }
  }
  async componentDidMount(){
    const user = await getBalance(this.props.match.params.id)
    console.log(user)
    this.setState({user:user.info})
  }
  render() {
    return (
      <div>
        <Customerheader/>

        <div className="container">


            <div className="row">


                <div className="col-lg-4">

                    <Sidebar/>
                </div>


                <div className="col-lg-8">
              <div className="card mt-3 "  >

                {/* <!-- Card image --> */}
                <div className="view overlay" style={{ height: "200px" }}>
                  <img className="card-img-top circle " src={user} style={{width:'100%',height:'100%'}} alt='ok'/>
                  <a href=''>
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>


                {/* <!-- Card content --> */}
                <div className="card-body text-left">

                  {/* <!-- Title --> */}
                  <h4 className="card-title text-center ">{this.state.user.fname}</h4>
                  {/* <!-- Text --> */}
                 
                  <div className="card-text ">
                    <ul className="list-group">
                    <li className="list-group-item"><strong>Firstname:&nbsp;</strong>{this.state.user.fname}</li>
                    <li className="list-group-item"><strong>Lastname:&nbsp;</strong>{this.state.user.lname}</li>
                    <li className="list-group-item"><strong>Account Number:&nbsp;</strong>{this.state.user.acct_no}</li>
                      <li className="list-group-item"><strong>Email:&nbsp;</strong>{this.state.user.email}</li>
                      <li className="list-group-item"><strong>Phone:&nbsp;</strong>{this.state.user.phone}</li>
                      <li className="list-group-item"> <strong>Address:&nbsp;</strong>{this.state.user.address}</li>
                      <li className="list-group-item"> <strong>Date of Birth:&nbsp;</strong>{this.state.user.bdate}</li>
                      <li className="list-group-item"> <strong>City:&nbsp;</strong>{this.state.user.city}</li>
                      <li className="list-group m-2"> <strong>State:</strong> {this.state.user.state}</li>
                      <li className="list-group m-2"> <strong>Country:</strong> {this.state.user.country}</li>
                    </ul>
                  </div>
               
                </div>

              </div>
              {/* <!-- Card --> */}



                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default customerProfile
