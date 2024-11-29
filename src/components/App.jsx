import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contactData from '../assets/contactData.json';
import { useState } from 'react';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [contact, setContact] = useState(contactData);

    return (
        <>
            <div>
                <h1>Phonebook</h1>
                <ContactForm />
                <SearchBox />
                <ContactList data={contact} />
            </div>
        </>
    );
}

export default App;
