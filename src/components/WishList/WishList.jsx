import { useState, useEffect } from 'react';
import Wish from '../Wish/Wish';
import Button from '../UI/Button';

const WishList = ({ wishes, ...props }) => {
  const [filtered, setFilteredWishes] = useState(wishes);

  useEffect(() => {
    setFilteredWishes(wishes);
  }, [wishes]);

  const filterByPriority = (priority) => {
    if (priority === 'all') {
      setFilteredWishes(wishes);
    } else {
      let newWishes = [...wishes].filter((wish) => wish.priority === priority);
      setFilteredWishes(newWishes);
    }
  };


  return (
    <div>
      <ul>
        {!filtered.length && <p>You don't have any desires yet</p>}
        {filtered.map((wish) => {
          const { text, id, priority } = wish;
          return (
            <Wish key={id} id={id} text={text} priority={priority} {...props} />
          );
        })}
      </ul>
      <div>
        <Button onClick={() => filterByPriority('all')}>All</Button>
        <Button onClick={() => filterByPriority('low')}>Low</Button>
        <Button onClick={() => filterByPriority('medium')}>Medium</Button>
        <Button onClick={() => filterByPriority('high')}>High</Button>
      </div>
    </div>
  );
};

export default WishList;
