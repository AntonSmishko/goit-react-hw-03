import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contactData from '../assets/contactData.json';
import { useState } from 'react';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [contact, setContact] = useState(contactData);
    const [filter, setFilter] = useState('');

    const addContact = newContact => {
        setContact(prev => [...prev, newContact]);
    };
    const onDelete = contactId => {
        setContact(prev => {
            return prev.filter(contact => contact.id !== contactId);
        });
    };
    return (
        <>
            <div>
                <h1>Phonebook</h1>
                <ContactForm addContact={addContact} />
                <SearchBox />
                <ContactList data={contact} onDelete={onDelete} />
            </div>
        </>
    );
}

export default App;
