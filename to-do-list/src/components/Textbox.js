import React from 'react';

class Textbox extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="input-group col-lg-6">
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button" onClick={()=> console.log("poop")}>Go!</button>
      </span>
      <input type="text" className="form-control" placeholder="What do you want to do?"></input>
    </div>
    )
  }
}

export default Textbox
