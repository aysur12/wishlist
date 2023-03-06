import { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Priority from '../Priority/Priority';

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
    <div>
      <p onDoubleClick={makeEditableTextHandler} onBlur={editTextHandler}>
        {text}
      </p>
      <Priority
        priority={selectedPriority}
        onChangePriority={priorityChangeHandler}
      />
      <RiDeleteBin2Line onClick={deleteWishHandler} />
    </div>
  );
};

export default Wish;
