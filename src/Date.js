import React, {Component} from 'react';
import DateComponent from "./DateComponent";

class DateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dateVisible: true};
  }

  onButtonClick() {
    this.setState(state => ({dateVisible: !state.dateVisible}));
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)}>Kliknij</button>
        {this.state.dateVisible && <DateComponent/>}
      </div>
    );
  }
}

export default DateButton;