import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm.js'
require('dotenv').config()
const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY

class App extends Component {
  constructor() {
    super()

    this.state = {
      search_term: '',
      city: null
    }
  }


  handleOnSubmit = (event) => {
    event.preventDefault();
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`)
      .then(response => {
        return response.json();
    }).then(data => {
      this.setState({
        city: data
      });
    });
  }

  handleOnChange = (event) => {
    this.setState = {
      search_term: event.target.value
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchForm
          handleOnSubmit={this.handleOnSubmit}
          search_term={this.state.search_term}
          handleOnChange={this.handleOnChange}/>
      </div>
    );
  }
}

export default App;
