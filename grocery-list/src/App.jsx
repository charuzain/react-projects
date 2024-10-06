import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: 'Milk',
      checked: false,
    },
    {
      id: 2,
      itemName: 'Banana',
      checked: false,
    },
    {
      id: 3,
      itemName: 'Bread',
      checked: false,
    },
  ]);

  const [newItem, setNewItem] = useState('');

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(newItems);
    setItems(newItems);
  };

  const handleAddNewItem = (e) => {
    console.log(e.target.value);
    setNewItem(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(newItem);
    if (!newItem.trim()) {
      return;
    }
    const newListItem = {
      id: items.length + 1,
      itemName: newItem,
      checked: false,
    };
    setItems([...items, newListItem]);
    setNewItem('');
  };

  return (
    <>
      <header>
        <h1>Grocery List</h1>
      </header>
      <main>
        <section>
          <form className="addItem" onSubmit={formSubmitHandler}>
            <input
              type="text"
              value={newItem}
              onChange={(e) => handleAddNewItem(e)}
              placeholder="Add New Item"
              className=""
            />
            <button type="submit" className="submit">
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </button>
          </form>
        </section>
        <form className="search">
          <input type="text" name="" id="" placeholder="Search for An Item" />
        </form>
        {!items.length ? (
          <p className="item">No Items Present in the list</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div className="list-left">
                  <input type="checkbox" id={item.itemName} />
                  <label htmlFor={item.itemName}>{item.itemName}</label>
                </div>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon"
                  onClick={() => deleteItem(item.id)}
                />
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer>Total Items : {items.length}</footer>
    </>
  );
}

export default App;
