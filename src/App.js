import { React, Component } from 'react';
// import shortid from 'shortid';
//Components
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;
  //   if (prevContacts !== nextContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  // addContact = (nameForAdd, numberForAdd) => {
  //   const isExistContact = this.state.contacts.find(
  //     ({ name }) => name === nameForAdd,
  //   );
  //   if (isExistContact) {
  //     alert(`${nameForAdd} is already in contacts`);
  //     return;
  //   }
  //   const contact = {
  //     id: shortid.generate(),
  //     name: nameForAdd,
  //     number: numberForAdd,
  //   };
  //   this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  // };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div className="Wrapper">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
