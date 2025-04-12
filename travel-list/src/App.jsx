import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const formHandler = (quantity, itemName) => {
    setItems([
      ...items,
      { quantity, itemName, id: Date.now(), isPacked: false },
    ]);
  };

  const checkBoxHandler = (id) => {
    const checkedItem = items.map((item) => {
      if (item.id === id) {
        item.isPacked = !item.isPacked;
        return item;
      }
      return item;
    });
    setItems(checkedItem);
  };

  const removeItemHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearListHandler = () => {
    setItems([]);
  };
  return (
    <>
      <Header />
      <Form onSubmit={formHandler} />
      <PackingList
        items={items}
        checkBoxHandler={checkBoxHandler}
        removeItemHandler={removeItemHandler}
        clearListHandler={clearListHandler}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
