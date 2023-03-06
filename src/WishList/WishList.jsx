import Wish from '../Wish/Wish';

const WishList = ({ wishes, deleteWish }) => {
  return (
    <ul>
      {!wishes.length && <p>You don't have any desires yet</p>}
      {wishes.map((wish) => {
        const { text, id, priority } = wish;
        return (
          <Wish
            key={id}
            id={id}
            text={text}
            priority={priority}
            deleteWish={deleteWish}
          />
        );
      })}
    </ul>
  );
};

export default WishList;
