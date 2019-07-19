import React, { Component } from 'react'
import Customerheader from './customerheader';
import Sidebar from './transaction/sidebar';
import {Link} from 'react-router-dom'
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


                <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">

                    <Sidebar/>
                </div>


                <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
              <div className="card mt-3 "  >

                {/* <!-- Card image --> */}
                <div className="view overlay" style={{ height: "40%" }}>
                  <img className="card-img-top circle " src={this.state.user.photo} style={{width:'20%',height:'50%'}} alt='ok'/>
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
                      <li className="list-group-item"> <strong>State:&nbsp;</strong>{this.state.user.state}</li>
                      <li className="list-group-item"> <strong>Country:&nbsp;</strong>{this.state.user.country}</li>
                      
                    </ul><br/>
                  </div>
                    <Link to={`/change/profile/${this.state.user._id}`}><button className="btn btn-primary">Update profile</button></Link>
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
