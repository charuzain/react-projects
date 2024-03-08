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
  const removeAllHandler = () => {
    setPeople([])
  }

  const deleteHandler = (id) => {
    const filteredData = people.filter(p => p.id !== id)
    setPeople(filteredData)
  }

  return (
    <>
      {people.map((person) => {
        return (
          <>
            <h3 key={person.id}>{person.name}</h3>
            <button onClick={()=>deleteHandler(person.id)}>Delete me</button>
          </>
        );
      })}
      <button onClick={removeAllHandler}>Remove all</button>
    </>
  );
}

export default App;
