import './App.css';
import React from 'react';

import TopNav from './components/topnav/topnav';
import Route from './containers/Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './components/reducers/cartReducer';


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
    <div>
    <TopNav />
    <Route />
    <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
