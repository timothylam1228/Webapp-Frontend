import './App.css';
import React from 'react';

import TopNav from './components/topnav/topnav';
import Route from './containers/Routes';
function App() {
  return (
    <div>
    <TopNav />
    <Route />
    </div>
  );
}

export default App;
