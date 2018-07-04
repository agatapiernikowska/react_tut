import React, {Component} from 'react';
import './App.css';
import ContactItem from "./ContactItem";
import NameForm from "./NameForm";
import Date from "./Date";
import UsersComponent from "./UsersComponent";



class App extends Component {

  render() {
    return (
      <div>
        <ContactItem/>
        <NameForm/>
        <Date/>
        <UsersComponent/>

      </div>
    );
  }
}

export default App;
