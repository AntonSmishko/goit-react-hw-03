import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Введіть повне імя')
        .max(50, 'Ви ввели забагато символів')
        .required('Обовязково'),
    number: Yup.string()
        .min(3, 'Номер занадто короткий')
        .max(13, 'Номер занадто довгий')
        .required('Обовязково'),
});

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
            <Formik
                initialValues={initialValues}
                onSubmit={onFormSubmit}
                validationSchema={ValidationSchema}
            >
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
                    <ErrorMessage name="name" component="span" />
                    <label className={s.label} htmlFor={numberFieldId}>
                        Number
                    </label>
                    <Field
                        className={s.field}
                        type="number"
                        name="number"
                        id={numberFieldId}
                    />
                    <ErrorMessage name="number" component="span" />
                    <button className={s.btn} type="submit">
                        Add contact
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default ContactForm;
