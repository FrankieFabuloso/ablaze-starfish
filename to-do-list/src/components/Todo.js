import React from 'react';
import Button from './Button'
import Task from './Task'

class Todo extends React.Component {

  render () {
    const {todo, tasks, onTaskChange, onCompleteToggle, onDelete, movePriorityDown, movePriorityUp } = this.props
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

    let reorderButtons = null

    if( todo.id === tasks[0].id ){
      reorderButtons =
        <td>
        <Button icon={"glyphicon-arrow-down"} onClick={(e) => movePriorityDown(e, todo.id-1, tasks)}/>
        </td>
    } else if ( todo.id === tasks[tasks.length-1].id ) {
      reorderButtons =
      <td>
      <Button icon={"glyphicon-arrow-up"} onClick={ (e) => movePriorityUp(e, todo.id-1, tasks) }/>
      </td>
    } else {
      reorderButtons =
      <td>
      <Button icon={"glyphicon-arrow-up"} onClick={(e) => movePriorityUp(e, todo.id-1, tasks) }/>
      <br/>
      <Button icon={"glyphicon-arrow-down"} onClick={(e) => movePriorityDown(e, todo.id-1, tasks) }/>
      </td>
    }

    return (
            <tr id={id} className='table-row'>
            <td>
            <Button icon={"glyphicon-ok"} onClick={onCompleteToggle}/>
            </td>
              {taskIsStriked}
            {reorderButtons}
            <td>
              <Button icon={"glyphicon-remove"} onClick={onDelete}/>
            </td>
            </tr>
    )
  }
}

export default Todo;
