import Wish from '../Wish/Wish';

const WishList = ({ wishes, ...props }) => {
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
            {...props}
          />
        );
      })}
    </ul>
  );
};

export default WishList;
