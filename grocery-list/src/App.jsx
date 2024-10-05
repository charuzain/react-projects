import './App.css';

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
            <>
              <li key={item.id}>{item.itemName}</li>
              <button>Delete</button>
            </>
          ))}
        </ul>
      </main>
      <footer>Total Items</footer>
    </>
  );
}

export default App;
