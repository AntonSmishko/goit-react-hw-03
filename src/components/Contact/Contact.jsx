const Contact = ({ data }) => {
    return (
        <div>
            <p>{data.name}</p>
            <span>{data.number}</span>
            <button>Delete</button>
        </div>
    );
};

export default Contact;
