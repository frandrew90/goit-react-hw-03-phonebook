import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './contactList/ContactList';
import ContactForm from './contatctForm/ContactForm';
import Filter from './filter/Filter';
import s from '../Components/App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addNewContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: uuidv4() }],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  removeContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
      filter: '',
    }));
  };

  findContact = e => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  isThereContact = name =>
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

  render() {
    return (
      <>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm
          //   handleChange={this.handleChange}
          addNewContact={this.addNewContact}
          isThereContact={this.isThereContact}
        />

        <h2 className={s.title}>Contacts</h2>

        <Filter filter={this.state.filter} onChange={this.handleChange} />

        <ContactList
          findContact={this.findContact()}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}

export default App;
