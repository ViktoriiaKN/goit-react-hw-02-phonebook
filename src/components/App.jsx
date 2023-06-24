import { nanoid } from 'nanoid';
import { Component } from 'react';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };

  handleChange = evt => {
    console.log(evt.target.name);
    console.log(evt.target.value);

    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    this.resetForm();
  }; /* При сабміті обов'язково прописуємо evt.preventDefault, 
  тому-що його поведінка за замовчуванням перезавантажує сторінку */

  resetForm = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            NAME
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            NUMBER
            <input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">ADD CONTACT</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}</span>
              <span>{number}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
