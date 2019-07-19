import React, { Component } from 'react'
import axios from 'axios'
import './Signup.css'
export default class completeReg extends Component {
    constructor() {
        super();
        this.state = {
          info: "",
          id_photo:'',
          isLoading: false,
          bill:"",
          signature:''
        };
    }
    
    componentDidMount(){
        document.getElementById('formi2').style.display = 'none'
        document.getElementById('formi3').style.display = 'none'
    }
    idCard(id){
      // this.setState({isLoading: false })
      console.log(this.state.isLoading +'isload')
        const formdata = new FormData();
        formdata.append('id_photo', this.state.id_photo)

          axios.put(`/idcard/${id}`, formdata)
          .then( res => {
            this.setState({ isLoading: false });
            if (res.data.message === "Success: id card uploaded successfully") {
              this.setState({ info: res.data.message });
                document.getElementById('formi2').style.display = 'block'
            } else {
              this.setState({ info: res.data.message });
              this.setState({ isLoading: false })
              console.log(this.state.isLoading + 'isload1')
              // alert(res.data.message)
            }
          })
          .catch( err => console.log(err))
      this.setState({ isLoading: false })
      console.log(this.state.isLoading + 'isloadeee')
    }
    nepaBill(id){
        const formdata = new FormData();
        formdata.append('bill', this.state.bill)

          axios.put(`/bill/${id}`, formdata)
          .then( res => {
            this.setState({ isLoading: false });

            if (res.data.message === "Success: Nepa bill uploaded successfully") {
              this.setState({ info: res.data.message });

                document.getElementById('formi3').style.display = 'block'
            } else {
              this.setState({ info: res.data.message });
              this.setState({ isLoading: false });
            }
          })
          .catch( err => console.log(err))
      this.setState({ isLoading: false });
    }
    signature(id){
        const formdata = new FormData();
        formdata.append('signature', this.state.signature)

          axios.put(`/signature/${id}`, formdata)
          .then( res => {
            this.setState({ isLoading: false });
            if (res.data.message === "Success: Signature uploaded successfully") {
              // this.setState({ info: res.data.message });
              alert(res.data.alert)

                this.props.history.push("/signin");
            } else {
              this.setState({ info: res.data.message });
              this.setState({ isLoading: false });
            }
          })
          .catch( err => console.log(err))
      this.setState({ isLoading: false });
    }
    handleForm1(e){
        e.preventDefault()
        this.idCard(this.props.match.params.id)
      this.setState({ isLoading: true })
    }
    handleForm2(e){
        e.preventDefault()
        this.nepaBill(this.props.match.params.id)
      this.setState({ isLoading: true });
    }
    handleForm3(e){
        e.preventDefault()
        this.signature(this.props.match.params.id)
      this.setState({ isLoading: true });
    }
    handleSignature(e){
        this.setState({signature:e.target.files[0]})
    }
    handleBill(e){
        this.setState({bill:e.target.files[0]})
    }
    handleCard(e){
        this.setState({id_photo:e.target.files[0]})
    }
  render() {
    const noshowinfo = {
        display: "none"
      }
    //    function hideID() {
        
    //   // document.getElementById(formId).style.display="none"
    // }
    // const HideId=  document.getElementById(formId).style.display="none";
    return (
      <div>
        
        <div id="formi1">
        <div className="card mt-5" id="signup" >
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-4">
              <h3>
                <i className="fa fa-user-plus" /> Customer Registration
              </h3>
            </div>

            {/* <!--ID card form--> */}
            <fieldset>
              <legend>Form 001 Upload ID Card</legend>

              <div className="form-group" >
                <label htmlFor="">Upload your ID card </label>{" "}
                <input
                  type="file"
                  required="required"
                  id="form10"
                  className="form-control "
                  //name="password1"
                  onChange={this.handleCard.bind(this)}
                />
              </div>
            </fieldset>

              {this.state.info === "" || this.state.info === undefined || this.state.info === "Success: id card uploaded successfully" || this.state.info === "Success: Nepa bill uploaded successfully" || this.state.info === "Success: Signature uploaded successfully"  ? (
              <div className="alert alert-danger" style={noshowinfo} id="info">
                ){this.state.info}
                

              </div>
            ) : (
              <div className="alert alert-danger" id="info">
                {this.state.info}
                             </div>
            )}
                
              {this.state.info === "Success: id card uploaded successfully"? (
                <div className="alert alert-success">{this.state.info} { document.getElementById("formi1").style.display='none'}  </div>
                        
                    
              ):null}
            <div className="text-center">
              <button
                className="btn site-btn sb-gradients mdi mdi-account-plus" type="submit"
                onClick={this.handleForm1.bind(this)}
              >
              
                &nbsp;Proceed
                <div style={{ margin: "auto",color:'white' }}>
                  {this.state.isLoading  ? (
                    <div id="signuploading" >loading</div>
                  ) : (<div></div>)}
                </div>
              </button>
            </div>
            
          </div>
        </div>
        </div>
                    {/* Nepa bill form */}
        <div id="formi2">
        <div className="card mt-5 formi2" id="signup" >
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-4">
              <h3>
                <i className="fa fa-user-plus" /> Customer Registration
              </h3>
            </div>

            {/* <!--ID card form--> */}
            <fieldset>
              <legend>Form 002 Upload Current Nepa Bill</legend>

              <div className="form-group">
                <label htmlFor="">Upload your Nepa Bill </label>{" "}
                <input
                  type="file"
                  required="required"
                  id="form10"
                  className="form-control"
                  onChange={this.handleBill.bind(this)}
                />
              </div>
            </fieldset>


              {this.state.info === "" || this.state.info === undefined || this.state.info === "Success: Nepa bill uploaded successfully" || this.state.info === "Success: id card uploaded successfully" || this.state.info === "Success: Signature uploaded successfully"? (
                <div className="alert alert-danger" style={noshowinfo} id="info">
                  ){this.state.info}
                  
                </div>
              ) : (
                  <div className="alert alert-danger" id="info">
                    {this.state.info}
                  </div>
                )}

