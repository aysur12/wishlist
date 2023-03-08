import { useState, useEffect } from 'react';
import Wish from '../Wish/Wish';
import Button from '../UI/Button';
import saveJSON from '../../helpers/saveJSON';
import styles from './WishList.module.scss';

const WishList = ({ wishes, ...props }) => {
  const [filteredWishes, setFilteredWishes] = useState(wishes);

  useEffect(() => {
    setFilteredWishes(wishes);
  }, [wishes]);

  useEffect(() => {
    saveJSON('wishes', filteredWishes);
  }, [filteredWishes]);

  function filterByPriority(priority) {
    if (priority === 'all') {
      setFilteredWishes(wishes);
    } else {
      let newWishes = [...wishes].filter((wish) => wish.priority === priority);
      setFilteredWishes(newWishes);
    }
  }

  return (
    <div className={styles['wish-list']}>
      <ul className={styles['wish-list__list']}>
        {!filteredWishes.length && <p className={styles['wish-list__empty']}>You don't have any desires yet</p>}
        {filteredWishes.map((wish) => {
          const { text, id, priority } = wish;
          return (
            <Wish key={id} id={id} text={text} priority={priority} {...props} />
          );
        })}
      </ul>
      <div className={styles['wish-list__buttons']}>
        <Button onClick={() => filterByPriority('all')}>All</Button>
        <Button onClick={() => filterByPriority('low')}>Low</Button>
        <Button onClick={() => filterByPriority('medium')}>Medium</Button>
        <Button onClick={() => filterByPriority('high')}>High</Button>
      </div>
    </div>
  );
};

export default WishList;
