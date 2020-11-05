import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import InvestorPortal from './pages/InvestorPortal'
import './App.css';
import Routes from './Routes';
import Login from "./components/Login/Login";




function App () {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="LayoutWrapper">
         <Routes />
      </div>
    </div>
  );
}

export default App;
