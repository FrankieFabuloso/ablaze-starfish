import React from 'react';
import Todo from './Todo'

class List extends React.Component{
  render() {
    const {todos, handleDeleteClick, onTaskChange, handleCompleteClick} = this.props
    console.log(handleCompleteClick);
    return(
      <tbody>
        { todos.map((todo) =>
          <Todo
          key={todo.id}
          id={todo.id}
          value={todo.task}
          todo={todo}
          onTaskChange={ (e) => onTaskChange(e, todo) }
          onDelete={ (e) => handleDeleteClick(e, todo.id) }
          onCompleteToggle={ (e) => handleCompleteClick(e, todo.id) }
          />
        )}
      </tbody>
    )
  }
}

export default List
