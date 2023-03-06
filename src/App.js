import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form/Form';

import './App.css';

function App() {
  const [wishes, setWishes] = useState([]);

  const addWishHandler = (text, priority) => {
    const newWishes = {
      text: text,
      id: uuidv4(),
      priority: priority,
    };
    setWishes([...wishes, newWishes]);
    console.log(wishes);
  };

  return (
    <div className="App">
      <h1>Wish List</h1>
      <Form addWish={addWishHandler} />
    </div>
  );
}

export default App;
