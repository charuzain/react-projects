import { useState } from 'react';
import './App.css';

const data = [
  {
    id: 1,
    name: 'Tim',
  },
  {
    id: 2,
    name: 'Dick',
  },
  {
    id: 3,
    name: 'Harry',
  },
  {
    id: 4,
    name: 'Peter',
  },
];
function App() {
  const [people, setPeople] = useState(data);

  const removeHandler = (id) => {
    const filteredNames = people.filter((person) => person.id !== id);
    setPeople(filteredNames);
  };

  const clearHandler = () => {
    setPeople([]);
  };

  const resetHandler = () => {
    setPeople(data);
  };

  return (
    <div className="person-container">
      <h1>Use Reducer</h1>
      {people.map((person) => {
        return (
          <>
            <p key={person.id}>{person.name}</p>
            <button onClick={() => removeHandler(person.id)}>Remove</button>
          </>
        );
      })}
      {people.length > 0 ? (
        <button onClick={clearHandler}>Clear</button>
      ) : (
        <button onClick={resetHandler}>Reset</button>
      )}
    </div>
  );
}

export default App;
