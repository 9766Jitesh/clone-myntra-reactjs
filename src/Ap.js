
import './App.css'
import Navbar from './Navbar/Nbar.jsx';
import List from './component/List/List';
import React from 'react';
//import Cart from './components/Cart/Cart'
//import { Navbar } from './Navbar/Nabar.jsx';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
  
   
        <div className="body-container">
          <List  style={{margin:10}}/>
          </div>
    </div>
  );
}

export default App;
