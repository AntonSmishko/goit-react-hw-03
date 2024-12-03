import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const initialValues = {
    name: '',
    number: '',
};

const ContactForm = ({ addContact }) => {
    const onFormSubmit = (values, options) => {
        options.resetForm();

        addContact({ ...values, id: nanoid() });
    };

    const nameFieldId = nanoid();
    const numberFieldId = nanoid();
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                <Form className={s.wrapper}>
                    <label className={s.label} htmlFor={nameFieldId}>
                        Name
                    </label>
                    <Field
                        className={s.field}
                        type="text"
                        name="name"
                        id={nameFieldId}
                    />

                    <label className={s.label} htmlFor={numberFieldId}>
                        Number
                    </label>
                    <Field
                        className={s.field}
                        type="number"
                        name="number"
                        id={numberFieldId}
                    />
                    <button className={s.btn} type="submit">
                        Add contact
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default ContactForm;
