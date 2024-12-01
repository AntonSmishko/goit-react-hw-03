import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
const ContactList = ({ data }) => {
    return (
        <ul>
            {data.map(data => (
                <li key={data.id} className={s.item}>
                    <Contact data={data}></Contact>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
