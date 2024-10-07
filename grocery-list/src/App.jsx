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
  const [searchTerm, setSearchTerm] = useState('');

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    console.log(newItems);
    setItems(newItems);
  };

  const handleAddNewItem = (e) => {
    setNewItem(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
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

  const searchSubmitHandler = (e) => {
    console.log('click');
    e.preventDefault();
  };

  const searchChangeHandler = (e) => {
    // if searchterm is empty , display initial list

    let currentSearchTerm = e.target.value; //milu
    setSearchTerm(currentSearchTerm);
    // if (currentSearchTerm.trim().length === 0) {
    //   console.log('first');
    //   setItems(...items);
    // } else {
    //   const newItemList = items.filter((item) =>
    //     item.itemName.toLowerCase().includes(currentSearchTerm.toLowerCase())
    //   );
    //   setItems(newItemList);
    // }
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
        <form className="search" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search for An Item"
            value={searchTerm}
            onChange={searchChangeHandler}
          />
        </form>
        {!items.length ? (
          <p className="item">No Items Present in the list</p>
        ) : (
          <ul>
            {items.filter((i) =>i.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ).map((item) => (
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
