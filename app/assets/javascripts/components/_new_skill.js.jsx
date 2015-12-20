var NewSkill = React.createClass({

  handleClick() {
    let name    = this.refs.name.getDOMNode().value;
    let details = this.refs.details.getDOMNode().value;
    console.log(name, details);
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter name of skill' />
        <input ref='details' placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

});
