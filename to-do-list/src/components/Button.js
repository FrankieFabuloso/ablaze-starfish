import React from 'react';

class Button extends React.Component{
  render() {
    const iconType = 'complete-button glyphicon ' + this.props.icon
    return(
        <button onClick={this.props.onClick} className={iconType}>
        </button>

    )
  }
}

export default Button
