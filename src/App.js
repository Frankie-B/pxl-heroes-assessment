import React from 'react';
import {Route} from "react-router-dom";
import Default from './layouts/Default'
import Home from './pages/Home';
import Beers from './pages/Beers'
import './App.css';



function App() {
  return (
    <div className="App">
      <Default>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers}/>
      </Default>
    </div>
  );
}

export default App;
