import React from 'react'
import Button from './Button'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditable: false,
      task: ''
    }
    this.handleEditSave = this.handleEditSave.bind(this)
    this.editTask = this.editTask.bind(this)
  }

  handleEditSave(e) {
    this.setState({
      isEditable: !this.state.isEditable
    })
    this.props.onTaskChange(this.state.task)
  }

  editTask(e) {
    const newState = this.props.tasks
    const todoIndex = this.props.tasks.indexOf(this.props.todo)
    newState[todoIndex]['task'] = e.target.value
    this.setState({
      task: newState[todoIndex]['task']
    })
  }

  render() {
    const {task} = this.props.todo
    const isEditableView = this.state.isEditable?
      <span>
        <input
          className={`todo-item ${this.props.className}`}
          type="text"
          value={task}
          onChange={(e) => this.editTask(e)}>
        </input>
        <Button
        onClick={(e) => this.handleEditSave(e)}
        icon={"glyphicon-floppy-disk"}
        />
      </span>
    :
      <div
        onClick={(e) => this.handleEditSave(e)}
        className={`todo-item ${this.props.className}`}
        >
        {task}
      </div>

    return (
      <td>
      {isEditableView}
      </td>
    )
  }

}
export default Task;
