import { useState } from 'react';
import Form from './Form/Form';
import './App.css';

function App() {
  const [wishes, setWishes] = useState([]);

  const addWishHandler = (text) => {
    const newWishes = {
      text: text,
    };
    setWishes([...wishes, newWishes]);
  };

  return (
    <div className="App">
      <h1>Wish List</h1>
      <Form addWish={addWishHandler} />
    </div>
  );
}

export default App;
