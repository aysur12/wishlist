const WishList = ({ wishes }) => {
  if (!wishes.length) {
    return <p>You don't have any desires yet</p>;
  }

  return (
    <ul>
      {wishes.map((wish) => {
        const { text, id, priority } = wish;
        return <Wish key={id} text={text} priority={priority} />;
      })}
    </ul>
  );
};

export default WishList;
