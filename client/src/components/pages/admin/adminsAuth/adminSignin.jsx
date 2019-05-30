import React, { Component } from "react";
import '../../../asset/css/loader.css'
// import "./Signin.css";

import { Link } from "react-router-dom";

class AdminSignin extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isLoading: false,
            info: ""
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ isLoading: true });
        fetch("/alogin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(res => {
                //console.log(res.message + `token ${res.token}`);
                //alert(res.message)
                this.setState({ isLoading: false });
                this.setState({ info: res.message });
                //console.log(this.state.info);
                if (res.success === true) {
                    //window.localStorage.setItem("userId", res.id);
                    window.localStorage.setItem("atoken", JSON.stringify(res.token));

                    //console.log(res.token);

                    this.props.history.push("/adash");
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ isLoading: false });
            });

        //console.log(this.state)
    };

    handleEmail(e) {
        this.setState({ email: e.target.value });
    }
    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
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

        return (
            <div className="mt-5" style={{ marginTop: "200px" }}>
                {/* /login */}

                {/* <!-- Material form login --> */}
                <div className="card mt-5" id="signin" >
                    <h3 className="card-header  dark-text text-center py-4 mt-5">
                        <strong className="mdi mdi-account-key"> admin Sign-in</strong>
                    </h3>

                    {/* <!--Card content--> */}
                    <div className="card-body px-lg-5 pt-0">
                        {/* <!-- Form --> */}
                        <div className="text-center" style={{ color: "#757575" }}>
                            {/* <!-- Email --> */}
                            <div className="input-group mt-5">
                                <label htmlFor="">Admin Mail</label>
                                <input
                                    type="email"
                                    id="materialLoginFormEmail"
                                    className="form-control"
                                    value={this.state.email}
                                    placeholder="enter your email address"
                                    onChange={this.handleEmail}
                                />
                            </div>

                            {/* <!-- Password --> */}
                            <div className="input-group mt-3">
                                <label htmlFor="">Password:&nbsp;</label>
                                <input
                                    type="password"
                                    id="materialLoginFormPassword"
                                    placeholder="enter password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </div>
                            {this.state.info === "" || this.state.info === undefined ? (
                                <p className="alert alert-warning" style={{ display: "none" }}>
                                    {this.state.info}
                                </p>
                            ) : (
                                    <p className="alert alert-danger">{this.state.info}</p>
                                )}

                            {/* <!-- Sign in button --> */}
                            
                                <button
                                    id="loginbtn"
                                    className="site-btn sb-gradients btn-block waves-effect z-depth-0 mt-5 "
                                    type="submit"
                                    onClick={this.handleSubmit}
                                >
                                    {" "}
                                    Sign in
                </button>
                           
                      

                          
                        </div>
                        {/* <!-- Form --> */}
                    </div>
                </div>
                {/* <!-- Material form login --> */}
            </div>
        );
    }
}

export default AdminSignin;
