import './App.css';
import React from 'react';
import TopNav from './components/topnav/topnav';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/containers/Home';
import Cart from '../src/components/Cart';
import AdminPage from '../src/containers/AdminPage'
import Footer from '../src/components/footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <TopNav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={AdminPage}/>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
