import React, { Component } from "react";
import Customerheader from "../customerheader";
import Sidebar from "./sidebar";
import {getTransaction} from '../../../apidata/api'
import moment from 'moment'

export class viewtransaction extends Component {
  constructor(){
    super()
    this.state ={
      transaction:[]
    }
  }
  async componentDidMount(){
    const transaction = await getTransaction(this.props.match.params.id)
    this.setState({transaction:transaction.transaction})
    console.log(transaction.transaction)
  }
  render() {
    return (
      <div>
        <Customerheader />
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Sidebar />
            </div>

            <div className="col-lg-8 col-md-8 col-sm-8 mt-5">
              <table className=" mt-5 table table-striped table-bordered table-hover table-condensed" style={{overflow:'scroll'}}>
                <tr>
                  <th>S/N</th>
                  
                  <th>From</th>
                  <th> Amount<del>&nbsp;(N)</del></th>
                
                  <th>To Recipient Account No</th>
                  <th>Date of transaction</th>
                </tr>

                {this.state.transaction.map((transaction, index) =>{
                 return <tr key={index}>
                  <td>{index+1}</td>
                  <td> {transaction.sender}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.recipient_acct}</td>
                  <td>{moment(transaction.date).format('DD/MM/YYYY')}</td>
                   
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

export default viewtransaction;
