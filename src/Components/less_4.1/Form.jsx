import { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name: '',
    email: '',
    textZone: 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.',
    selectedOption: '',
    agreeOption: '',
    gender: ''
  };

  handleChangeInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert(`Im here: { name: ${this.state.name}, email: ${this.state.email} }`);
    event.preventDefault();
  }

  render() {
    const { name, email, textZone, selectedOption, agreeOption } = this.state;
    return <form onSubmit={this.handleSubmit}>
      <input type="text" value={name} name='name' placeholder="Enter name" onChange={this.handleChangeInput} />
      <input type="text" value={email} name='email' placeholder="Enter email" onChange={this.handleChangeInput} />
      <input type="submit" value="Отправить" />

      <textarea name="textZone" value={textZone} cols="30" rows="10" onChange={this.handleChangeInput}></textarea>

      <select value={selectedOption} onChange={this.handleChangeInput}>
        <option value="grapefruit">Грейпфрут</option>
        <option value="lime">Лайм</option>
        <option value="coconut">Кокос</option>
        <option value="mango">Манго</option>
      </select>

      <label>
        Я согласен
        <input
          name="agreeOption"
          type="checkbox"
          checked={agreeOption}
          onChange={this.handleChangeInput} />
      </label>

      <input type="radio" name="gender" value="male" onChange={this.handleChangeInput}/> Male
      <input type="radio" name="gender" value="female" onChange={this.handleChangeInput}/> Female
    </form>
  }
}