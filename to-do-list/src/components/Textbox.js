import React from 'react';
class Textbox extends React.Component{

  submitAndClear(e, task) {
    document.getElementById('newTask').value = ''
    this.props.handleAddTodo(e, task)
  }

  render() {
    return (
      <div className="input-group col-lg-6">
        <span className="input-group-btn">
          <button
          className="btn btn-secondary"
          type="button"
          onClick={(e) => this.submitAndClear(e, document.getElementById('newTask').value)}>
          <span className="glyphicon glyphicon-plus"></span>
          </button>
        </span>
        <input id="newTask" type="text" className="form-control" placeholder="What do you want to do?"></input>
      </div>
    )
  }
}

export default Textbox