              {this.state.info === "Success: Nepa bill uploaded successfully" ? (
                <div className="alert alert-success">{this.state.info} { document.getElementById("formi2").style.display='none'} </div>
              ) : null}
            <div className="text-center">
              <button
                className="btn site-btn sb-gradients mdi mdi-account-plus" type="submit"
                onClick={this.handleForm2.bind(this)}
              >
              
                &nbsp;Proceed
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
                    {/* Signature form */}
        <div id="formi3">
        <div className="card mt-5" id="signup" >
          <div className="card-body">
            {/* <!--Header--> */}
            <div className="card-header black-text text-center py-4">
              <h3>
                <i className="fa fa-user-plus" /> Customer Registration
              </h3>
            </div>

            {/* <!--ID card form--> */}
            <fieldset>
              <legend>Form 003 Signature form</legend>

              <div className="form-group">
                <label htmlFor="">Upload your Signature </label>{" "}
                <input
                  type="file"
                  required="required"
                  id="form10"
                  className="form-control"
                  //name="password1"
                  onChange={this.handleSignature.bind(this)}
                />
              </div>
            </fieldset>

              {this.state.info === "" || this.state.info === undefined || this.state.info === "Success: Signature uploaded successfully" 
                || this.state.info === "Success: Nepa bill uploaded successfully" || this.state.info === "Success: id card uploaded successfully"? (
                <div className="alert alert-danger" style={noshowinfo} id="info">
                  ){this.state.info}
                </div>
              ) : (
                  <div className="alert alert-danger" id="info">
                    {this.state.info}
                  </div>
                )}

              {this.state.info === "Success: Signature uploaded successfully" ? (
                <div className="alert alert-success">{this.state.info}</div>
              ) : null}

            <div className="text-center">
              <button
                className="btn site-btn sb-gradients mdi mdi-account-plus" type="submit"
                onClick={this.handleForm3.bind(this)}
              >
              
                &nbsp;Submit
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
    )
  }
}
