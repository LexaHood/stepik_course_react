import { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name: '',
    email: ''
  };

  handleChangeInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert(`Im here: { name: ${this.state.name}, email: ${this.state.email} }`);
    event.preventDefault();
  }

  render() {
    const {name, email} = this.state;
    return <form onSubmit={this.handleSubmit}>
      <input type="text" value={name} name='name' placeholder="Enter name" onChange={this.handleChangeInput}/>
      <input type="text" value={email} name='email' placeholder="Enter email" onChange={this.handleChangeInput}/>
      <input type="submit" value="Отправить" />
    </form>
  }
}