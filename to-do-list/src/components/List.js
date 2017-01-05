import React from 'react';
import Todo from './Todo'

class List extends React.Component{
  render() {
    const {todos, handleDeleteClick} = this.props
    return(
      <tbody>
        { todos.map((todo) =>
          <Todo key={todo.id} id={todo.id} value={todo.task} onClick={ (e) => handleDeleteClick(e, todo) } />
        )}
      </tbody>
    )
  }
}

export default List
