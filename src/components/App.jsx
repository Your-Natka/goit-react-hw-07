import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { selectLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
