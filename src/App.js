import './App.css';
import React from 'react';
import TopNav from './components/topnav/topnav';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './components/reducers/cartReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../src/containers/Home';
import Cart from '../src/components/Cart';


function App() {
  const [data, setData] = React.useState(null);
  const store = createStore(cartReducer);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((res) => setData(res.message));
  // }, []);


  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js


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
