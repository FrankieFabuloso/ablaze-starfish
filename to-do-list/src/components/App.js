import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import List from './List'
import Textbox from './Textbox'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Tasks : [
        {id:1, task: "Dance a lot"},
        {id:2, task: "Run a mile"},
        {id:3, task: "Drink some soda"},
        {id:4, task: "Task #4"},
        {id:5, task: "Computers"}
      ]
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleDeleteClick(e, todo) {
    const newState = this.state.Tasks
    const todoIndex = newState.indexOf(todo)
    newState.splice(todoIndex,1)
    this.setState({
      Tasks: newState
    })
  }

  handleAddTodo(e, todo) {
    let newTodo = {id:this.state.Tasks.length+1, task: todo}
    const newState = this.state.Tasks
    newState.push(newTodo)
    this.setState({
      Tasks: newState
    })
  }

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
          <List handleDeleteClick={this.handleDeleteClick} todos={this.state.Tasks}/>
        </table>
        <Textbox handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }

}

export default App;
