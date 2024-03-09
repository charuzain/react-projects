import { useState } from 'react';
import './App.css';

const data = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Peter',
  },
  {
    id: 3,
    name: 'Marry',
  },
];

function App() {
  const [people, setPeople] = useState(data);
  const [remove, setRemove] = useState(true);

  const [showInfo, setShowInfo] = useState(true);
  const removeAllHandler = () => {
    setRemove(!remove);
  };

  const deleteHandler = (id) => {
    const filteredData = people.filter((p) => p.id !== id);
    setPeople(filteredData);
  };

  const showHandler = () => {
    // if (showInfo) {
    //   setShowInfo(false);
    // }
    // else {
    //   setShowInfo(true);
    // }
    setShowInfo(!showInfo);
  };

  return (
    <section>
      {remove &&
        people.map((person) => {
          return (
            <>
              <h3 key={person.id}>{person.name}</h3>
              <button onClick={() => deleteHandler(person.id)}>
                Delete me
              </button>
            </>
          );
        })}
      <button onClick={removeAllHandler}>
        {remove ? 'Remove All' : 'show All'}
      </button>
      <button style={{ marginTop: '2rem' }} onClick={showHandler}>
        Toggle
      </button>
      {showInfo && (
        <div
          style={{ backgroundColor: 'red', marginTop: '2rem', padding: '2rem' }}
        >
          My name is Charu
        </div>
      )}
    </section>
  );
}

export default App;
