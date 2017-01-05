import React from 'react';
import Button from './Button'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isCompleted: false}
    this.handleCompleteClick = this.handleCompleteClick.bind(this)
  }

  handleCompleteClick() {
    this.setState({
      isCompleted: !this.state.isCompleted
    })
  }

  render () {
    const taskText = this.props.value
    const isCompleted = this.state.isCompleted
    ? <Task className={'completed'} value = {taskText}/> :
    <Task className={'uncompleted'} value = {taskText} />

    return (
            <tr id={this.props.id}>
            <td>
            <Button onClick={(e) => this.handleCompleteClick(e)} icon={"glyphicon-ok"}/>
            </td>
              {isCompleted}
            <td>
              <Button icon={"glyphicon-remove"}/>
            </td>
            </tr>
    )
  }
}

const Task = (props) => {
  return (
    <td>
      <div className={`todo-item ${props.className}`}>
        {props.value}
      </div>
    </td>
  )
}


export default Todo;
