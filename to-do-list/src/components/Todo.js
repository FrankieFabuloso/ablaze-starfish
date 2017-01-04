import React from 'react';
import Button from './Button'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isCompleted: false}
  }

handleCompleteClick() {
  this.setState({isCompleted: true})
}

  render () {
    const isCompleted = this.state.isCompleted
    const taskText = this.props.value
    let todo = null
    if (isCompleted) {
      todo = <CompletedTask value={taskText} />
    } else {
      todo = <UncompletedTask value={taskText}/>
    }
    return (

            <tr id={this.props.id}>
              <Button icon={"glyphicon-ok"}/>
              {todo}
              <Button icon={"glyphicon-remove"}/>
            </tr>
    )
  }

}

const CompletedTask = (props) => {
  return (
    <td>
      <div className='todo-item completed'>
        {props.value}
      </div>
    </td>
  )
}

const UncompletedTask = (props) => {
  return (
    <td>
      <div className='todo-item uncompleted'>
        {props.value}
      </div>
    </td>
  )
}

export default Todo;
