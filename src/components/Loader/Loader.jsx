import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <Oval
        visible={true}
        height="200"
        width="100"
        color="#111"
        secondaryColor="#111"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
