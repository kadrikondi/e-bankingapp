import React, { Component } from "react";
import Customerheader from "../customerheader";
import Sidebar from "./sidebar";
import {getTransaction} from '../../../apidata/api'

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
            <div className="col-lg-4">
              <Sidebar />
            </div>

            <div className="col-lg-8 mt-5">
              <table className=" mt-5 table table-striped table-bordered table-hover table-condensed">
                <tr>
                  <th>S/N</th>
                  
                  <th>From Account Number</th>
                  <th> Amount<del>&nbsp;(N)</del></th>
                
                  <th>To Recipient Account No</th>
                  <th> Recipient Name</th>
                  <th>Date of transaction</th>
                  <th>Balance<del>&nbsp;(N)</del></th>
                </tr>

                {this.state.transaction.map((transaction, index) =>{
                 return <tr key={index}>
                  <td>{index+1}</td>
                  <td> {transaction.sender}</td>
                  <td>{transaction.amount}</td>
                  <td>999999999</td>
                  <td>idris </td>
                  <td>{transaction.date}</td>
                  <td>45000</td>
                   
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
