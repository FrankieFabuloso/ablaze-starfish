import React from 'react';
// import logo from '../images/logo.svg';
import '../stylesheets/App.css';
import List from './List'
import Textbox from './Textbox'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Tasks : []
    }
    this.getAllTodos()
    this.handleCompleteClick = this.handleCompleteClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.onTaskChange = this.onTaskChange.bind(this)
  }

  getAllTodos() {
    fetch('http://localhost:5000',{
      method: 'get',
    }).then(response => {
      return response.json()
    })
    .then(results => {
      const initialTodos = results.results
      this.setState({
        Tasks: initialTodos
      })
    })
  }

  handleCompleteClick(e, todoId) {
    console.log(todoId)
    fetch(`http://localhost:5000/complete/${todoId}`,{
      method: 'put'
    })
    .then(() => this.getAllTodos())
  }

  handleDeleteClick(e, todoId) {
    fetch(`http://localhost:5000/${todoId}`,{
      method: 'delete',
    })
    .then(() => this.getAllTodos())
  }

  handleAddTodo(e, todo) {
    const taskObj = {'task' : todo}
    fetch('http://localhost:5000',{
      method: 'post',
      body: JSON.stringify(taskObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .then(() => this.getAllTodos())
  }

  onTaskChange(e, todo) {
    const newState = this.state.Tasks
    const todoIndex = this.state.Tasks.indexOf(todo)
    newState[todoIndex]['task'] = e.target.value
    this.setState({Tasks: newState})
  }


  render() {
    console.log(this.state.Tasks);
    return (
      <div className='App'>
        <div className='tasksContainer'>
          <table className='table'>
            <thead>
              <tr>
                <td></td>
                <td className='header'>Tasks</td>
                <td></td>
              </tr>
            </thead>
            <List
            onTaskChange={this.onTaskChange}
            handleDeleteClick={this.handleDeleteClick}
            handleCompleteClick={this.handleCompleteClick}
            todos={this.state.Tasks}/>
          </table>
          <Textbox handleAddTodo={this.handleAddTodo} />
        </div>
      </div>
    );
  }

}

export default App;
