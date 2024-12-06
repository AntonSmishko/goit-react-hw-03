import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contactData from '../assets/contactData.json';
import { useState, useEffect } from 'react';

function App() {
    const [contact, setContact] = useState(() => {
        const parsedData = localStorage.getItem('contact');
        return parsedData ? JSON.parse(parsedData) : contactData;
    });
    const [filter, setFilter] = useState('');
    useEffect(() => {
        localStorage.setItem('contact', JSON.stringify(contact));
    }, [contact]);

    const addContact = newContact => {
        setContact(prev => [...prev, newContact]);
    };
    const onDelete = contactId => {
        setContact(prev => {
            return prev.filter(contact => contact.id !== contactId);
        });
    };

    const filterContacts = contact.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <>
            <div>
                <h1>Phonebook</h1>

                <ContactForm addContact={addContact} />
                <SearchBox value={filter} onFilter={setFilter} />
                <ContactList data={filterContacts} onDelete={onDelete} />
            </div>
        </>
    );
}

export default App;
