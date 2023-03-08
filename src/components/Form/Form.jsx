import { useState } from 'react';
import Priority from '../Priority/Priority';
import Button from '../UI/Button';
import styles from './Form.module.scss';

const Form = ({ addWish }) => {
  const [text, setText] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [selectedPriority, setSelectedPriority] = useState('low');

  const priorityChangeHandler = (priority) => {
    setSelectedPriority(priority);
  };

  const onChangeHandler = (event) => {
    if (event.target.value.trim().length) {
      setIsInputValid(true);
    }
    setText(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!text.trim().length) {
      setIsInputValid(false);
      return;
    }
    addWish(text, selectedPriority);
    setText('');
  };

  return (
    <form className={styles['form']} onSubmit={onSubmitHandler}>
      <label className={styles['form__label']}>
        <input
          className={`${styles['form__input']} ${
            !isInputValid && styles['form__input_invalid']
          } `}
          type="text"
          placeholder="Enter a wish"
          value={text}
          onChange={onChangeHandler}
        />
      </label>
      <div className={styles['form__bottom-block']}>
        <Priority
          priority={selectedPriority}
          onChangePriority={priorityChangeHandler}
        />
        <Button type="submit" title="Add">
          Add
        </Button>
      </div>
    </form>
  );
};

export default Form;
