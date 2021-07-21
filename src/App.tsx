import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const testTwitter = () => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/twitter/',
      data: {
        product_name: 'macbook air',
        days: 1
      },
      timeout: 300000
    })
      .then(function (response) { console.log(response.data) })
      .catch(function (error) { console.log(error) });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload (by yassine cheffai)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={ testTwitter }>Test Twitter</button>
      </header>
    </div>
  );
}

export default App;
