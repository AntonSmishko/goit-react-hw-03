import s from './Contact.module.css';
const Contact = ({ data }) => {
    return (
        <div className={s.wrapper}>
            <p className={s.text}>{data.name}</p>
            <span className={s.number}>{data.number}</span>
            <button className={s.btn}>Delete</button>
        </div>
    );
};

export default Contact;
