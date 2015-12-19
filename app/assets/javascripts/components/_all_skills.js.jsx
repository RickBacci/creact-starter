var AllSkills = React.createClass({
  getInitialState() {
    return { skills: [] }
  },

  componentDidMount() {
    // $.getJSON(
    //   '/api/v1/skills.json',
    //   (response) => { console.table(response) }
    // );

    $.getJSON(
      '/api/v1/skills.json',
      (response) => { this.setState({ skills: response }) }
    );

  },

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Hello from AllSkills!</h3>
      </div>
    )
  }

});
