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

  const onSort = (sortInput) => {
    console.log(sortInput);
    const timeObj = items.map((item) => item.id);
    console.log(timeObj);
    if (sortInput === 'order') {
      setItems(items.sort((a, b) => a.id - b.id));
    }
    if (sortInput === 'quantity') {
      setItems(items.sort((a, b) => a.quantity - b.quantity));
    }
    if (sortInput === 'status') {
      setItems(items.sort((a, b) => a.isPacked - b.isPacked));
    }
    if (sortInput === 'itemName') {
      setItems(items.sort((a, b) => a.itemName.localeCompare(b.itemName)));
    }
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
        onSort={onSort}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
