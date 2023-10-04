import { validate } from 'email-validator';
import React from 'react';

export default class ValidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isAgreeWithTerms: false,
      isEmailValid: null
    };
  }

  validateTextInput = (event) => {
    const isValid = validate(event.target.value);
    this.setState({isEmailValid: isValid});
  };

  handlerOnChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  };

  render() {
    const { email, isAgreeWithTerms, isEmailValid } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handlerOnChange}
          onBlur={this.validateTextInput}
          style={{ borderColor: isEmailValid || isEmailValid === null ? 'initial' : 'red' }}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handlerOnChange}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button disabled={!isEmailValid || !isAgreeWithTerms}>Send</button>
      </div>
    );
  }
}