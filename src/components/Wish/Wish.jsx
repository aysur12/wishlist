import { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Priority from '../Priority/Priority';
import styles from './Wish.module.scss';

const Wish = (props) => {
  const { text, id, priority, deleteWish, editText, editPriority } = props;
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const priorityChangeHandler = (priorityValue) => {
    setSelectedPriority(priorityValue);
    editPriority(priorityValue, id);
  };

  const makeEditableTextHandler = (event) => {
    event.currentTarget.setAttribute('contenteditable', true);
    event.currentTarget.focus();
  };

  const deleteWishHandler = () => {
    deleteWish(id);
  };

  const editTextHandler = (event) => {
    const updatedText = event.currentTarget.innerText.trim();
    editText(updatedText, id);
  };

  return (
    <li className={styles['wish']}>
      <p
        className={styles['wish__text']}
        onDoubleClick={makeEditableTextHandler}
        onBlur={editTextHandler}
      >
        {text}
      </p>
      <div className={styles['wish__actions']}>
        <Priority
          priority={selectedPriority}
          onChangePriority={priorityChangeHandler}
        />
        <RiDeleteBin2Line
          className={styles['wish__button']}
          onClick={deleteWishHandler}
        />
      </div>
    </li>
  );
};

export default Wish;
