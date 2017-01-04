import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import Todo from './Todo'
import List from './List'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <table className='table'>
        <thead>
          <tr>
            <td></td>
            <td className='header'>Tasks</td>
            <td></td>
          </tr>
        </thead>
        <List />
        </table>
        <div className="input-group col-lg-6">
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">Go!</button>
          </span>
          <input type="text" className="form-control" placeholder="What do you want to do?"></input>
        </div>
      </div>
    );
  }
}

export default App;
