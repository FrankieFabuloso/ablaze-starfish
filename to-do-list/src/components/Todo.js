import React from 'react';
import Button from './Button'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isCompleted: false, isEditable: false}
    this.handleCompleteClick = this.handleCompleteClick.bind(this)
    this.handleEditable = this.handleEditable.bind(this)
  }

  handleEditable() {
    this.setState({
      isEditable: !this.state.isEditable
    })
  }

  handleCompleteClick() {
    this.setState({
      isCompleted: !this.state.isCompleted
    })
  }

  render () {
    const taskText = this.props.value
    const isEditable = this.state.isEditable
    const isCompleted = this.state.isCompleted
    ? <Task className={'completed'} value={taskText} handleEditable={(e) => this.handleCompleteClick} onTaskChange={this.props.onTaskChange}/> :
    <Task className={'uncompleted'} value={taskText} handleEditable={(e) => this.handleCompleteClick} isEditable={isEditable} taskId={this.props.id} onTaskChange={this.props.onTaskChange}/>

    return (
            <tr id={this.props.id}>
            <td>
            <Button onClick={(e) => this.handleCompleteClick(e)} icon={"glyphicon-ok"}/>
            </td>
              {isCompleted}
            <td>
              <Button onClick={this.props.onClick} icon={"glyphicon-remove"}/>
            </td>
            </tr>
    )
  }
}

const Task = (props) => {
  const isEditableView = props.isEditable?
  <input id="editableTask" type="text" className="form-control" value={props.value}></input>:
  <input onClick= {props.handleEditable} className={`todo-item ${props.className}`} value={props.value} onChange={props.onTaskChange}>
  </input>
  return (
    <td>
    {isEditableView}
    </td>
  )
}


export default Todo;
