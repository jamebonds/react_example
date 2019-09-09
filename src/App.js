import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloApp from "./helloApp";
import MyStatelessComponent from "./MyStatelessComponent";

function App() {
  return (
    <div className="App">
      <HelloApp message="Send Component"/>
      <MyStatelessComponent title='Stateless' message='Example of Stateless'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
