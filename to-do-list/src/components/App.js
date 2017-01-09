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
    this.movePriorityUp = this.movePriorityUp.bind(this)
    this.movePriorityDown = this.movePriorityDown.bind(this)
  }
  // initial fetch to retrive stored Todos from DB.
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

  // - - - API comunication methods - - -
  handleCompleteClick(e, todoId) {
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

  handleAddTodo(e, task) {
    const taskObj = {'task' : task}
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


  movePriorityUp(e, todo) {
    const todoIndex = this.state.Tasks.indexOf(todo)
    const swapper =  this.state.Tasks[todoIndex-1]
    const lowTodoParams = [swapper.id, todo.priority]
    const highTodoParams = [todo.id, swapper.priority]

    const bodyObj = {
      'lowTodoParams' : lowTodoParams,
      'highTodoParams' : highTodoParams
    }
    fetch('http://localhost:5000/priority', {
      method: 'put',
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .then( () => this.getAllTodos() )
  }

  movePriorityDown(e, todo) {
    const todoIndex = this.state.Tasks.indexOf(todo)
    const swapper =  this.state.Tasks[todoIndex+1]
    const highTodoParams = [swapper.id, todo.priority]
    const lowTodoParams = [todo.id, swapper.priority]

    const bodyObj = {
      'lowTodoParams' : lowTodoParams,
      'highTodoParams' : highTodoParams
    }
    fetch('http://localhost:5000/priority', {
      method: 'put',
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .then( () => this.getAllTodos() )
  }

  onTaskChange(e, todo) {
    const {id, task} = todo
    const taskObj = {'task': task}
    fetch(`http://localhost:5000/${id}`, {
      method: 'put',
      body: JSON.stringify(taskObj),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .then(() => this.getAllTodos())
  }


  render() {
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
            movePriorityUp={this.movePriorityUp}
            movePriorityDown={this.movePriorityDown}
            todos={this.state.Tasks}/>
          </table>
          <Textbox handleAddTodo={this.handleAddTodo} />
        </div>
      </div>
    );
  }

}

export default App;
