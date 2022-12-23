import './App.css';
import React from 'react';
import 'boxicons';
import Nav from './components/nav';
import Toast from './components/toast'
import Card from './components/card';

function App() {
  return (
    <div>
      <Nav />
      <Toast />
      <div className="dishes">
        <h2>Possible Recipes</h2>
        <hr />
        <Card />
      </div>
    </div>
  );
}

export default App;
