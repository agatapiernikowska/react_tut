import React, {Component} from 'react';

class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  firstNameChange(event) {
    this.setState({firstName: event.target.value})
  }

  lastNameChange(event) {
    this.setState({lastName: event.target.value})
  }

  render() {
    return (
      <div className='NameForm'>
        <input type="text" value={this.state.firstName} onInput={this.firstNameChange.bind(this)}/>
        <input type="text" value={this.state.lastName} onInput={this.lastNameChange.bind(this)}/>
        <output>{`${this.state.firstName} ${this.state.lastName}`}</output>
      </div>
    )
  }
}

export default NameForm;