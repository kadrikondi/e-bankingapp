import React, { Component } from 'react'
import Adminheader from './adminheader';
import Adminsidebar from './adminsidebar'
import { getAllTransaction } from '../../apidata/api'
import moment from 'moment'

export class alltransaction extends Component {
    constructor(){
        super()
        this.state ={
            transactions:[]  
        }
        
    }
    async componentDidMount(){
        const transactions = await getAllTransaction()
        this.setState({transactions:transactions.info})
        console.log(transactions)
    }
  render() {
    return (
      <div>
        <Adminheader/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <Adminsidebar/>
                </div>
                <div className="col-lg-8">
                        <table className=" mt-5 table table-striped table-bordered table-hover table-condensed">
                            <tr>

                                <th>Account Name</th>
                                <th>Accoutn No</th>

                                <th>Amount (N)</th>
                                
                                <th>Sender Name</th>
                                <th>Phone</th>
                                <th>Date</th>
                                
                            </tr>
                            {this.state.transactions.map( (transaction, index) => {
                                return <tr key={index}>
                                <td>{transaction.acct_name}</td>
                                <td> {transaction.acct_no}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.sender}</td>
                                <td>{transaction.phone}</td>
                                <td>{moment(transaction.date).format('DD/MM/YYYY')}</td>
                                
                            </tr>
                            })}
                            

                        </table>


                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default alltransaction
