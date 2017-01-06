import React from 'react';
import Button from './Button'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isEditable: false}
    this.handleEditable = this.handleEditable.bind(this)
  }

  handleEditable() {
    this.setState({
      isEditable: !this.state.isEditable
    })
  }

  render () {
    const {id, completed, task} = this.props.todo
    const isEditable = this.state.isEditable
    const taskIsStriked = completed?
    <Task
    className={'completed'}
    value={task}
    handleEditable={(e) => this.handleEditable(e)}
    isEditable={isEditable}
    onTaskChange={this.props.onTaskChange} />
    :
    <Task
    className={'uncompleted'}
    value={task}
    handleEditable={(e) => this.handleEditable(e)}
    isEditable={isEditable} taskId={id}
    onTaskChange={this.props.onTaskChange} />

    return (
            <tr id={this.props.id}>
            <td>
            <Button onClick={this.props.onCompleteToggle} icon={"glyphicon-ok"}/>
            </td>
              {taskIsStriked}
            <td>
              <Button onClick={this.props.onDelete} icon={"glyphicon-remove"}/>
            </td>
            </tr>
    )
  }
}

const Task = (props) => {
  const isEditableView = props.isEditable?
  <span>
    <input
    className={`todo-item ${props.className}`}
    value={props.value}
    onChange={props.onTaskChange}>
    </input>
    <Button onClick={props.handleEditable} icon={"glyphicon-floppy-disk"}/>
  </span>:
  <div
  onClick={props.handleEditable}
  className={`todo-item ${props.className}`}
  onChange={props.onTaskChange}>
    {props.value}
  </div>
  return (
    <td>
    {isEditableView}
    </td>
  )
}


export default Todo;
