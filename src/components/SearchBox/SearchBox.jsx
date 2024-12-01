import s from './SearchBox.module.css';
const SearchBox = () => {
    return (
        <div className={s.wrapper}>
            <p className={s.text}>Find contacts by name</p>
            <input className={s.input} type="text"></input>
        </div>
    );
};

export default SearchBox;
