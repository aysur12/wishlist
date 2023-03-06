import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import WishList from './WishList/WishList';

import './App.css';

function App() {
  const [wishes, setWishes] = useState([]);

  const addWishHandler = (text, priority) => {
    const newWish = {
      text: text,
      id: uuidv4(),
      priority: priority,
    };

    setWishes((prevWishes) => {
      const updatedWishes = [...prevWishes, newWish];
      return updatedWishes;
    });
  };

  const onDeleteWishHandler = (id) => {
    setWishes((prevWishes) => {
      const updatedWishes = prevWishes.filter((wish) => wish.id !== id);
      return updatedWishes;
    });
  };

  return (
    <div className="App">
      <h1>Wish List</h1>
      <Form addWish={addWishHandler} />
      <WishList wishes={wishes} deleteWish={onDeleteWishHandler} />
    </div>
  );
}

export default App;
