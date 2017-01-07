import React from 'react';

class Textbox extends React.Component{

  submitAndClear(text, submitFunc ) {
    document.getElementById('newTask').value = ''
  }

  render() {
    const {handleAddTodo} = this.props
    return (
    <div className="input-group col-lg-6">
      <span className="input-group-btn">
        <button
        className="btn btn-secondary"
        type="button"
        onClick={(e) => handleAddTodo(e, document.getElementById('newTask').value)}>Go!</button>
      </span>
      <input id="newTask" type="text" className="form-control" placeholder="What do you want to do?"></input>
    </div>
    )
  }
}

export default Textbox
