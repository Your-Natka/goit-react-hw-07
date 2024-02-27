import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const validationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required field!'),
  phone: Yup.string()
    .min(9, 'Not enough symbols!')
    .max(9, 'Too long!')
    .required('Required field!'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameField = useId();
  const phoneField = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationFormSchema}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label className={css.label} htmlFor={nameField}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameField} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.item}>
          <label className={css.label} htmlFor={phoneField}>
            Phone
          </label>
          <Field
            className={css.input}
            type="text"
            name="phone"
            id={phoneField}
          />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
