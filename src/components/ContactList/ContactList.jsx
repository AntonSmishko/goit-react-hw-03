import Contact from '../Contact/Contact';

const ContactList = ({ data }) => {
    return (
        <ul>
            {data.map(data => (
                <li key={data.id}>
                    <Contact data={data}></Contact>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
