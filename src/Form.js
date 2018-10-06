import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initiateState = {
      name: "",
      job: "",
      message: "Add New"
    };

    this.state = this.initiateState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    if (this.state.name && this.state.job) {
      this.props.handleSubmit(this.state);
      this.setState(this.initiateState);
    } else {
      this.setState({
        message: "Name or Job could NOT be empty"
      });
    }
  };

  render() {
    const { name, job } = this.state;

    return (
      <div>
        <h3>{this.state.message}</h3>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label>Job</label>
          <input
            type="text"
            name="job"
            value={job}
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

export default Form;
