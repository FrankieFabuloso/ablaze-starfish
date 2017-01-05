import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import List from './List'
import Textbox from './Textbox'

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
        <Textbox />
      </div>
    );
  }
}

export default App;
