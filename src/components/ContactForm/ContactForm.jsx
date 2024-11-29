import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const initialValues = {
    username: '',
    tel: '',
};

const ContactForm = () => {
    const onFormSubmit = (values, options) => {
        console.log(values);
        options.resetForm();
    };

    const nameFieldId = nanoid();
    const numberFieldId = nanoid();
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                <Form className={s.wrapper}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="username" id={nameFieldId} />

                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="number" name="tel" id={numberFieldId} />
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </>
    );
};

export default ContactForm;
