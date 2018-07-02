import React, { Component } from 'react';
import './App.css';
import ContactItem from "./ContactItem";
import NameForm from "./NameForm";


class App extends Component {

  render() {
    return (
      <div>

      <ContactItem/>
      <NameForm/>
      </div>
    );
  }
}



export default App;
