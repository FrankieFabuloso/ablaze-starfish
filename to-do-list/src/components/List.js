import React from 'react';
import Todo from './Todo'

// temporary static data
const tasks = [
  {id:1, task: "Dance a lot"},
  {id:2, task: "Run a mile"},
  {id:3, task: "Drink some soda"},
  {id:4, task: "Task #4"},
  {id:5, task: "Computers"},
  {id:6, task: "Code"}
]

const TodoList = (props) => {
  const todos = props.tasks
  return (
    <tbody>
      { todos.map((todo) =>
        <Todo id={todo.id} value={todo.task} />
      )}
    </tbody>
  );
}

class List extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <TodoList tasks={tasks} />
    )
  }
}

export default List
