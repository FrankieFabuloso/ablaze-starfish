import React from 'react';
import Button from './Button'
import Task from './Task'

class Todo extends React.Component {
  render () {
    const {todo, tasks, onTaskChange, onCompleteToggle, onDelete} = this.props
    const {id, completed} = todo
    const taskIsStriked = completed?
    <Task
      tasks={tasks}
      className={'completed'}
      todo={todo}
      onTaskChange={onTaskChange}
    />
    :
    <Task
      tasks={tasks}
      className={'uncompleted'}
      todo={todo}
      onTaskChange={onTaskChange}
    />

    return (
            <tr id={id}>
            <td>
            <Button onClick={onCompleteToggle} icon={"glyphicon-ok"}/>
            </td>
              {taskIsStriked}
            <td>
              <Button onClick={onDelete} icon={"glyphicon-remove"}/>
            </td>
            </tr>
    )
  }
}

export default Todo;
