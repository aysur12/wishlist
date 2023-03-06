import { RiDeleteBin2Line } from 'react-icons/ri';

const Wish= ({ text, id, priority, deleteWish }) => {
  const deleteWishHandler = () => {
    deleteWish(id);
  };

  return (
    <div>
      <p>{text}</p>
      <RiDeleteBin2Line onClick={deleteWishHandler} />
    </div>
  );
};

export default Wish;
