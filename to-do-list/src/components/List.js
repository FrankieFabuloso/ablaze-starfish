import React from 'react';
import Todo from './Todo'

class List extends React.Component{
  render() {
    const {todos, handleDeleteClick, onTaskChange, handleCompleteClick} = this.props
    return(
      <tbody>
        { todos.map((todo) =>
          <Todo
          key={todo.id}
          id={todo.id}
          value={todo.task}
          todo={todo}
          tasks={this.props.todos}
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
