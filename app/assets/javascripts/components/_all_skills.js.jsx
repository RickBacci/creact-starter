var AllSkills = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit() {
    console.log('in handleEdit');
  },

  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p><strong>Level:</strong> {skill.level}</p>
          <p>{skill.details}</p>
          <button onClick={this.handleDelete.bind(this, skill.id)}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }

});
