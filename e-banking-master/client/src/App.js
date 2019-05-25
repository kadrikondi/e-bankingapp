import React from 'react';
import './components/asset/css/bootstrap.min.css'
import './components/asset/css/animate.css'
import './components/asset/css/themify-icons.css'
import './components/asset/css/owl.carousel.css'
import './components/asset/css/font-awesome.min.css'
import './components/asset/css/style.css'
// import './components/asset/js/jquery-3.2.1.min'
// import './components/asset/js/main'
// import './components/asset/js/owl.carousel.min'
import Header from './components/layout/header/header'
import './App.css';
import Footer from './components/layout/footer/footer'
import {Route} from 'react-router-dom'
import Router from './routes'


function App() {
  return ( 
    <div className = "App" >
    <Route component={Header}/>
     <Route component={Router}/>
      <Route component={Footer}/>
     
    
    </div>

  );
}

export default App;