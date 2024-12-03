import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
const ContactList = ({ data, onDelete }) => {
    return (
        <ul>
            {data.map(data => (
                <li key={data.id} className={s.item}>
                    <Contact data={data} onDelete={onDelete}></Contact>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
