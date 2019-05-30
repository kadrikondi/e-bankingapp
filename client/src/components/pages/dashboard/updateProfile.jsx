import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {getSingleUser} from '../../apidata/api'
import "../Signup/Signup.css"
import axios from 'axios'
import Customerheader from './customerheader';
import Sidebar from './transaction/sidebar';

export default class updateProfile extends Component {
    constructor() {
        super();
        this.state = {
          fname: "",
          lname: "",
          email: "",
          password: "",
          gender: "",
          password1: "",
          phone: "",
          bdate: "",
          city: "",
          address: "",
          state: "",
          country:'',
          info: "",
          id_card:'',
          isLoading: false,
          photo:""
        };
    
        this.handleEmail = this.handleEmail.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleDateOfBirth = this.handleDateOfBirth.bind(this);
        // this.handlePassword = this.handlePassword.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCountry = this.handleCountry.bind(this)
      }
      async componentDidMount(){
        const user = await getSingleUser(this.props.match.params.id)
        this.setState({fname:user.info.fname, lname:user.info.lname, phone:user.info.phone, city:user.info.city, country:user.info.country, state:user.info.state, address:user.info.address, email:user.info.email, bdate:user.info.bdate})
        console.log(user)
      }
    handleFirstName(e) {
        this.setState({ fname: e.target.value });
      }
      handleEmail(e) {
        this.setState({ email: e.target.value });
      }
      handleLastName(e) {
        this.setState({ lname: e.target.value });
      }
      handleState(e) {
        this.setState({ state: e.target.value });
      }
      handleCountry(e) {
        this.setState({ country: e.target.value });
      }
      handleAddress(e) {
        this.setState({ address: e.target.value });
      }
      handleCity(e) {
        this.setState({ city: e.target.value });
      }
      handleDateOfBirth(e) {
        this.setState({ bdate: e.target.value });
      }
      handlePhone(e) {
        this.setState({ phone: e.target.value });
      }
    
      updateProfile(id){
        this.setState({isLoading:true})
          fetch(`/edit/profile/${id}`, {
              method:'PUT',
              headers:{
                  "Accept":"appliication/json",
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  fname:this.state.fname,
                  lname:this.state.lname,
                  bdate:this.state.bdate,
                  email:this.state.email,
                  city:this.state.city,
                  country:this.state.country,
                  state:this.state.state,
                  address:this.state.address,
                  gender:this.state.gender
              })
          })
          .then(res => res.json())
          .then( res => {
            this.setState({isLoading:false})
              alert(res.message)
          })
          .catch(err => {
            console.log(err)
            this.setState({ isLoading: false })
          })
    
      }
      handleChange(e){
          e.preventDefault()
          this.updateProfile(this.props.match.params.id)
      }
  render() {
    return (
      <div>

        <Customerheader/>
        <div className="container">
          <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-4">
    <Sidebar/>
    </div>
         <div className="col-lg-9 col-md-8 col-sm-7">
        <div className="card mt-5" id="signup" >
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-4">
              <h3>
                <i className="fa fa-user-plus" /> Update Profile
              </h3>
            </div>

            {/* <!--Body--> */}
            <fieldset>
              <legend>Personal Information</legend>

              <div className=" form-group input-group mt-4">
                <label htmlFor="fname">First Name: &nbsp;</label>
                <input
                  type="text"
                  required="required"
                  className="form-control"
                  value={this.state.fname}
                  onChange={this.handleFirstName}
                />
              </div>

              <div className=" input-group form-group ">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">Last Name:</label>{" "}
                <input
                  type="text"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.lname}
                  onChange={this.handleLastName}
                />
              </div>

              <div className="  form-group  input-group">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">Phone No:</label>{" "}
                <input
                  type="text"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.handlePhone}
                />
              </div>

              <div className="form-group input-group">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">Email: &nbsp;</label>{" "}
                <input
                  type="email"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>


              <div className="form-group input-group ">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">Date of birth:</label>{" "}
                <input
                  type="date"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.bdate}
                  onChange={this.handleDateOfBirth}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Contact Information</legend>

              <div className="form-group input-group mt-3 ">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">Address:</label>{" "}
                <textarea
                  type="textarea"
                  id="form2"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.handleAddress}
                />
              </div>

              <div className="form-group input-group ">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">City:&nbsp; </label>{" "}
                <input
                  type="text"
                  required="required"
                  id="form2"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.handleCity}
                />
              </div>

              <div className="form-group input-group ">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">State:</label>{" "}
                <input
                  type="text"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.state}
                  onChange={this.handleState}
                />
              </div>

              <div className="form-group input-group ">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">Country:</label>{" "}
                <input
                  type="text"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.country}
                  onChange={this.handleCountry}
                />
              </div>
            </fieldset>

            

            

            <div className="text-center">
              <button
                className="btn site-btn sb-gradients mdi mdi-account-plus" type="submit"
                onClick={this.handleChange.bind(this)}
              >
              
                &nbsp;Update
                <div style={{ margin: "auto", color: 'white' }}>
                  {this.state.isLoading ? (
                    <div id="signuploading" >loading</div>
                  ) : (<div></div>)}
                </div>
              </button>
            </div>
            
          </div>
        </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
