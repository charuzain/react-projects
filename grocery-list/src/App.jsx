import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(newItems);
    setItems(newItems);
  };

  return (
    <>
      <header>
        <h1>Grocery List</h1>
      </header>
      <main>
        {!items.length ? (
          <p className='item'>No Items Present in the list</p>
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
