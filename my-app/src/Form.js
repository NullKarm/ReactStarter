import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;
  // abaixo sao todos methods pk estamos a definir funcs que vao estar disponiveis a este Obj especifico
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    // invoca a func handleSubmit da App Comp(comp mae), e passa como arg o state atual da form como parametro char def na func. Seguidamente faz reset do state, com os valores novos
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={this.handleChange}></input>
        <label htmlFor="job">Job</label>
        <input type="text" name="job" id="job" value={job} onChange={this.handleChange}></input>
        <input type="button" value="Submit" onClick={this.submitForm}></input>
      </form>
    );
  }
}

export default Form;
