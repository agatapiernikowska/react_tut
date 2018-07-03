import React, {Component} from 'react';
import './App.css';
import ContactItem from "./ContactItem";
import NameForm from "./NameForm";
import Date from "./Date";


class App extends Component {

  render() {
    return (
      <div>
        <ContactItem/>
        <NameForm/>
        <Date/>
      </div>
    );
  }
}

export default App;
