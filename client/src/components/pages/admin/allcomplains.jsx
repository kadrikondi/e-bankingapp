import React, { Component } from 'react'
import {getAllComplains } from '../../apidata/api'
//import Customerheader from "../customerheader";
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
        {/* <Customerheader /> */}

        <div class="widget categories">
            <h3>Recent Comment and complains</h3>
            <div class="row">
              <div class="col-sm-12">
              {this.state.complains.map((complain, index) => {
                  return <div class="single_comments" key={index}>
                  <p>{complain.text} </p>
                  <div class="entry-meta small muted">
                    <span>Phone Number: {complain.phone} </span>
                    <span>From <a href="#">{complain.from} </a></span> <span>On <a href="#">{complain.date}</a></span>
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
