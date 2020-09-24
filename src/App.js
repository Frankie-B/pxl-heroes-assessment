import React from 'react';
import {Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Default from './layouts/Default'
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Default>
        <Route exact path='/' component={Home}/>
      </Default>
    </div>
  );
}

export default App;
