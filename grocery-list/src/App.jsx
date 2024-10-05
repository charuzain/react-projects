import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const items = [
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
  ];

  return (
    <>
      <header>
        <h1>Grocery List</h1>
      </header>
      <main>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" id={item.itemName} />
              <label htmlFor={item.itemName}>{item.itemName}</label>
              <FontAwesomeIcon icon={faTrash} />
            </li>
          ))}
        </ul>
      </main>
      <footer>Total Items</footer>
    </>
  );
}

export default App;
