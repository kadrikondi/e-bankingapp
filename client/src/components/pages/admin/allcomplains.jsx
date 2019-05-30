import React, { Component } from 'react'
import {getAllComplains } from '../../apidata/api'
import Adminheader from './adminheader'
import Sidebar from './adminsidebar';
import moment from 'moment'
//import Sidebar from "./sidebar";

export default class allcomplains extends Component {
    constructor(){
        super()
        this.state ={
            complains:[]
        }
    }
    async componentDidMount(){
        const complains = await getAllComplains()
        this.setState({complains:complains.infoo})

    }
    async componentDidUpdate(){
        const complains = await getAllComplains()
        this.setState({complains:complains.infoo})
    }
  render() {
    return (
      <div>
        <Adminheader />

        <div className="container">
           
            <div className="row">
              <div className="col-lg-4 col-md-4 ">
                <Sidebar/>
              </div>
              <div className="col-lg-8 col-md-8 mt-5 text-center">
              <h3>Recent Comment and complains</h3>
              {this.state.complains.map((complain, index) => {
                  return <div className="p-3 " key={index} style={{backgroundColor:"#f2f2f2"}}>
                    <div style={{backgroundColor:'white',borderRadius:'20px',padding:'3px'}}>
                  <p className=""><label className="mr-5">complain/enquiry=></label>{complain.text} </p>
                  <div class="entry-meta small muted">
                    <p>Phone Number: {complain.phone} </p>
                      <p>From <a href="#">{complain.from} </a></p> <span>On <a href="#">{moment(complain.date).format('DD/MM/YYYY')} </a></span>
                  </div>
                    </div>
                </div>
              })}
                

              </div>
            </div>
          </div>
      </div>
    )
  }
}
