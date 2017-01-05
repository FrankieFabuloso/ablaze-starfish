import React from 'react';
import Todo from './Todo'

class List extends React.Component{
  render() {
    const {todos, handleDeleteClick, onTaskChange} = this.props
    return(
      <tbody>
        { todos.map((todo) =>
          <Todo key={todo.id} id={todo.id} value={todo.task} onTaskChange={ (e) => onTaskChange(e, todo)} onClick={ (e) => handleDeleteClick(e, todo) } />
        )}
      </tbody>
    )
  }
}

export default List
