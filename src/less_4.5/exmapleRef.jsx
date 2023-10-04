import React, { createRef } from 'react';

export default class ExampleRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      card: ''
    };
    this.emailRef = createRef();
  }

  handlerOnChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value }, () => {
      if (this.state.card.length >= 16) this.emailRef.current.focus();
    });
  };

  render() {
    const { email, card } = this.state;
    return (
      <div>
        <input type="text" value={card} name='card' placeholder="Enter card" onChange={this.handlerOnChange} />
        <input type="text" value={email} name='email' placeholder="Enter email" ref={this.emailRef} onChange={this.handlerOnChange} />
      </div>
    );
  }
}