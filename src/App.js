import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';
import WishList from './WishList/WishList';

import './App.css';

function App() {
  const [wishes, setWishes] = useState([]);

  const onAddWishHandler = (text, priority) => {
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

  const onEditTextHandler = (text, id) => {
    const updatedWish = wishes.find((wish) => wish.id === id);
    updatedWish.text = text;
  };

  const onEditPriority = (priority, id) => {
    const updatedWish = wishes.find((wish) => wish.id === id);
    updatedWish.priority = priority;
    console.log(wishes);
  };

  return (
    <div className="App">
      <h1>Wish List</h1>
      <Form addWish={onAddWishHandler} />
      <WishList
        wishes={wishes}
        deleteWish={onDeleteWishHandler}
        editText={onEditTextHandler}
        editPriority={onEditPriority}
      />
    </div>
  );
}

export default App;
