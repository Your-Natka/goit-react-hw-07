import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { filterName } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const handleChange = evt => dispatch(filterName(evt.target.value));

  const id = useId();
  return (
    <div className={css.filter}>
      <label className={css.text}>Find contacts</label>
      <input
        type="text"
        id={id}
        onChange={handleChange}
        placeholder="Search"
        className={css.input}
      />
    </div>
  );
}
