var Body = React.createClass({

  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    $.getJSON(
      '/api/v1/skills.json',
      (response) => { this.setState({ skills: response }) }
    );
  },

  handleSubmit(skill) {
    let newState = this.state.skills.concat(skill);
    this.setState({ skills: newState });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeIdeaFromDOM(id);
      }
    });
  },

  removeIdeaFromDOM(id) {
    let newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },

  handleUpdate(skill) {
    console.log('in handleUpdate in body')
    debugger;
    $.ajax({
      url: `/api/v1/skills/${skill.id}`,
      type: 'PUT',
      data: { skill: skill },
      success: () => {
        this.updateSkills(skill);
      }
    });
  },

  updateSkills(skill) {
    var skills = this.state.skills.filter((s) => { return s.id != skill.id });
    skills.push(skill);

    this.setState({ skills: skills });
  },

  render() {
    return (
      <div>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills}
          handleDelete={this.handleDelete}
          onUpdate={this.handleUpdate} />
      </div>
    )
  }

});
