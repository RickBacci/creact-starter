var Skill = React.createClass({

  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if (this.state.editable) {
      var id      = this.props.skill.id;
      var name    = this.refs.name.getDOMNode().value;
      var details = this.refs.details.getDOMNode().value;
      var level   = this.props.skill.level;
      var skill   = { id: id, name: name, details: details, level: level };
      console.log('in handleEdit', this.state.editable, name, details);

      this.props.handleUpdate(skill);
    }

    this.setState({ editable: !this.state.editable })
  },

  handleLevelChange(action) {
    let levels  = ['bad', 'halfbad', 'fantastic'];
    let name    = this.props.skill.name;
    let details = this.props.skill.details;
    let level   = this.props.skill.level;
    let index   = levels.indexOf(level);

    if (action === 'up' && index < 2) {
      let newLevel = levels[index + 1];
      this.props.handleUpdate({id: this.props.skill.id, name: name, details: details, level: newLevel})
    } else if (action === 'down' && index > 0) {
      let newLevel = levels[index - 1];
      this.props.handleUpdate({id: this.props.skill.id, name: name, details: details, level: newLevel})
    }
  },

  render() {
    var name = this.state.editable ? <input type='text'
      ref='name'
      defaultValue={this.props.skill.name} />
        : <h3>{this.props.skill.name}</h3>

        var details = this.state.editable ? <textarea type='text'
          ref='details'
          defaultValue={this.props.skill.details}>
        </textarea>
          : <p>{this.props.skill.details}</p>

          return (

            <div>
              {name}
              <div className='skill-level'>
                <button type="button"
                  className="btn btn-default btn-sm"
                  onClick={this.handleLevelChange.bind(this, 'down')}>
                  <span className="glyphicon glyphicon-triangle-bottom"></span>
                </button>

                <p><strong>Level:</strong> {this.props.skill.level}</p>

                <button type="button"
                  className="btn btn-default btn-sm"
                  onClick={this.handleLevelChange.bind(this, 'up')}>
                  <span className="glyphicon glyphicon-triangle-top"></span>
                </button>
              </div>
              {details}

              <button onClick={this.props.handleDelete}>Delete</button>
              <button onClick={this.props.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
            </div>
          )
  }

});
