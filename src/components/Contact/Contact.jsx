import s from './Contact.module.css';
const Contact = ({ data, onDelete }) => {
    return (
        <div className={s.wrapper}>
            <p className={s.text}>{data.name}</p>
            <span className={s.number}>{data.number}</span>
            <button
                className={s.btn}
                onClick={() => {
                    onDelete(data.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default Contact;
