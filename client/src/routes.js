import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import LandingPage from './components/pages/landingpage';
import Signup from './components/pages/Signup/Signup';
import Dashboard from './components/pages/dashboard/dashboard'
import Signin from './components/pages/Signin/Signin';
import Transfer from './components/pages/dashboard/transaction/transfer';
import Checkbalance from './components/pages/dashboard/transaction/checkbalance';
import Viewtransaction from './components/pages/dashboard/transaction/viewtransaction';
import customerProfile from './components/pages/dashboard/customerProfile';
import Complain from './components/pages/dashboard/transaction/complain';
import Admindash from './components/pages/admin/admindash';
import Confirmtransfer from './components/pages/dashboard/transaction/confirmtransfer';

import Newcustomer from './components/pages/admin/newcustomer';
import Alltransaction from './components/pages/admin/alltransaction';
import Creditaccount from './components/pages/admin/creditaccount'
import Creditprocess from './components/pages/admin/creditprocess';
import Debitaccount from './components/pages/admin/debitaccount'
import Debitprocess from './components/pages/admin/debitprocess'
import Registeredcustomer from './components/pages/admin/registeredcustomer';
import Admincontrol from './components/pages/admin/admincontrol';
import AdminSignin from './components/pages/admin/adminsAuth/adminSignin';
import AdminSignup from './components/pages/admin/adminsAuth/adminSignup';
import CreateAcctNo from './components/pages/admin/createacctno'
import ChangePin from './components/pages/dashboard/transaction/changePin'
import AllComplains from './components/pages/admin/allcomplains'
import NewTransaction from './components/pages/admin/newtransaction'
import CompleteReg from './components/pages/Signup/completeReg'
import UpdateProfile from './components/pages/dashboard/updateProfile'
import withdrawalTransaction from './components/pages/admin/withdrawalTransaction'

export class routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/"  strict exact={true} component={LandingPage}/>
          <Route path="/withdrawal/transaction/:id"  strict exact={true} component={withdrawalTransaction}/>
          <Route path="/change/profile/:id"  strict exact={true} component={UpdateProfile}/>
          <Route path="/nextform/:id"  strict exact={true} component={CompleteReg}/>
          <Route path="/new/transaction/:id"  strict exact={true} component={NewTransaction}/>
          <Route path="/complains"  strict exact={true} component={AllComplains}/>
          <Route path="/changepin/:acct_no"  strict exact={true} component={ChangePin}/>
          <Route path="/signin" strict exact={true} component={Signin}/>
          <Route path="/signup" strict exact={true}  component={Signup}/> 
          <Route path="/cdash" strict exact={true}  component={Dashboard}/> 
          <Route path="/transfer" strict exact={true}  component={Transfer}/> 
          <Route path="/balance/:id" strict exact={true}  component={Checkbalance}/>
          <Route path="/viewtrans/:id" strict exact={true}  component={Viewtransaction}/>
          <Route path="/profile/:id" strict exact={true}  component={customerProfile}/>
          <Route path="/conplain" strict exact={true}  component={Complain}/>
          <Route path="/adash" strict exact={true}  component={Admindash}/>
          <Route path="/ctransfer" strict exact={true}  component={Confirmtransfer}/>
          <Route path="/create/acctno/:id"  strict exact={true} component={CreateAcctNo}/>
          <Route path="/asignin" strict exact={true}  component={AdminSignin}/>
          <Route path="/asignup" strict exact={true}  component={AdminSignup}/>
          <Route path="/adash" strict exact={true}  component={Admindash}/>
          <Route path="/newcus" strict exact={true}  component={Newcustomer}/>
          <Route path="/alltrans" strict exact={true}  component={Alltransaction}/>
          <Route path="/credit" strict exact={true}  component={Creditaccount}/>
          <Route path="/credit/process/:id" strict exact={true}  component={Creditprocess}/>
          <Route path="/debit" strict exact={true}  component={Debitaccount}/>
          <Route path="/debit/process/:id" strict exact={true}  component={Debitprocess}/>
           <Route path="/rcustomer" strict exact={true}  component={Registeredcustomer}/> 
           <Route path="/acontrol" strict exact={true}  component={Admincontrol}/>

        </Switch>
      </div>
    )
  }
}

export default routes
