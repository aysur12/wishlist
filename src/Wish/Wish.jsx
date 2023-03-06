import { RiDeleteBin2Line } from 'react-icons/ri';
import Priority from '../Priority/Priority';

const Wish = ({ text, id, priority, deleteWish, editText }) => {
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
    console.log(updatedText);
  };

  return (
    <div>
      <p onDoubleClick={makeEditableTextHandler} onBlur={editTextHandler}>
        {text}
      </p>
      <Priority />
      <RiDeleteBin2Line onClick={deleteWishHandler} />
    </div>
  );
};

export default Wish;
