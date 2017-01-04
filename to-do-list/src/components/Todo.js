import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
            <tr>
              <td scope="row">
                <button className='complete-button glyphicon glyphicon-ok'>
                </button>
              </td>
              <td>
                <div className='todo-item'>
                  {this.props.value}
                </div>
              </td>
              <td>
                <button className='delete-button complete-button glyphicon glyphicon-remove'>
                </button>
              </td>
            </tr>
    )
  }

}

export default Todo;
