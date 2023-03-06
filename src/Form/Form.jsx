import { useState } from 'react';
import Priority from '../Priority/Priority';
import Button from '../UI/Button';
import styles from './Form.module.scss';

const Form = ({ addWish }) => {
  const [text, setText] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('low');

  const priorityChangeHandler = (priority) => {
    setSelectedPriority(priority);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addWish(text, selectedPriority);
    setText('');
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label className={styles.formLabel}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter a wish"
          value={text}
          onChange={onChangeHandler}
        />
      </label>
      <Priority
        priority={selectedPriority}
        onChangePriority={priorityChangeHandler}
      />
      <Button type="submit" title="Add">
        Add
      </Button>
    </form>
  );
};

export default Form;
