import React from 'react';

class Button extends React.Component{
  constructor(props) {
    super(props)
  }
  //
  // handleCompleteClick() {
  //   this.setState(prevState => ({
  //     isCompleted: !prevState.isCompleted
  //   }))
  // }

  render() {
    const iconType = 'complete-button glyphicon ' + this.props.icon
    return(
        <button onClick={this.props.onClick} className={iconType}>
        </button>

    )
  }
}

export default Button
