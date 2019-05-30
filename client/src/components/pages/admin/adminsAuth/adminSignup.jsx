import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Adminheader from "../adminheader";
import Adminsidebar from "../adminsidebar"

class AdminSignup extends Component {
    constructor() {
        super();
        this.state = {
            adminname: "",
            
            email: "",
            password: "",
            gender:"",
            sname:'',
            lname:'',
            info: "",
            isLoading: false
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleAdminName = this.handleAdminName.bind(this);

        this.handleSname = this.handleSname.bind(this);

        this.handlePassword = this.handlePassword.bind(this);

        //this.handlePassword1 = this.handlePassword1.bind(this);

    }

    handleSubmit = () => {
        // this.state.fname.length < 1 ? alert('empty'): console.log('ok')
        //  let= {password,password1}= this.state
        // if (this.state.password !== this.state.password1) {
        //     this.setState({ info: `password not match` });
        // }

        // if (this.state.info === `password not match`) {
        //     this.setState({ isLoading: false });
        // } else {
        //     this.setState({ isLoading: true });
        // }
        this.setState({isLoading:true})

        fetch("/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                lname: this.state.lname,
                
                email: this.state.email,
                sname:this.state.sname,
                password: this.state.password,
                
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.message);
                this.setState({ isLoading: false });

                if (res.message === "successful") {
                    this.props.history.push("/asignin");
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
    handleAdminName(e) {
        this.setState({ lname: e.target.value });
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
    }
    
   
    handlePassword(e) {
        this.setState({ password: e.target.value });
    }
    

    handleSname(e) {
        this.setState({ sname: e.target.value });
    }

    render() {
        //     if(this.state.info===''){
        //         document.getElementById('info').style.display='none'
        //   }
        if (this.state.isLoading) {
            return (
                <div>
                    {/* <!-- Page Preloder --> */}
                    <div id="preloderr">
                        <div className="loaderr" />
                    </div>
                </div>
            );
        }
        const noshowinfo = {
            display: "none"
        };

        return (
            <div>
                <Adminheader/>

                <div className="container">

                    <div className="row">

                    <div className="col-lg-10">
                {/* <!--Form with header--> */}
                <div className="card mt-5" id="signup">
                    <div className="card-body">
                        {/* <!--Header--> */}
                        <div className="card-header black-text text-center py-4">
                            <h3>
                                <i className="fa fa-user-plus" /> Admin Register
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
                                    value={this.state.sname}
                                    onChange={this.handleSname}
                                />
                            </div>
                            <div className=" form-group input-group mt-4">
                                <label htmlFor="fname">Last Name: &nbsp;</label>
                                <input
                                    type="text"
                                    required="required"
                                    className="form-control"
                                    value={this.state.lname}
                                    onChange={this.handleAdminName}
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
                                className="btn site-btn sb-gradients mdi mdi-account-plus"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                &nbsp;Sign up
                <div style={{ margin: "auto", width: "50%" }}>
                                    {this.state.isLoading === true ? (
                                        <div className="loader" />
                                    ) : null}
                                </div>
                                    </button>
                                        <p className="">
                                            {" "}
                                            <br />
                                            Already admin &nbsp;<Link to="/asignin"> Signin</Link>
                                        </p>
                        </div>

                    
                    </div>
                </div>
                        </div>
                       {/* signup */}



                    </div>
                    {/* row */}
                </div> 
                {/* container */}
            </div>
        );
    }
}

export default AdminSignup;
