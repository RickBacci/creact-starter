var NewSkill = React.createClass({

  handleClick() {
    let name    = this.refs.name.getDOMNode().value;
    let details = this.refs.details.getDOMNode().value;

    $.ajax({
      url:  '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details } },
      success: (response) => {
        console.log('it worked!', response);
      }
    });

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
