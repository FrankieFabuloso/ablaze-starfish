import React from 'react';
import Todo from './Todo'

class List extends React.Component{
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
    this.handleDeleteClick.bind(this)
  }

  handleDeleteClick(e, todo) {
    const newState = this.state.Tasks
    const todoIndex = newState.indexOf(todo)
    newState.splice(todoIndex,1)
    this.setState({
      Tasks: newState
    })
  }

  render() {
    const todos = this.state.Tasks
    return(
      <tbody>
        { todos.map((todo) =>
          <Todo key={todo.id} id={todo.id} value={todo.task} onClick={ (e) => this.handleDeleteClick(e, todo) } />
        )}
      </tbody>
    )
  }
}

export default List
