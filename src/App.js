import './App.css';
import React from 'react';
import TopNav from './components/topnav/topnav';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/containers/Home';
import Cart from '../src/components/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
