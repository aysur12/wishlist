import { useState } from 'react';
import Button from '../UI/Button';
import styles from './Form.module.scss';

const Form = ({ addWish }) => {
  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addWish(text);
    setText('');
  };

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label className={styles.formLabel}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Введите желание"
          value={text}
          onChange={onChangeHandler}
        />
      </label>
      <Button type="submit" title="Добавить">
        +
      </Button>
    </form>
  );
};

export default Form;