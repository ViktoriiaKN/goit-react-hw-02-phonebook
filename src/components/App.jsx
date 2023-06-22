import { Component } from 'react';

export class App extends Component {
  state = { contacts: [], name: '' };

  handleChange = evt => {
    this.setState();
  };

  onSubmit = () => {};

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <button type="submit">ADD CONTACT</button>
          </label>
        </form>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
