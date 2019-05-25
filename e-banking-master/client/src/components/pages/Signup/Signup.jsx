import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {
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
      isLoading: false
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleDateOfBirth = this.handleDateOfBirth.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handlePassword1 = this.handlePassword1.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCountry = this.handleCountry.bind(this)
  }

  handleSubmit(e) {
    // this.state.fname.length < 1 ? alert('empty'): console.log('ok')
    //  let= {password,password1}= this.state
    // if (this.state.password !== this.state.password1) {
    //   this.setState({ info: `password not match`,isLoading: false });
    // }
    // else
    console.log("click")
    e.preventDefault()
    fetch("/create", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        phone: this.state.phone,
        bdate: this.state.bdate,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country:this.state.country,
        id_card:this.state.id_card
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.message);
        this.setState({ isLoading: false });

        if (res.message === "processing your account...") {
          this.props.history.push("/signin");
        } else {
          this.setState({ info: res.message });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });

    //console.log(this.state)
  };
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

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handlePassword1(e) {
    this.setState({ password1: e.target.value });
  }

  handleGender(e) {
    this.setState({ gender: e.target.value });
  }
  handleIdCard(e){
    this.setState({id_card:e.target.value})
  }

  render() {
    //     if(this.state.info===''){
    //         document.getElementById('info').style.display='none'
    //   }
    const noshowinfo = {
      display: "none"
    };

    return (
      <div>
        {/* <!--Form with header--> */}
        <div className="card mt-5" id="signup">
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-4">
              <h3>
                <i className="fa fa-user-plus" /> Customer Register
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

              <div className="form-group input-group">
                {/* <i className="fa fa-envelope prefix"></i> */}
                <label htmlFor="">National ID card no: &nbsp;</label>{" "}
                <input
                  type="text"
                  id="form2"
                  required="required"
                  className="form-control"
                  value={this.state.id_card}
                  onChange={this.handleIdCard.bind(this)}
                />
              </div>

              <div class="form-group input-group">
                <label htmlFor="">Gender:&nbsp;</label>
                <select
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.handleGender}
                >
                  <option>--Select Gender--</option>
                  <option>male</option>
                  <option>female</option>
                </select>
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

            <fieldset>
              <legend>Security Details</legend>
              <div className="form-group">
                {/* <i class="fa fa-lock prefix"></i> */}
                <label for="form4">
                  <span className="fa fa-lock" /> Password
                </label>
                <input
                  type="password"
                  id="form4"
                  required="required"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>

              <div className="form-group">
                {/* <i class="fa fa-lock prefix"></i> */}
                <label htmlFor="">Confirm password</label>{" "}
                <input
                  type="password"
                  required="required"
                  id="form10"
                  className="form-control"
                  name="password1"
                  value={this.state.password1}
                  onChange={this.handlePassword1}
                />
              </div>
            </fieldset>

            {this.state.info === "" || this.state.info === undefined ? (
              <div className="alert alert-danger" style={noshowinfo} id="info">
                ){this.state.info}
              </div>
            ) : (
              <div className="alert alert-danger" id="info">
                {this.state.info}
              </div>
            )}

            <div className="text-center">
              <button
                className="btn site-btn sb-gradients mdi mdi-account-plus" type="submit"
                onClick={this.handleSubmit.bind(this)}
              >
              
                &nbsp;Sign up
                <div style={{ margin: "auto", width: "50%" }}>
                  {this.state.isLoading === true ? (
                    <div className="loader" />
                  ) : null}
                </div>
              </button>
            </div>
            <p className="pt-3 text-right">
              {" "}
              Aready a Customer
              <Link to="/signin"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
