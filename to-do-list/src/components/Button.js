import React from 'react';

class Button extends React.Component{
  render() {
    const iconType = ' glyphicon ' + this.props.icon
    return(
        <button onClick={this.props.onClick} className={iconType}>
        </button>

    )
  }
}

export default Button
